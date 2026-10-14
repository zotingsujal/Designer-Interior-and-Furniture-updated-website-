// Authoritative Subcategory Banner Asset Configuration
// Central registry mapping Google Drive banner assets to local high-performance assets with direct drive fallbacks
// Easily update or replace subcategory banner links from this single file

export interface SubcategoryBannerConfig {
  subcategorySlug: string;
  subcategoryName: string;
  categorySlug: string;
  categoryName: string;
  driveFileId: string;
  driveShareUrl: string;
  directDriveUrl: string;
  localAssetUrl: string;
  bannerUrl: string;
}

export const SUBCATEGORY_BANNERS: Record<string, SubcategoryBannerConfig> = {
  // A. SOFAS
  'sofa-sets': {
    subcategorySlug: 'sofa-sets',
    subcategoryName: 'Sofa Sets',
    categorySlug: 'sofas',
    categoryName: 'Sofas',
    driveFileId: '1Ly5b_WCCHzOcRRXsxCIJsvZUDwhbwCna',
    driveShareUrl: 'https://drive.google.com/file/d/1Ly5b_WCCHzOcRRXsxCIJsvZUDwhbwCna/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1Ly5b_WCCHzOcRRXsxCIJsvZUDwhbwCna',
    localAssetUrl: '/images/subcategories/sofas_sofa-sets.png',
    bannerUrl: '/images/subcategories/sofas_sofa-sets.png',
  },
  'l-shape-sofas': {
    subcategorySlug: 'l-shape-sofas',
    subcategoryName: 'L-Shape Sofas',
    categorySlug: 'sofas',
    categoryName: 'Sofas',
    driveFileId: '1wOqD7hyN1eK-mjmqRXPTqM0lqFYy_KHn',
    driveShareUrl: 'https://drive.google.com/file/d/1wOqD7hyN1eK-mjmqRXPTqM0lqFYy_KHn/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1wOqD7hyN1eK-mjmqRXPTqM0lqFYy_KHn',
    localAssetUrl: '/images/subcategories/sofas_l-shape-sofas.png',
    bannerUrl: '/images/subcategories/sofas_l-shape-sofas.png',
  },
  'sofa-cum-beds': {
    subcategorySlug: 'sofa-cum-beds',
    subcategoryName: 'Sofa Cum Beds',
    categorySlug: 'sofas',
    categoryName: 'Sofas',
    driveFileId: '17RZRKP6SSanpVLAuVWgF_8CMvLuOj0h_',
    driveShareUrl: 'https://drive.google.com/file/d/17RZRKP6SSanpVLAuVWgF_8CMvLuOj0h_/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/17RZRKP6SSanpVLAuVWgF_8CMvLuOj0h_',
    localAssetUrl: '/images/subcategories/sofas_sofa-cum-beds.png',
    bannerUrl: '/images/subcategories/sofas_sofa-cum-beds.png',
  },

  // B. CHAIRS & SEATING
  'dining-chairs': {
    subcategorySlug: 'dining-chairs',
    subcategoryName: 'Dining Chairs',
    categorySlug: 'chairs-seating',
    categoryName: 'Chairs & Seating',
    driveFileId: '1LH0EJO56N9kRpvm8YSqCrL1YqLPD9E0_',
    driveShareUrl: 'https://drive.google.com/file/d/1LH0EJO56N9kRpvm8YSqCrL1YqLPD9E0_/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1LH0EJO56N9kRpvm8YSqCrL1YqLPD9E0_',
    localAssetUrl: '/images/subcategories/chairs_dining-chairs.png',
    bannerUrl: '/images/subcategories/chairs_dining-chairs.png',
  },
  'coffee-chairs': {
    subcategorySlug: 'coffee-chairs',
    subcategoryName: 'Coffee Chairs',
    categorySlug: 'chairs-seating',
    categoryName: 'Chairs & Seating',
    driveFileId: '18SKMBuTRFj-FG0XTvBWoD-3zswEfeC1M',
    driveShareUrl: 'https://drive.google.com/file/d/18SKMBuTRFj-FG0XTvBWoD-3zswEfeC1M/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/18SKMBuTRFj-FG0XTvBWoD-3zswEfeC1M',
    localAssetUrl: '/images/subcategories/chairs_coffee-chairs.png',
    bannerUrl: '/images/subcategories/chairs_coffee-chairs.png',
  },
  'rocking-chairs': {
    subcategorySlug: 'rocking-chairs',
    subcategoryName: 'Rocking Chairs',
    categorySlug: 'chairs-seating',
    categoryName: 'Chairs & Seating',
    driveFileId: '1ZFxV_qJFJr7C0JJ18VUnpfKM4hlfqK8U',
    driveShareUrl: 'https://drive.google.com/file/d/1ZFxV_qJFJr7C0JJ18VUnpfKM4hlfqK8U/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1ZFxV_qJFJr7C0JJ18VUnpfKM4hlfqK8U',
    localAssetUrl: '/images/subcategories/chairs_rocking-chairs.png',
    bannerUrl: '/images/subcategories/chairs_rocking-chairs.png',
  },
  'puffies': {
    subcategorySlug: 'puffies',
    subcategoryName: 'Puffies',
    categorySlug: 'chairs-seating',
    categoryName: 'Chairs & Seating',
    driveFileId: '11EPSkuLc6BLTw4yPQJNikqCrw0h1K_Ac',
    driveShareUrl: 'https://drive.google.com/file/d/11EPSkuLc6BLTw4yPQJNikqCrw0h1K_Ac/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/11EPSkuLc6BLTw4yPQJNikqCrw0h1K_Ac',
    localAssetUrl: '/images/subcategories/chairs_puffies.png',
    bannerUrl: '/images/subcategories/chairs_puffies.png',
  },

  // C. TABLES (Console Tables completely removed)
  'dining-tables': {
    subcategorySlug: 'dining-tables',
    subcategoryName: 'Dining Tables',
    categorySlug: 'tables',
    categoryName: 'Tables',
    driveFileId: '1kFS8eVOEtR5xY6Bms9tFo9xomsuNCAPb',
    driveShareUrl: 'https://drive.google.com/file/d/1kFS8eVOEtR5xY6Bms9tFo9xomsuNCAPb/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1kFS8eVOEtR5xY6Bms9tFo9xomsuNCAPb',
    localAssetUrl: '/images/subcategories/tables_dining-tables.png',
    bannerUrl: '/images/subcategories/tables_dining-tables.png',
  },
  'centre-tables': {
    subcategorySlug: 'centre-tables',
    subcategoryName: 'Centre Tables',
    categorySlug: 'tables',
    categoryName: 'Tables',
    driveFileId: '1u2jnHhvZQvx-d43F2WLZ1IgHRy6r3-_x',
    driveShareUrl: 'https://drive.google.com/file/d/1u2jnHhvZQvx-d43F2WLZ1IgHRy6r3-_x/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1u2jnHhvZQvx-d43F2WLZ1IgHRy6r3-_x',
    localAssetUrl: '/images/subcategories/tables_centre-tables.png',
    bannerUrl: '/images/subcategories/tables_centre-tables.png',
  },
  'coffee-tables': {
    subcategorySlug: 'coffee-tables',
    subcategoryName: 'Coffee Tables',
    categorySlug: 'tables',
    categoryName: 'Tables',
    driveFileId: '1s1sDv2Lo4VpOa3GEOkmj8iFyBnKoiR2u',
    driveShareUrl: 'https://drive.google.com/file/d/1s1sDv2Lo4VpOa3GEOkmj8iFyBnKoiR2u/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1s1sDv2Lo4VpOa3GEOkmj8iFyBnKoiR2u',
    localAssetUrl: '/images/subcategories/tables_coffee-tables.png',
    bannerUrl: '/images/subcategories/tables_coffee-tables.png',
  },

  // D. LIVING & STORAGE
  'tv-base-unit': {
    subcategorySlug: 'tv-base-unit',
    subcategoryName: 'TV Base Unit',
    categorySlug: 'living-room-storage',
    categoryName: 'Living Room & Storage',
    driveFileId: '1vSHtAv71tj_ecTtsZzRJcnSlXLJGgTfG',
    driveShareUrl: 'https://drive.google.com/file/d/1vSHtAv71tj_ecTtsZzRJcnSlXLJGgTfG/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1vSHtAv71tj_ecTtsZzRJcnSlXLJGgTfG',
    localAssetUrl: '/images/subcategories/storage_tv-base-unit.png',
    bannerUrl: '/images/subcategories/storage_tv-base-unit.png',
  },
  'wall-unit': {
    subcategorySlug: 'wall-unit',
    subcategoryName: 'Wall Unit',
    categorySlug: 'living-room-storage',
    categoryName: 'Living Room & Storage',
    driveFileId: '1bSLAK0gTpH15Ia4x3YSgeLwLw8R7z2ej',
    driveShareUrl: 'https://drive.google.com/file/d/1bSLAK0gTpH15Ia4x3YSgeLwLw8R7z2ej/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1bSLAK0gTpH15Ia4x3YSgeLwLw8R7z2ej',
    localAssetUrl: '/images/subcategories/storage_wall-unit.png',
    bannerUrl: '/images/subcategories/storage_wall-unit.png',
  },
  'crockery-units': {
    subcategorySlug: 'crockery-units',
    subcategoryName: 'Crockery Units',
    categorySlug: 'living-room-storage',
    categoryName: 'Living Room & Storage',
    driveFileId: '1AeTFSifnl_po2uwnl-IsqmHai1jqfFQP',
    driveShareUrl: 'https://drive.google.com/file/d/1AeTFSifnl_po2uwnl-IsqmHai1jqfFQP/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1AeTFSifnl_po2uwnl-IsqmHai1jqfFQP',
    localAssetUrl: '/images/subcategories/storage_crockery-units.png',
    bannerUrl: '/images/subcategories/storage_crockery-units.png',
  },
  'bar-units': {
    subcategorySlug: 'bar-units',
    subcategoryName: 'Bar Units',
    categorySlug: 'living-room-storage',
    categoryName: 'Living Room & Storage',
    driveFileId: '14mJ1tfheXUliS3YXMMmrQJ8nysAtlYdF',
    driveShareUrl: 'https://drive.google.com/file/d/14mJ1tfheXUliS3YXMMmrQJ8nysAtlYdF/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/14mJ1tfheXUliS3YXMMmrQJ8nysAtlYdF',
    localAssetUrl: '/images/subcategories/storage_bar-units.png',
    bannerUrl: '/images/subcategories/storage_bar-units.png',
  },
  'sideboards-and-accent-cabinets': {
    subcategorySlug: 'sideboards-and-accent-cabinets',
    subcategoryName: 'Sideboards and Accent Cabinets',
    categorySlug: 'living-room-storage',
    categoryName: 'Living Room & Storage',
    driveFileId: '12CEVJlOeo_KCYp7xj4Vx28GEzZvMlWsT',
    driveShareUrl: 'https://drive.google.com/file/d/12CEVJlOeo_KCYp7xj4Vx28GEzZvMlWsT/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/12CEVJlOeo_KCYp7xj4Vx28GEzZvMlWsT',
    localAssetUrl: '/images/subcategories/storage_sideboards-and-accent-cabinets.png',
    bannerUrl: '/images/subcategories/storage_sideboards-and-accent-cabinets.png',
  },

  // E. BEDROOM SETS
  'beds': {
    subcategorySlug: 'beds',
    subcategoryName: 'Beds',
    categorySlug: 'bedroom-sets',
    categoryName: 'Bedroom Sets',
    driveFileId: '1SCqBNdteq1gaZWC4GwmPoJhpYAUYbjN_',
    driveShareUrl: 'https://drive.google.com/file/d/1SCqBNdteq1gaZWC4GwmPoJhpYAUYbjN_/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1SCqBNdteq1gaZWC4GwmPoJhpYAUYbjN_',
    localAssetUrl: '/images/subcategories/bedroom_beds.png',
    bannerUrl: '/images/subcategories/bedroom_beds.png',
  },
  'wardrobes': {
    subcategorySlug: 'wardrobes',
    subcategoryName: 'Wardrobes',
    categorySlug: 'bedroom-sets',
    categoryName: 'Bedroom Sets',
    driveFileId: '1DJXA5KQ305KOFl1NEueqkvbcXZnORi0c',
    driveShareUrl: 'https://drive.google.com/file/d/1DJXA5KQ305KOFl1NEueqkvbcXZnORi0c/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1DJXA5KQ305KOFl1NEueqkvbcXZnORi0c',
    localAssetUrl: '/images/subcategories/bedroom_wardrobes.png',
    bannerUrl: '/images/subcategories/bedroom_wardrobes.png',
  },
  'side-tables': {
    subcategorySlug: 'side-tables',
    subcategoryName: 'Side Tables',
    categorySlug: 'bedroom-sets',
    categoryName: 'Bedroom Sets',
    driveFileId: '1NTLLpwHYbFdd2pfqrUXWwqj2PDPY_H2O',
    driveShareUrl: 'https://drive.google.com/file/d/1NTLLpwHYbFdd2pfqrUXWwqj2PDPY_H2O/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1NTLLpwHYbFdd2pfqrUXWwqj2PDPY_H2O',
    localAssetUrl: '/images/subcategories/bedroom_side-tables.png',
    bannerUrl: '/images/subcategories/bedroom_side-tables.png',
  },
  'dressing-tables': {
    subcategorySlug: 'dressing-tables',
    subcategoryName: 'Dressing Tables',
    categorySlug: 'bedroom-sets',
    categoryName: 'Bedroom Sets',
    driveFileId: '1qXGkZasj9nxsVwWq6YDwarKLUP1cDTZ2',
    driveShareUrl: 'https://drive.google.com/file/d/1qXGkZasj9nxsVwWq6YDwarKLUP1cDTZ2/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1qXGkZasj9nxsVwWq6YDwarKLUP1cDTZ2',
    localAssetUrl: '/images/subcategories/bedroom_dressing-tables.png',
    bannerUrl: '/images/subcategories/bedroom_dressing-tables.png',
  },

  // F. KITCHENS (Modular & Custom Kitchens combined as ONE subcategory)
  'modular-custom-kitchens': {
    subcategorySlug: 'modular-custom-kitchens',
    subcategoryName: 'Modular / Custom Kitchens',
    categorySlug: 'kitchens',
    categoryName: 'Kitchens',
    driveFileId: '1koubzKGoB7n2b3Xi36o-5Kh3_LKGss0s',
    driveShareUrl: 'https://drive.google.com/file/d/1koubzKGoB7n2b3Xi36o-5Kh3_LKGss0s/view?usp=drivesdk',
    directDriveUrl: 'https://lh3.googleusercontent.com/d/1koubzKGoB7n2b3Xi36o-5Kh3_LKGss0s',
    localAssetUrl: '/images/subcategories/kitchens_modular-custom-kitchens.png',
    bannerUrl: '/images/subcategories/kitchens_modular-custom-kitchens.png',
  },
};

/**
 * Returns the banner configuration for a subcategory by its slug.
 */
export const getSubcategoryBanner = (slug: string): SubcategoryBannerConfig | undefined => {
  return SUBCATEGORY_BANNERS[slug];
};

/**
 * Helper to get the display image URL for a subcategory with fallback chain.
 */
export const getSubcategoryImageUrl = (slug: string, fallbackUrl?: string): string => {
  const banner = SUBCATEGORY_BANNERS[slug];
  if (banner) {
    return banner.bannerUrl;
  }
  return fallbackUrl || '';
};
