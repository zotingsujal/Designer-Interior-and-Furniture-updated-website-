// Central Configuration for Category Banners & Google Drive Image Links
// Easily maintain and update category images in one place.

export interface CategoryBannerConfig {
  /** Stable category identifier */
  slug: string;
  /** Exact display name */
  name: string;
  /** The exact Google Drive link provided by client */
  googleDriveUrl: string;
  /** Extracted Google Drive File ID */
  driveFileId: string;
  /** Direct high-performance Google CDN preview URL */
  directCdnUrl: string;
  /** Direct thumbnail/export URL */
  thumbnailUrl: string;
  /** Local fail-safe cached copy in /public/images/categories/ */
  localFallbackUrl: string;
}

export const CATEGORY_BANNER_CONFIGS: Record<string, CategoryBannerConfig> = {
  sofas: {
    slug: 'sofas',
    name: 'Sofas',
    googleDriveUrl: 'https://drive.google.com/file/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe/view?usp=drivesdk',
    driveFileId: '1u0EQjACYj_7imNel2FYYGusqWzoSECKe',
    directCdnUrl: 'https://lh3.googleusercontent.com/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1u0EQjACYj_7imNel2FYYGusqWzoSECKe&sz=w1600',
    localFallbackUrl: '/images/categories/sofas.png',
  },
  'chairs-seating': {
    slug: 'chairs-seating',
    name: 'Chairs & Seating',
    googleDriveUrl: 'https://drive.google.com/file/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK/view?usp=drivesdk',
    driveFileId: '1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK',
    directCdnUrl: 'https://lh3.googleusercontent.com/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK&sz=w1600',
    localFallbackUrl: '/images/categories/chairs-seating.png',
  },
  tables: {
    slug: 'tables',
    name: 'Tables',
    googleDriveUrl: 'https://drive.google.com/file/d/1pFoK15EdGxbtCFOZNNL453wPDy5JYuSX/view?usp=drivesdk',
    driveFileId: '1pFoK15EdGxbtCFOZNNL453wPDy5JYuSX',
    directCdnUrl: 'https://lh3.googleusercontent.com/d/1pFoK15EdGxbtCFOZNNL453wPDy5JYuSX',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1pFoK15EdGxbtCFOZNNL453wPDy5JYuSX&sz=w1600',
    localFallbackUrl: '/images/categories/tables.png',
  },
  'living-room-storage': {
    slug: 'living-room-storage',
    name: 'Living Room & Storage',
    googleDriveUrl: 'https://drive.google.com/file/d/1vW1GM7Hj2GTihGzrF45E4PUsBv8N7j9T/view?usp=drivesdk',
    driveFileId: '1vW1GM7Hj2GTihGzrF45E4PUsBv8N7j9T',
    directCdnUrl: 'https://lh3.googleusercontent.com/d/1vW1GM7Hj2GTihGzrF45E4PUsBv8N7j9T',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1vW1GM7Hj2GTihGzrF45E4PUsBv8N7j9T&sz=w1600',
    localFallbackUrl: '/images/categories/living-room-storage.png',
  },
  'bedroom-sets': {
    slug: 'bedroom-sets',
    name: 'Bedroom Sets',
    googleDriveUrl: 'https://drive.google.com/file/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp/view?usp=drivesdk',
    driveFileId: '1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp',
    directCdnUrl: 'https://lh3.googleusercontent.com/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp&sz=w1600',
    localFallbackUrl: '/images/categories/bedroom-sets.png',
  },
  kitchens: {
    slug: 'kitchens',
    name: 'Kitchens',
    googleDriveUrl: 'https://drive.google.com/file/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE/view?usp=drivesdk',
    driveFileId: '1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE',
    directCdnUrl: 'https://lh3.googleusercontent.com/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE&sz=w1600',
    localFallbackUrl: '/images/categories/kitchens.png',
  },
};

/**
 * Returns the primary banner image URL for a category.
 * Defaults to the direct CDN url, falling back to local cached copy.
 */
export function getCategoryBannerImage(categorySlug: string): string {
  const config = CATEGORY_BANNER_CONFIGS[categorySlug];
  if (!config) return '';
  return config.directCdnUrl || config.localFallbackUrl;
}

/**
 * Returns the secondary fallback image URL if the primary CDN fails to load.
 */
export function getCategoryBannerFallback(categorySlug: string): string {
  const config = CATEGORY_BANNER_CONFIGS[categorySlug];
  if (!config) return '';
  return config.localFallbackUrl || config.thumbnailUrl;
}
