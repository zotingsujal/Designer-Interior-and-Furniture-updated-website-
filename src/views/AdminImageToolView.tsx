import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Upload,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Download,
  ArrowLeft,
  Image as ImageIcon,
  Check,
  X,
  Play,
  Layers,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  Info,
} from 'lucide-react';
import { furnitureProducts, FurnitureProduct } from '../data/furniture';
import {
  ImageItem,
  matchFilenameToProduct,
  extendImageTo5x4Canvas,
  downloadAllAsZip,
} from '../utils/imageToolUtils';

export const AdminImageToolView: React.FC = () => {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);
  const [totalBatches, setTotalBatches] = useState(0);
  const [processedCount, setProcessedCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'ready' | 'approved' | 'unmatched' | 'failed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSavingAll, setIsSavingAll] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Auto-dismiss notification
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 5000);
    return () => clearTimeout(timer);
  }, [notification]);

  // Handle file uploads (up to 45 images)
  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    const remainingSlots = 45 - items.length;

    if (remainingSlots <= 0) {
      setNotification({
        type: 'error',
        message: 'Maximum limit of 45 images reached. Please clear some items to upload more.',
      });
      return;
    }

    const filesToAdd = fileList.slice(0, remainingSlots);
    if (fileList.length > remainingSlots) {
      setNotification({
        type: 'info',
        message: `Only the first ${remainingSlots} files were added to stay within the 45-image batch limit.`,
      });
    }

    filesToAdd.forEach((file) => {
      const id = `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        const img = new Image();
        img.onload = () => {
          const w = img.naturalWidth || img.width;
          const h = img.naturalHeight || img.height;
          const ratio = (w / h).toFixed(2);
          const ratioLabel = Math.abs(w / h - 16 / 9) < 0.15 ? '16:9' : `${w}x${h} (${ratio}:1)`;

          // Strict matching rule: product name + number
          const matchResult = matchFilenameToProduct(file.name, furnitureProducts);

          const newItem: ImageItem = {
            id,
            file,
            filename: file.name,
            originalDataUrl: dataUrl,
            originalWidth: w,
            originalHeight: h,
            originalAspectRatio: ratioLabel,
            matched: matchResult.matched,
            productSlug: matchResult.productSlug,
            productName: matchResult.productName,
            slotIndex: matchResult.slotIndex,
            matchReason: matchResult.reason,
            status: 'idle',
            retryCount: 0,
            isApproved: false,
          };

          setItems((prev) => {
            // Avoid duplicate filenames
            const exists = prev.some((p) => p.filename === file.name);
            if (exists) return prev;
            return [...prev, newItem];
          });
        };
        img.src = dataUrl;
      };

      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Manual matching override for unmatched files
  const handleManualMatch = (itemId: string, productSlug: string, slotIndex: number) => {
    const prod = furnitureProducts.find((p) => p.slug === productSlug);
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        return {
          ...item,
          matched: Boolean(prod),
          productSlug: prod?.slug,
          productName: prod?.name,
          slotIndex,
          matchReason: undefined,
        };
      })
    );
  };

  // Remove single item
  const handleRemoveItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Clear all uploaded items
  const handleClearAll = () => {
    if (items.length === 0) return;
    if (window.confirm('Are you sure you want to clear all uploaded images?')) {
      setItems([]);
    }
  };

  // Process a single image using Gemini image editing (with retry and canvas fallback)
  const processSingleImage = async (
    item: ImageItem,
    attempt = 1
  ): Promise<{ dataUrl: string; method: 'gemini' | 'canvas-outpaint' }> => {
    const exactPrompt =
      'Extend this image to a 5:4 aspect ratio (1600x1280 px) by adding more wall at the top and more floor at the bottom. Do not crop, resize or change the furniture, its colours, position or details. Keep the same lighting, shadows, wall texture and floor so the extension looks seamless and natural.';

    try {
      // 1. Send request to backend Gemini extension endpoint
      const response = await fetch('/api/admin/extend-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: item.originalDataUrl,
          mimeType: item.file.type || 'image/jpeg',
          filename: item.filename,
          customPrompt: exactPrompt,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success && resData.imageBase64) {
        return {
          dataUrl: `data:${resData.mimeType || 'image/jpeg'};base64,${resData.imageBase64}`,
          method: 'gemini',
        };
      }

      // If backend reports quota exceeded or non-200, try canvas high-resolution outpainting
      console.warn(`[ImageTool] Gemini API returned error on attempt ${attempt}:`, resData.error);
      const canvasResult = await extendImageTo5x4Canvas(item.originalDataUrl);
      return {
        dataUrl: canvasResult,
        method: 'canvas-outpaint',
      };
    } catch (err: any) {
      console.warn(`[ImageTool] Network error on attempt ${attempt}:`, err.message);
      if (attempt < 2) {
        // Automatic retry
        await new Promise((r) => setTimeout(r, 1000));
        return processSingleImage(item, attempt + 1);
      }
      // Fallback to high-res canvas outpainting so batch continues reliably
      const canvasResult = await extendImageTo5x4Canvas(item.originalDataUrl);
      return {
        dataUrl: canvasResult,
        method: 'canvas-outpaint',
      };
    }
  };

  // Process images in Batches of 5 with progress bar
  const handleStartBatchProcessing = async () => {
    if (isProcessing) return;

    // Filter items that have a product assigned and are not yet approved
    const pendingItems = items.filter((it) => it.productSlug && it.status !== 'approved');
    if (pendingItems.length === 0) {
      setNotification({
        type: 'info',
        message: 'No pending matched images to process. Please ensure products are matched.',
      });
      return;
    }

    setIsProcessing(true);
    const BATCH_SIZE = 5;
    const batches: ImageItem[][] = [];
    for (let i = 0; i < pendingItems.length; i += BATCH_SIZE) {
      batches.push(pendingItems.slice(i, i + BATCH_SIZE));
    }

    setTotalBatches(batches.length);
    setCurrentBatchIndex(1);
    setProcessedCount(0);

    let completed = 0;

    for (let bIndex = 0; bIndex < batches.length; bIndex++) {
      setCurrentBatchIndex(bIndex + 1);
      const currentBatch = batches[bIndex];

      // Mark items in current batch as processing
      setItems((prev) =>
        prev.map((item) => {
          if (currentBatch.some((b) => b.id === item.id)) {
            return { ...item, status: 'processing', errorMessage: undefined };
          }
          return item;
        })
      );

      // Process batch concurrently (up to 5 images simultaneously)
      await Promise.all(
        currentBatch.map(async (batchItem) => {
          try {
            const result = await processSingleImage(batchItem);
            setItems((prev) =>
              prev.map((it) => {
                if (it.id !== batchItem.id) return it;
                return {
                  ...it,
                  status: 'ready',
                  processedDataUrl: result.dataUrl,
                  method: result.method,
                  errorMessage: undefined,
                };
              })
            );
          } catch (err: any) {
            setItems((prev) =>
              prev.map((it) => {
                if (it.id !== batchItem.id) return it;
                return {
                  ...it,
                  status: 'failed',
                  errorMessage: err.message || 'Processing failed',
                };
              })
            );
          } finally {
            completed++;
            setProcessedCount(completed);
          }
        })
      );

      // Brief breathing room between batches of 5
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    setIsProcessing(false);
    setNotification({
      type: 'success',
      message: `Batch conversion complete: processed ${completed} images. Ready for side-by-side review below.`,
    });
  };

  // Regenerate a single image
  const handleRegenerateSingle = async (itemId: string) => {
    const item = items.find((it) => it.id === itemId);
    if (!item) return;

    setItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, status: 'processing', errorMessage: undefined } : it))
    );

    try {
      const result = await processSingleImage(item);
      setItems((prev) =>
        prev.map((it) => {
          if (it.id !== itemId) return it;
          return {
            ...it,
            status: 'ready',
            processedDataUrl: result.dataUrl,
            method: result.method,
            isApproved: false,
          };
        })
      );
      setNotification({
        type: 'success',
        message: `Regenerated 5:4 version for ${item.filename}`,
      });
    } catch (err: any) {
      setItems((prev) =>
        prev.map((it) => (it.id === itemId ? { ...it, status: 'failed', errorMessage: err.message } : it))
      );
    }
  };

  // Approve a single image and replace in the same product gallery slot
  const handleApproveSingle = async (itemId: string) => {
    const item = items.find((it) => it.id === itemId);
    if (!item || !item.processedDataUrl || !item.productSlug) return;

    try {
      const res = await fetch('/api/admin/save-approved-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productSlug: item.productSlug,
          slotIndex: item.slotIndex,
          imageBase64: item.processedDataUrl,
          filename: item.filename,
        }),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to save image');
      }

      setItems((prev) =>
        prev.map((it) => {
          if (it.id !== itemId) return it;
          return {
            ...it,
            status: 'approved',
            isApproved: true,
            savedPath: resData.savedPath,
          };
        })
      );

      setNotification({
        type: 'success',
        message: `Approved and saved ${item.filename} to ${item.productName} (Gallery Slot ${item.slotIndex + 1})`,
      });
    } catch (err: any) {
      setNotification({
        type: 'error',
        message: `Approval failed for ${item.filename}: ${err.message}`,
      });
    }
  };

  // Approve all processed images at once
  const handleApproveAll = async () => {
    const readyItems = items.filter((it) => it.status === 'ready' && it.processedDataUrl && it.productSlug);
    if (readyItems.length === 0) {
      setNotification({
        type: 'info',
        message: 'No pending 5:4 images ready for approval.',
      });
      return;
    }

    setIsSavingAll(true);
    try {
      const payload = readyItems.map((it) => ({
        productSlug: it.productSlug!,
        slotIndex: it.slotIndex,
        imageBase64: it.processedDataUrl!,
        filename: it.filename,
      }));

      const res = await fetch('/api/admin/batch-save-approved', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: payload }),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Batch approval failed');
      }

      setItems((prev) =>
        prev.map((it) => {
          if (readyItems.some((r) => r.id === it.id)) {
            return { ...it, status: 'approved', isApproved: true };
          }
          return it;
        })
      );

      setNotification({
        type: 'success',
        message: `Successfully approved and saved all ${readyItems.length} images into their product galleries!`,
      });
    } catch (err: any) {
      setNotification({
        type: 'error',
        message: `Batch approve failed: ${err.message}`,
      });
    } finally {
      setIsSavingAll(false);
    }
  };

  // Download all 5:4 images as ZIP with exact original filenames
  const handleDownloadAllZip = async () => {
    const readyOrApproved = items.filter((it) => Boolean(it.processedDataUrl));
    if (readyOrApproved.length === 0) {
      setNotification({
        type: 'info',
        message: 'No converted 5:4 images available to download yet.',
      });
      return;
    }

    setIsZipping(true);
    try {
      await downloadAllAsZip(readyOrApproved);
      setNotification({
        type: 'success',
        message: `ZIP bundle created with ${readyOrApproved.length} images! Download started.`,
      });
    } catch (err: any) {
      setNotification({
        type: 'error',
        message: `Failed to generate ZIP: ${err.message}`,
      });
    } finally {
      setIsZipping(false);
    }
  };

  // Filtered review list
  const filteredItems = useMemo(() => {
    return items.filter((it) => {
      // Filter tab
      if (activeFilter === 'ready' && it.status !== 'ready') return false;
      if (activeFilter === 'approved' && it.status !== 'approved') return false;
      if (activeFilter === 'unmatched' && it.matched) return false;
      if (activeFilter === 'failed' && it.status !== 'failed') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesFilename = it.filename.toLowerCase().includes(q);
        const matchesProduct = (it.productName || '').toLowerCase().includes(q);
        return matchesFilename || matchesProduct;
      }
      return true;
    });
  }, [items, activeFilter, searchQuery]);

  const matchedCount = items.filter((it) => it.matched).length;
  const unmatchedCount = items.filter((it) => !it.matched).length;
  const readyCount = items.filter((it) => it.status === 'ready').length;
  const approvedCount = items.filter((it) => it.status === 'approved').length;
  const failedCount = items.filter((it) => it.status === 'failed').length;

  const progressPercent = totalBatches > 0 ? Math.round((processedCount / items.filter((it) => it.productSlug).length) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#121110] text-[#FAF9F5] font-sans antialiased pb-24">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-50 bg-[#1A1917]/95 backdrop-blur-md border-b border-[#2B2925] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              window.location.hash = "";
              window.history.pushState(null, "", "/");
              window.location.href = "/";
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-[#C5A880] border border-[#3E3A33] transition-colors cursor-pointer"
            title="Return to Public Storefront"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Storefront</span>
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-semibold tracking-wide text-[#FAF9F5]">
                5:4 Batch Image Conversion Studio
              </h1>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#C5A880]/20 text-[#D8B98F] border border-[#C5A880]/40 rounded-xs">
                Admin Tool
              </span>
            </div>
            <p className="text-[11px] text-[#A19A8F]">
              Direct aspect-ratio extension to 5:4 (1600x1280 px) &bull; Preserves 16:9 for listings &bull; {furnitureProducts.length} Catalogue Products
            </p>
          </div>
        </div>

        {/* Quick Actions Header */}
        <div className="flex items-center gap-2">
          {items.some((it) => it.processedDataUrl) && (
            <button
              type="button"
              onClick={handleDownloadAllZip}
              disabled={isZipping}
              className="px-3 py-1.5 rounded-xs bg-[#C5A880] hover:bg-[#D4B78F] text-[#18181B] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZipping ? 'Zipping...' : 'Download ZIP'}</span>
            </button>
          )}

          {items.length > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              disabled={isProcessing}
              className="px-2.5 py-1.5 rounded-xs bg-white/5 hover:bg-white/10 text-[#A19A8F] hover:text-[#FAF9F5] text-xs transition-colors border border-transparent hover:border-[#3E3A33]"
            >
              Clear All ({items.length})
            </button>
          )}
        </div>
      </header>

      {/* Floating Notification */}
      {notification && (
        <div
          className={`fixed top-16 right-4 z-50 max-w-md p-3.5 rounded-xs shadow-2xl border text-xs font-medium flex items-start gap-2.5 animate-in slide-in-from-top-2 duration-200 ${
            notification.type === 'success'
              ? 'bg-[#15341E] border-[#2D6A3E] text-[#B7E4C7]'
              : notification.type === 'error'
              ? 'bg-[#3E1A1A] border-[#7F2626] text-[#FCA5A5]'
              : 'bg-[#1F2937] border-[#374151] text-[#93C5FD]'
          }`}
        >
          {notification.type === 'success' && <CheckCircle className="w-4 h-4 shrink-0 text-[#52B788] mt-0.5" />}
          {notification.type === 'error' && <AlertTriangle className="w-4 h-4 shrink-0 text-[#EF4444] mt-0.5" />}
          {notification.type === 'info' && <Info className="w-4 h-4 shrink-0 text-[#60A5FA] mt-0.5" />}
          <div className="flex-1 leading-relaxed">{notification.message}</div>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="text-white/60 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Step 1: Upload & Matching Section */}
        <section className="bg-[#181715] border border-[#2B2925] rounded-xs p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                Step 1 &bull; Upload &amp; Match
              </span>
              <h2 className="text-lg sm:text-xl font-medium text-[#FAF9F5]">
                Upload Images (Up to 45 At Once)
              </h2>
              <p className="text-xs text-[#8E877C] mt-1">
                Files are matched automatically by name: <code className="text-[#D8B98F] bg-black/40 px-1 py-0.5 rounded">product-name_1.jpg</code> = that product, gallery slot 1.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#A19A8F]">
                Uploaded: <strong className="text-[#FAF9F5]">{items.length} / 45</strong>
              </span>
            </div>
          </div>

          {/* Upload Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFileUpload(e.dataTransfer.files);
            }}
            className="border-2 border-dashed border-[#3A362F] hover:border-[#C5A880] bg-[#141312] hover:bg-[#1A1917] transition-all p-8 sm:p-10 rounded-xs text-center cursor-pointer group select-none"
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
            />
            <div className="w-12 h-12 rounded-full bg-[#24221E] border border-[#3E3A33] group-hover:border-[#C5A880] flex items-center justify-center mx-auto mb-3 transition-colors">
              <Upload className="w-5 h-5 text-[#C5A880] group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm font-medium text-[#FAF9F5] mb-1">
              Click to browse or drop up to 45 images here
            </div>
            <div className="text-xs text-[#8E877C]">
              Supports JPG, PNG, WEBP &bull; Max 45 images per batch
            </div>
          </div>

          {/* Summary Badges */}
          {items.length > 0 && (
            <div className="mt-5 pt-4 border-t border-[#262421] flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#1F1E1B] border border-[#33302B] text-[#D4C3B3]">
                Total: <strong className="text-[#FAF9F5]">{items.length}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#132A1C] border border-[#1E4D2B] text-[#74C69D]">
                Auto-Matched: <strong className="text-white">{matchedCount}</strong>
              </span>
              {unmatchedCount > 0 && (
                <span className="px-3 py-1 rounded-full bg-[#3B2211] border border-[#6B3E1F] text-[#F4A261] font-semibold">
                  Unmatched: <strong>{unmatchedCount}</strong> (Manual assignment required)
                </span>
              )}
              {readyCount > 0 && (
                <span className="px-3 py-1 rounded-full bg-[#142C44] border border-[#235380] text-[#90E0EF]">
                  5:4 Extended: <strong className="text-white">{readyCount}</strong>
                </span>
              )}
              {approvedCount > 0 && (
                <span className="px-3 py-1 rounded-full bg-[#1B3A24] border border-[#2E6B3F] text-[#52B788]">
                  Approved &amp; Saved: <strong className="text-white">{approvedCount}</strong>
                </span>
              )}
            </div>
          )}
        </section>

        {/* Step 2: Unmatched Resolution & Matching Overview (if unmatched exist) */}
        {unmatchedCount > 0 && (
          <section className="bg-[#1C1814] border border-[#4A321F] rounded-xs p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-[#F4A261]">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                {unmatchedCount} Unmatched Files Need Product &amp; Slot Assignment
              </h3>
            </div>
            <p className="text-xs text-[#B5A89B] mb-4">
              Per instructions, if a file name does not match exactly one product and slot, we do not guess. Please select the target product and gallery slot below:
            </p>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {items
                .filter((it) => !it.matched)
                .map((it) => (
                  <div
                    key={it.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-[#141210] border border-[#332A21] rounded-xs text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={it.originalDataUrl}
                        alt={it.filename}
                        className="w-12 h-9 object-cover rounded-xs border border-[#3A3329]"
                      />
                      <div>
                        <div className="font-mono text-xs text-[#FAF9F5] font-semibold">{it.filename}</div>
                        <div className="text-[11px] text-[#A68A68]">{it.matchReason || 'No exact single match'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <label className="text-[11px] text-[#8E877C]">Target Product:</label>
                      <select
                        value={it.productSlug || ''}
                        onChange={(e) => handleManualMatch(it.id, e.target.value, it.slotIndex)}
                        className="bg-[#24211D] border border-[#453D34] text-[#FAF9F5] rounded-xs px-2.5 py-1 text-xs focus:border-[#C5A880] outline-none max-w-xs"
                      >
                        <option value="">-- Choose Product --</option>
                        {furnitureProducts.map((p) => (
                          <option key={p.id} value={p.slug}>
                            {p.name} ({p.subcategorySlug})
                          </option>
                        ))}
                      </select>

                      <label className="text-[11px] text-[#8E877C]">Slot:</label>
                      <select
                        value={it.slotIndex}
                        onChange={(e) =>
                          handleManualMatch(it.id, it.productSlug || '', parseInt(e.target.value, 10))
                        }
                        className="bg-[#24211D] border border-[#453D34] text-[#FAF9F5] rounded-xs px-2 py-1 text-xs focus:border-[#C5A880] outline-none"
                      >
                        {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                          <option key={idx} value={idx}>
                            Slot {idx + 1} {idx === 0 ? '(Primary Gallery)' : ''}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(it.id)}
                        className="p-1 text-[#8E877C] hover:text-[#EF4444] transition-colors"
                        title="Remove file"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Step 3: Batch Processing Engine (Batches of 5) */}
        {items.length > 0 && (
          <section className="bg-[#181715] border border-[#2B2925] rounded-xs p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                  Step 2 &bull; Batch Processing
                </span>
                <h2 className="text-lg sm:text-xl font-medium text-[#FAF9F5]">
                  5:4 Aspect Ratio Extension (Batches of 5)
                </h2>
                <p className="text-xs text-[#8E877C] mt-1">
                  Extends to 1600x1280 px (5:4) by adding wall at top and floor at bottom without modifying furniture.
                </p>
              </div>

              <button
                type="button"
                onClick={handleStartBatchProcessing}
                disabled={isProcessing || items.filter((it) => it.productSlug && it.status !== 'approved').length === 0}
                className="px-5 py-2.5 rounded-xs bg-[#C5A880] hover:bg-[#D4B78F] text-[#18181B] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Batch {currentBatchIndex} of {totalBatches}...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Process Batches of 5</span>
                  </>
                )}
              </button>
            </div>

            {/* Instruction Prompter */}
            <div className="p-3 bg-[#141312] border border-[#262421] rounded-xs text-xs text-[#A19A8F] mb-4">
              <span className="text-[#C5A880] font-semibold block mb-1 uppercase tracking-wider text-[10px]">
                Active Gemini Prompt Instruction:
              </span>
              <p className="font-mono text-[11px] text-[#D8D2C8] leading-relaxed">
                &ldquo;Extend this image to a 5:4 aspect ratio (1600x1280 px) by adding more wall at the top and more floor at the bottom. Do not crop, resize or change the furniture, its colours, position or details. Keep the same lighting, shadows, wall texture and floor so the extension looks seamless and natural.&rdquo;
              </p>
            </div>

            {/* Progress Bar */}
            {isProcessing && (
              <div className="space-y-2 mt-4 p-4 bg-[#141312] border border-[#262421] rounded-xs animate-in fade-in">
                <div className="flex items-center justify-between text-xs text-[#A19A8F]">
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-[#C5A880] animate-spin" />
                    <span className="font-medium text-[#FAF9F5]">
                      Processing Batch {currentBatchIndex} of {totalBatches}
                    </span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#D8B98F]">
                    {progressPercent}% ({processedCount} of {items.filter((it) => it.productSlug).length} processed)
                  </span>
                </div>

                <div className="w-full h-2.5 bg-[#262421] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C5A880] to-[#E2C7A0] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </section>
        )}

        {/* Step 4: Side-by-Side Review Grid & Approval */}
        {items.length > 0 && (
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262421] pb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                  Step 3 &bull; Review &amp; Approval
                </span>
                <h2 className="text-xl font-medium text-[#FAF9F5]">
                  Side-by-Side Review Grid
                </h2>
              </div>

              {/* Action Buttons: Approve All & Download ZIP */}
              <div className="flex items-center gap-2 flex-wrap">
                {readyCount > 0 && (
                  <button
                    type="button"
                    onClick={handleApproveAll}
                    disabled={isSavingAll || isProcessing}
                    className="px-4 py-2 rounded-xs bg-[#2E6B3F] hover:bg-[#387F4C] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSavingAll ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving All...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Approve All ({readyCount})</span>
                      </>
                    )}
                  </button>
                )}

                {items.some((it) => it.processedDataUrl) && (
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping}
                    className="px-4 py-2 rounded-xs bg-[#C5A880] hover:bg-[#D4B78F] text-[#18181B] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download All 5:4 as ZIP</span>
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-[#FAF9F5] text-[#18181B] font-semibold'
                      : 'bg-[#181715] text-[#A19A8F] hover:text-white'
                  }`}
                >
                  All ({items.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('ready')}
                  className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                    activeFilter === 'ready'
                      ? 'bg-[#FAF9F5] text-[#18181B] font-semibold'
                      : 'bg-[#181715] text-[#A19A8F] hover:text-white'
                  }`}
                >
                  Ready for Review ({readyCount})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('approved')}
                  className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                    activeFilter === 'approved'
                      ? 'bg-[#FAF9F5] text-[#18181B] font-semibold'
                      : 'bg-[#181715] text-[#A19A8F] hover:text-white'
                  }`}
                >
                  Approved ({approvedCount})
                </button>
                {unmatchedCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter('unmatched')}
                    className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                      activeFilter === 'unmatched'
                        ? 'bg-[#FAF9F5] text-[#18181B] font-semibold'
                        : 'bg-[#181715] text-[#F4A261] hover:text-white'
                    }`}
                  >
                    Unmatched ({unmatchedCount})
                  </button>
                )}
                {failedCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter('failed')}
                    className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                      activeFilter === 'failed'
                        ? 'bg-[#FAF9F5] text-[#18181B] font-semibold'
                        : 'bg-[#181715] text-[#EF4444] hover:text-white'
                    }`}
                  >
                    Failed ({failedCount})
                  </button>
                )}
              </div>

              {/* Search box */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#8E877C]" />
                <input
                  type="text"
                  placeholder="Filter by filename or product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#181715] border border-[#2B2925] text-xs text-[#FAF9F5] rounded-xs pl-8 pr-3 py-1.5 outline-none focus:border-[#C5A880] w-full sm:w-60"
                />
              </div>
            </div>

            {/* Review Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-[#181715] border rounded-xs overflow-hidden transition-all flex flex-col justify-between ${
                    item.isApproved
                      ? 'border-[#2E6B3F] shadow-sm'
                      : item.status === 'ready'
                      ? 'border-[#C5A880] shadow-sm'
                      : 'border-[#2B2925]'
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-3.5 bg-[#141312] border-b border-[#262421] flex items-center justify-between">
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="font-mono text-xs font-semibold text-[#FAF9F5] truncate" title={item.filename}>
                        {item.filename}
                      </div>
                      <div className="text-[11px] text-[#A19A8F] truncate flex items-center gap-1.5 mt-0.5">
                        {item.productName ? (
                          <>
                            <span className="text-[#C5A880] font-medium">{item.productName}</span>
                            <span>&bull;</span>
                            <span className="text-[#D8B98F] font-semibold">Slot {item.slotIndex + 1}</span>
                          </>
                        ) : (
                          <span className="text-[#F4A261] font-semibold">Unmatched</span>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div>
                      {item.isApproved ? (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-xs bg-[#1B3A24] text-[#52B788] border border-[#2E6B3F] flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Approved</span>
                        </span>
                      ) : item.status === 'ready' ? (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-xs bg-[#1F2B38] text-[#90E0EF] border border-[#235380]">
                          Ready for Review
                        </span>
                      ) : item.status === 'processing' ? (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-xs bg-[#2E2818] text-[#F3C68F] border border-[#524424] flex items-center gap-1">
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                          <span>Processing</span>
                        </span>
                      ) : item.status === 'failed' ? (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-xs bg-[#3E1A1A] text-[#FCA5A5] border border-[#7F2626]">
                          Failed
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-xs bg-[#24221E] text-[#8E877C] border border-[#3A362F]">
                          Queued
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Side-by-Side Comparison Stage */}
                  <div className="p-4 grid grid-cols-2 gap-3 bg-[#161513]">
                    {/* Left: Original (16:9) */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-[#8E877C] mb-1.5">
                        <span>Original</span>
                        <span className="px-1.5 py-0.5 rounded-xs bg-black/40 text-[#D8B98F]">
                          {item.originalAspectRatio}
                        </span>
                      </div>
                      <div className="relative aspect-[16/9] bg-[#0E0D0C] border border-[#2B2925] rounded-xs overflow-hidden flex items-center justify-center">
                        <img
                          src={item.originalDataUrl}
                          alt={`Original ${item.filename}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-[10px] text-[#6E675E] text-center mt-1">
                        Listing Frame (16:9)
                      </div>
                    </div>

                    {/* Right: New 5:4 Version */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-[#C5A880] mb-1.5">
                        <span>New 5:4 Version</span>
                        <span className="px-1.5 py-0.5 rounded-xs bg-[#C5A880]/20 text-[#D8B98F] border border-[#C5A880]/40 font-bold">
                          5:4 (1600x1280)
                        </span>
                      </div>
                      <div className="relative aspect-[5/4] bg-[#0E0D0C] border border-[#2B2925] rounded-xs overflow-hidden flex items-center justify-center">
                        {item.processedDataUrl ? (
                          <img
                            src={item.processedDataUrl}
                            alt={`5:4 Extended ${item.filename}`}
                            className="w-full h-full object-cover"
                          />
                        ) : item.status === 'processing' ? (
                          <div className="flex flex-col items-center justify-center p-3 text-center">
                            <RefreshCw className="w-5 h-5 text-[#C5A880] animate-spin mb-1.5" />
                            <span className="text-[10px] text-[#A19A8F]">Synthesizing wall &amp; floor...</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-3 text-center text-[#6E675E]">
                            <ImageIcon className="w-6 h-6 mb-1 opacity-40" />
                            <span className="text-[10px]">Awaiting conversion</span>
                          </div>
                        )}
                      </div>
                      <div className="text-[10px] text-[#8E877C] text-center mt-1">
                        Gallery Frame (5:4 Cover)
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-3 bg-[#141312] border-t border-[#262421] flex items-center justify-between gap-2">
                    <div className="text-[11px] text-[#8E877C]">
                      {item.method && (
                        <span className="text-[10px] font-mono text-[#A19A8F]">
                          Method: {item.method === 'gemini' ? 'Gemini AI Edit' : 'Seamless Extension'}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Regenerate Button */}
                      <button
                        type="button"
                        onClick={() => handleRegenerateSingle(item.id)}
                        disabled={isProcessing || item.status === 'processing'}
                        className="px-2.5 py-1 rounded-xs bg-[#24221E] hover:bg-[#332F2A] text-[#FAF9F5] text-xs font-medium flex items-center gap-1 transition-colors border border-[#3E3A33] cursor-pointer disabled:opacity-50"
                        title="Regenerate 5:4 extension"
                      >
                        <RefreshCw className="w-3 h-3 text-[#C5A880]" />
                        <span>Regenerate</span>
                      </button>

                      {/* Approve Button */}
                      {item.processedDataUrl && (
                        <button
                          type="button"
                          onClick={() => handleApproveSingle(item.id)}
                          disabled={item.isApproved || isProcessing}
                          className={`px-3 py-1 rounded-xs text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                            item.isApproved
                              ? 'bg-[#1B3A24] text-[#52B788] border border-[#2E6B3F] opacity-90 cursor-default'
                              : 'bg-[#2E6B3F] hover:bg-[#387F4C] text-white shadow-xs'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                          <span>{item.isApproved ? 'Approved' : 'Approve'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
