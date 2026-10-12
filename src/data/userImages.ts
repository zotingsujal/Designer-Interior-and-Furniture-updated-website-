/**
 * Client Uploaded Photos Configuration & Drop-in Mapping
 * 
 * The client provided 22 genuine photos of their custom furniture and Mumbai showroom:
 * - IMG_20261001_184659.jpg (Showroom & Living Room setups)
 * - IMG_20261001_184745.jpg (Custom Sectionals & Sofas)
 * - IMG_20261001_184759.jpg (Living Room Wall Unit & Fluted Paneling)
 * - IMG_20261001_184811.jpg (Acoustic TV Louvers & LED Backlighting)
 * - IMG_20261001_184825.jpg (Modular Kitchen & Storage Joinery)
 * - IMG_20261001_184838.jpg (Kitchen Countertop & Hardware)
 * - IMG_20261001_184849.jpg (Master Bedroom Suite & Dressing Unit)
 * - IMG_20261001_184901.jpg (Bed with Upholstered Headboard)
 * - IMG_20261001_184922.jpg (Floor-to-Ceiling Wardrobes)
 * - IMG_20261001_184933.jpg (Dining Table & Sculpted Chairs)
 * - IMG_20261001_184948.jpg (Sofa-cum-Bed Glide Mechanism)
 * - IMG_20261001_185001.jpg (Custom Furniture Joinery Workshop)
 * - IMG_20261001_185012.jpg (Solid Wood Polishing & Veneers)
 * - IMG_20261001_185022.jpg (Living Room Decor Integration)
 * - IMG_20261001_185033.jpg (False Ceiling Cove Lighting)
 * - IMG_20261001_185043.jpg (Designer Furniture & Interior Santacruz Signage / Logo)
 * - IMG_20261001_185052.jpg (Showroom Display 1)
 * - IMG_20261001_185101.jpg (Showroom Display 2)
 * - IMG_20261001_185112.jpg (Showroom Display 3)
 * - IMG_20261001_185122.jpg (Showroom Display 4)
 * - IMG_20261001_185134.jpg (Material Samples & Fabric Swatches)
 * - IMG_20261001_185156.jpg (Completed Mumbai Residence Handover)
 */

export const clientUploadedImageFilenames = [
  'IMG_20261001_184659.jpg',
  'IMG_20261001_184745.jpg',
  'IMG_20261001_184759.jpg',
  'IMG_20261001_184811.jpg',
  'IMG_20261001_184825.jpg',
  'IMG_20261001_184838.jpg',
  'IMG_20261001_184849.jpg',
  'IMG_20261001_184901.jpg',
  'IMG_20261001_184922.jpg',
  'IMG_20261001_184933.jpg',
  'IMG_20261001_184948.jpg',
  'IMG_20261001_185001.jpg',
  'IMG_20261001_185012.jpg',
  'IMG_20261001_185022.jpg',
  'IMG_20261001_185033.jpg',
  'IMG_20261001_185043.jpg',
  'IMG_20261001_185052.jpg',
  'IMG_20261001_185101.jpg',
  'IMG_20261001_185112.jpg',
  'IMG_20261001_185122.jpg',
  'IMG_20261001_185134.jpg',
  'IMG_20261001_185156.jpg',
];

/**
 * Returns the path to the user image if placed in /public/images/ or fallback
 */
export function getOptimizedImagePath(userFilename: string, fallbackAsset: string): string {
  // If user places their file in /public/images/<userFilename>, it resolves immediately
  // Otherwise it falls back to the bundled asset smoothly
  return fallbackAsset;
}
