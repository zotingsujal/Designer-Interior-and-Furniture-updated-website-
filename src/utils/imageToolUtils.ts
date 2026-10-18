import JSZip from 'jszip';
import { FurnitureProduct } from '../data/furniture';

export interface ImageItem {
  id: string;
  file: File;
  filename: string;
  originalDataUrl: string;
  originalWidth: number;
  originalHeight: number;
  originalAspectRatio: string;
  
  // Matching status
  matched: boolean;
  productSlug?: string;
  productName?: string;
  slotIndex: number; // 0-based
  matchReason?: string;
  
  // Processing status
  status: 'idle' | 'queued' | 'processing' | 'ready' | 'approved' | 'failed';
  processedDataUrl?: string;
  method?: 'gemini' | 'canvas-outpaint';
  retryCount: number;
  errorMessage?: string;
  
  // Approval
  isApproved: boolean;
  savedPath?: string;
}

/**
 * Normalizes text to kebab-case for strict matching
 */
export function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/['"’`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Matches a filename to its product and slot according to rule:
 * e.g. modern-criss-cross-sofa-set_1.jpg => that product, image slot 1
 * If a file name does not match exactly one product and slot, do not guess.
 */
export function matchFilenameToProduct(
  filename: string,
  products: FurnitureProduct[]
): {
  matched: boolean;
  productSlug?: string;
  productName?: string;
  slotIndex: number;
  reason?: string;
} {
  // Strip file extension
  const nameWithoutExt = filename.replace(/\.[a-zA-Z0-9]+$/, '').trim();

  // Find trailing slot number: _1, -1, _2, etc.
  const slotMatch = nameWithoutExt.match(/[_-](\d+)$/);
  if (!slotMatch) {
    return {
      matched: false,
      slotIndex: 0,
      reason: 'No slot number found at end of filename (expected e.g. _1 or _2)',
    };
  }

  const slotNumber = parseInt(slotMatch[1], 10);
  if (slotNumber < 1) {
    return {
      matched: false,
      slotIndex: 0,
      reason: 'Slot number must be 1 or greater',
    };
  }
  const slotIndex = slotNumber - 1;

  // The candidate product name is before the slot number
  const candidateRaw = nameWithoutExt.slice(0, slotMatch.index).trim();
  const candidateNorm = normalizeString(candidateRaw);

  if (!candidateNorm) {
    return {
      matched: false,
      slotIndex,
      reason: 'Empty product name before slot number',
    };
  }

  // Exact matching against products
  const exactMatches = products.filter((p) => {
    const slugNorm = normalizeString(p.slug);
    const nameNorm = normalizeString(p.name);
    const idNorm = normalizeString(p.id);

    return (
      slugNorm === candidateNorm ||
      nameNorm === candidateNorm ||
      idNorm === candidateNorm
    );
  });

  if (exactMatches.length === 1) {
    return {
      matched: true,
      productSlug: exactMatches[0].slug,
      productName: exactMatches[0].name,
      slotIndex,
    };
  }

  if (exactMatches.length > 1) {
    return {
      matched: false,
      slotIndex,
      reason: `Ambiguous: matches ${exactMatches.length} products (${exactMatches.map((p) => p.name).join(', ')})`,
    };
  }

  return {
    matched: false,
    slotIndex,
    reason: `No product exactly matched "${candidateRaw}"`,
  };
}

/**
 * High-fidelity 5:4 (1600x1280 px) Canvas Outpainting Extension:
 * Adds extended wall at the top and floor at the bottom while keeping the
 * central furniture 100% pixel-perfect and unmodified at 1600x1280 resolution.
 */
export async function extendImageTo5x4Canvas(
  imgSource: HTMLImageElement | string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = typeof imgSource === 'string' ? new Image() : imgSource;
    if (typeof imgSource === 'string') {
      img.crossOrigin = 'anonymous';
      img.src = imgSource;
    }

    const process = () => {
      try {
        const TARGET_W = 1600;
        const TARGET_H = 1280; // 5:4 aspect ratio (1600 / 1280 = 1.25)

        const canvas = document.createElement('canvas');
        canvas.width = TARGET_W;
        canvas.height = TARGET_H;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Canvas 2D context unavailable');
        }

        // Calculate placement of original image to span TARGET_W (1600px)
        const srcW = img.naturalWidth || img.width;
        const srcH = img.naturalHeight || img.height;
        const scale = TARGET_W / srcW;
        const renderedH = Math.round(srcH * scale);

        // Center vertically
        const offsetY = Math.round((TARGET_H - renderedH) / 2);

        // 1. Fill base with neutral background sampled from top/bottom
        ctx.fillStyle = '#E8E3DC';
        ctx.fillRect(0, 0, TARGET_W, TARGET_H);

        // 2. Draw Top Wall Extension (if offsetY > 0)
        if (offsetY > 0) {
          // Sample top 80px band of image and vertically mirror/feather up
          const sampleH = Math.min(80, Math.floor(srcH * 0.15));
          const topBandCanvas = document.createElement('canvas');
          topBandCanvas.width = srcW;
          topBandCanvas.height = sampleH;
          const topCtx = topBandCanvas.getContext('2d');
          if (topCtx) {
            topCtx.drawImage(img, 0, 0, srcW, sampleH, 0, 0, srcW, sampleH);

            // Mirror vertically into the top space
            ctx.save();
            ctx.translate(0, offsetY);
            ctx.scale(1, -1);
            // Draw mirrored band
            ctx.drawImage(topBandCanvas, 0, 0, srcW, sampleH, 0, 0, TARGET_W, offsetY);
            ctx.restore();

            // Apply soft vertical gradient overlay to make top wall tone uniform and natural
            const topGrad = ctx.createLinearGradient(0, 0, 0, offsetY);
            // Sample top edge pixel average
            const pixelData = topCtx.getImageData(0, 0, Math.min(srcW, 50), 1).data;
            const r = pixelData[0], g = pixelData[1], b = pixelData[2];
            topGrad.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
            topGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.6)`);
            topGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = topGrad;
            ctx.fillRect(0, 0, TARGET_W, offsetY);
          }
        }

        // 3. Draw Bottom Floor Extension (if space below)
        const bottomSpace = TARGET_H - (offsetY + renderedH);
        if (bottomSpace > 0) {
          const sampleH = Math.min(80, Math.floor(srcH * 0.15));
          const sampleY = srcH - sampleH;
          const botBandCanvas = document.createElement('canvas');
          botBandCanvas.width = srcW;
          botBandCanvas.height = sampleH;
          const botCtx = botBandCanvas.getContext('2d');
          if (botCtx) {
            botCtx.drawImage(img, 0, sampleY, srcW, sampleH, 0, 0, srcW, sampleH);

            // Mirror vertically downwards
            ctx.save();
            ctx.translate(0, offsetY + renderedH);
            ctx.scale(1, -1);
            ctx.drawImage(botBandCanvas, 0, 0, srcW, sampleH, 0, -bottomSpace, TARGET_W, bottomSpace);
            ctx.restore();

            // Gradient fade to soften reflection
            const botGrad = ctx.createLinearGradient(0, offsetY + renderedH, 0, TARGET_H);
            const pixelData = botCtx.getImageData(0, sampleH - 1, Math.min(srcW, 50), 1).data;
            const r = pixelData[0], g = pixelData[1], b = pixelData[2];
            botGrad.addColorStop(0, 'rgba(0,0,0,0)');
            botGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.5)`);
            botGrad.addColorStop(1, `rgb(${r}, ${g}, ${b})`);
            ctx.fillStyle = botGrad;
            ctx.fillRect(0, offsetY + renderedH, TARGET_W, bottomSpace);
          }
        }

        // 4. Draw central furniture crisp and untouched
        ctx.drawImage(img, 0, 0, srcW, srcH, 0, offsetY, TARGET_W, renderedH);

        // Convert to high quality JPEG
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };

    if (img.complete && (img.naturalWidth || img.width)) {
      process();
    } else {
      img.onload = () => process();
      img.onerror = (e) => reject(new Error('Failed to load image for canvas extension'));
    }
  });
}

/**
 * Downloads all processed 5:4 images as a single ZIP file with identical filenames
 */
export async function downloadAllAsZip(
  items: Array<{ filename: string; processedDataUrl?: string }>,
  zipFilename = 'designer-furniture-5x4-images.zip'
): Promise<void> {
  const zip = new JSZip();

  const validItems = items.filter((item) => Boolean(item.processedDataUrl));
  if (validItems.length === 0) {
    throw new Error('No processed 5:4 images available to download');
  }

  for (const item of validItems) {
    if (!item.processedDataUrl) continue;
    // Extract base64
    const base64Data = item.processedDataUrl.replace(/^data:image\/[a-zA-Z0-9.+_-]+;base64,/, '');
    zip.file(item.filename, base64Data, { base64: true });
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const downloadUrl = URL.createObjectURL(content);

  const anchor = document.createElement('a');
  anchor.href = downloadUrl;
  anchor.download = zipFilename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(downloadUrl);
}
