import fs from 'fs';

// 1. Load active verified images
const activeImages = JSON.parse(fs.readFileSync('scripts/activeImages.json', 'utf8'));
const activeSet = new Set(activeImages.map(a => a.url));

// 2. Curate 100% distinct, strictly semantic, verified image assignments
// Categories (4)
const CATEGORY_HEROES = {
  'sofas': '/images/chesterfield_drive.jpg',
  'dining-tables': '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
  'beds-bedroom': '/images/drive/drive_img_22_1atNjG.jpg',
  'living-storage': '/images/drive/drive_img_10_1GuU0K.jpg'
};

// Subcategories (49)
const SUBCATEGORY_IMAGES = {
  // Sofas (10)
  'l-shaped-sofas': '/images/bespoke/luxury_sofa_bed_1791460634066.jpg',
  'sofa-cum-beds': '/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg',
  '2-seater-sofas': 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
  '3-seater-sofas': '/images/bespoke/dsigner_factory_sofa_1791361355243.jpg',
  'sectional-sofas': '/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg',
  'recliner-sofas': 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
  'modular-sofas': '/images/drive/drive_img_1_1CBInl.jpg',
  'fabric-sofas': 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
  'leather-sofas': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  'custom-sofas': '/images/bespoke/custom_sofa_bespoke_1790862510012.jpg',

  // Dining Tables (10)
  '4-seater-dining-tables': 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
  '6-seater-dining-tables': '/images/drive/drive_img_21_13u-6f.jpg',
  '8-seater-dining-tables': '/images/drive/drive_img_2_1oeDlS.jpg',
  '10-seater-dining-tables': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  'round-dining-tables': 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
  'extendable-dining-tables': 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
  'marble-dining-tables': 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
  'wooden-dining-tables': 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
  'modern-dining-tables': 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
  'custom-dining-tables': '/images/drive/drive_img_23_1vq-kc.jpg',

  // Beds & Bedroom (11)
  'king-size-beds': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'queen-size-beds': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
  'double-beds': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
  'storage-beds': 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
  'hydraulic-storage-beds': 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
  'upholstered-beds': 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
  'platform-beds': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  'wooden-beds': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
  'modern-beds': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  'custom-beds': 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80',
  'bedside-tables': '/images/drive/drive_img_4_1FEihx.jpg',

  // Living & Storage (18)
  'wall-mounted-tv-units': '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
  'floor-standing-tv-units': '/images/drive/drive_img_7_1tUTht.jpg',
  'tv-units-with-storage': '/images/drive/drive_img_6_1U5guR.jpg',
  'minimal-tv-units': '/images/drive/drive_img_9_1XlOjJ.jpg',
  'modern-tv-units': '/images/drive/drive_img_3_1KtJIM.jpg',
  'designer-tv-units': '/images/drive/drive_img_15_1ABIZH.jpg',
  'custom-tv-units': 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',

  'sliding-door-wardrobes': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
  'hinged-door-wardrobes': '/images/drive/drive_img_20_14uLiI.jpg',
  'walk-in-wardrobes': '/images/drive/drive_img_19_1iOMO7.jpg',
  'glass-door-wardrobes': 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
  'modular-wardrobes': '/images/drive/drive_img_18_1YNYsJ.jpg',
  'bedroom-wardrobes': '/images/drive/drive_img_8_17IV2c.jpg',
  'custom-wardrobes': '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',

  'sideboards-consoles': '/images/drive/drive_img_16_1zcRXm.jpg',
  'storage-cabinets': '/images/drive/drive_img_11_1BO_We.jpg',
  'display-units': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  'custom-storage': 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80'
};

// Distinct Verified Product Primary Images (98 total)
// STRICT RULE: None of these 98 images can match any category hero or subcategory image!
// All 98 must be distinct from each other!
const PRODUCT_PRIMARY_IMAGES = {
  // Sofas (20)
  'l-shaped-sofas-01': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
  'l-shaped-sofas-02': 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80',
  'sofa-cum-beds-01': 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  'sofa-cum-beds-02': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  '2-seater-sofas-01': 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
  '2-seater-sofas-02': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  '3-seater-sofas-01': 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80',
  '3-seater-sofas-02': 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=80',
  'sectional-sofas-01': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  'sectional-sofas-02': 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
  'recliner-sofas-01': 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80',
  'recliner-sofas-02': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
  'modular-sofas-01': 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
  'modular-sofas-02': 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
  'fabric-sofas-01': 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
  'fabric-sofas-02': 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80',
  'leather-sofas-01': 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
  'leather-sofas-02': 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80',
  'custom-sofas-01': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  'custom-sofas-02': 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',

  // Dining Tables (20)
  '4-seater-dining-tables-01': 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
  '4-seater-dining-tables-02': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
  '6-seater-dining-tables-01': 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
  '6-seater-dining-tables-02': 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80',
  '8-seater-dining-tables-01': 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80',
  '8-seater-dining-tables-02': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
  '10-seater-dining-tables-01': 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
  '10-seater-dining-tables-02': 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
  'round-dining-tables-01': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  'round-dining-tables-02': 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
  'extendable-dining-tables-01': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  'extendable-dining-tables-02': 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80',
  'marble-dining-tables-01': 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
  'marble-dining-tables-02': 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80',
  'wooden-dining-tables-01': 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80',
  'wooden-dining-tables-02': 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
  'modern-dining-tables-01': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  'modern-dining-tables-02': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  'custom-dining-tables-01': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
  'custom-dining-tables-02': 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80',

  // Beds & Bedroom (22)
  'king-size-beds-01': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  'king-size-beds-02': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  'queen-size-beds-01': 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80',
  'queen-size-beds-02': 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80',
  'double-beds-01': 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
  'double-beds-02': 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
  'storage-beds-01': 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
  'storage-beds-02': 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
  'hydraulic-storage-beds-01': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  'hydraulic-storage-beds-02': 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
  'upholstered-beds-01': 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80',
  'upholstered-beds-02': 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80',
  'platform-beds-01': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  'platform-beds-02': 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80',
  'wooden-beds-01': 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80',
  'wooden-beds-02': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'modern-beds-01': 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80',
  'modern-beds-02': 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80',
  'custom-beds-01': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
  'custom-beds-02': 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80',
  'bedside-tables-01': 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
  'bedside-tables-02': 'https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80',

  // Living & Storage (36)
  // TV Units (14)
  'wall-mounted-tv-units-01': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
  'wall-mounted-tv-units-02': 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80',
  'floor-standing-tv-units-01': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
  'floor-standing-tv-units-02': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'tv-units-with-storage-01': 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80',
  'tv-units-with-storage-02': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
  'minimal-tv-units-01': 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
  'minimal-tv-units-02': 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80',
  'modern-tv-units-01': 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80',
  'modern-tv-units-02': 'https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80',
  'designer-tv-units-01': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  'designer-tv-units-02': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
  'custom-tv-units-01': 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80',
  'custom-tv-units-02': 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80',

  // Wardrobes (14)
  'sliding-door-wardrobes-01': 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
  'sliding-door-wardrobes-02': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
  'hinged-door-wardrobes-01': 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
  'hinged-door-wardrobes-02': 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80',
  'walk-in-wardrobes-01': 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80',
  'walk-in-wardrobes-02': 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80',
  'glass-door-wardrobes-01': 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80',
  'glass-door-wardrobes-02': 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80',
  'modular-wardrobes-01': 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80',
  'modular-wardrobes-02': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  'bedroom-wardrobes-01': 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
  'bedroom-wardrobes-02': 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80',
  'custom-wardrobes-01': 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80',
  'custom-wardrobes-02': '/images/drive/drive_img_12_1kf_HX.jpg',

  // Other Living & Storage (8)
  'sideboards-consoles-01': 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
  'sideboards-consoles-02': 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80',
  'storage-cabinets-01': 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80',
  'storage-cabinets-02': 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80',
  'display-units-01': 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80',
  'display-units-02': 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80',
  'custom-storage-01': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'custom-storage-02': 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80'
};

// ==========================================
// AUDIT & VALIDATION CHECK (100% Zero Duplicates)
// ==========================================
const usedImages = new Map();

function assertUnique(img, label) {
  const base = img.split('?')[0];
  if (!activeSet.has(base)) {
    throw new Error(`CRITICAL: Image not found in activeSet: ${base} (${label})`);
  }
  if (usedImages.has(base)) {
    const existing = usedImages.get(base);
    throw new Error(`DUPLICATE DETECTED: ${base} used in [${existing}] AND [${label}]`);
  }
  usedImages.set(base, label);
}

// 1. Audit Category Heroes (4)
Object.entries(CATEGORY_HEROES).forEach(([cat, img]) => {
  assertUnique(img, `CategoryHero: ${cat}`);
});

// 2. Audit Subcategories (49)
Object.entries(SUBCATEGORY_IMAGES).forEach(([sub, img]) => {
  assertUnique(img, `Subcategory: ${sub}`);
});

// 3. Audit Products (98)
Object.entries(PRODUCT_PRIMARY_IMAGES).forEach(([prod, img]) => {
  assertUnique(img, `Product: ${prod}`);
});

console.log('✅ AUDIT PASSED! Total slots:', 4 + 49 + 98, '=', usedImages.size);
console.log('✅ EXACT ZERO DUPLICATE IMAGES across the entire catalogue!');

// 4. Now read the existing furniture.ts and update its categories and products
import { furnitureCategories, furnitureProducts } from '../src/data/furniture.ts';

// Update categories
const updatedCategories = furnitureCategories.map(cat => {
  const heroImage = CATEGORY_HEROES[cat.slug] || cat.heroImage;
  const subcategories = cat.subcategories.map(sub => {
    const image = SUBCATEGORY_IMAGES[sub.slug] || sub.image;
    return { ...sub, image };
  });
  return { ...cat, heroImage, subcategories };
});

// Update products
const updatedProducts = furnitureProducts.map(prod => {
  const primaryImage = PRODUCT_PRIMARY_IMAGES[prod.id] || prod.primaryImage;
  // Ensure same-product view only: images array has only primaryImage
  return {
    ...prod,
    primaryImage,
    secondaryImage: primaryImage,
    images: [primaryImage]
  };
});

// Build the TypeScript source file
const tsHeader = `// Authoritative Central Furniture Catalogue Architecture
// Strict 4 Major Categories, 49 Subcategories, 98 Unique Verified Products
// 100% Unique Verified Images Across the Entire Website - Zero Duplicates

export interface FurnitureColorOption {
  name: string;
  hex: string;
}

export interface FurnitureFAQ {
  question: string;
  answer: string;
}

export interface FurnitureProduct {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  subcategorySlug: string;
  shortDescription: string;
  description: string;
  price: number | null; // null = "Price on Request"
  originalPrice?: number | null;
  discountPercent?: number | null;
  badge?: 'New' | 'Customizable' | 'Best Seller' | null;
  primaryImage: string;
  secondaryImage: string;
  images: string[];
  dimensions: string;
  seatingCapacity?: string;
  materials: string[];
  finish: string;
  colors: FurnitureColorOption[];
  isCustomizable: boolean;
  inStock: boolean;
  careInstructions: string;
  deliveryInfo: string;
  faqs: FurnitureFAQ[];
}

export interface FurnitureSubcategory {
  id: string;
  slug: string;
  name: string;
  categorySlug?: string;
  description: string;
  image: string;
}

export interface FurnitureCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  subcategories: FurnitureSubcategory[];
}

export interface EditorialArticle {
  categorySlug: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  tips: string[];
}

export const furnitureCategories: FurnitureCategory[] = ${JSON.stringify(updatedCategories, null, 2)};

export const furnitureProducts: FurnitureProduct[] = ${JSON.stringify(updatedProducts, null, 2)};

export const getCuratedCarousels = (): {
  carousel1: FurnitureProduct[];
  carousel2: FurnitureProduct[];
} => {
  const c1Ids = [
    'l-shaped-sofas-01',
    '3-seater-sofas-01',
    'fabric-sofas-01',
    '6-seater-dining-tables-01',
    'round-dining-tables-01',
    'marble-dining-tables-01',
    'king-size-beds-01',
    'hydraulic-storage-beds-01',
    'bedside-tables-01',
    'wall-mounted-tv-units-01',
    'sliding-door-wardrobes-01',
    'sideboards-consoles-01'
  ];
  const c2Ids = [
    'sectional-sofas-02',
    'sofa-cum-beds-02',
    'modular-sofas-02',
    '8-seater-dining-tables-02',
    'extendable-dining-tables-02',
    'wooden-dining-tables-02',
    'queen-size-beds-02',
    'storage-beds-02',
    'upholstered-beds-02',
    'minimal-tv-units-02',
    'walk-in-wardrobes-02',
    'display-units-02'
  ];

  const carousel1 = c1Ids
    .map((id) => furnitureProducts.find((p) => p.id === id))
    .filter((p): p is FurnitureProduct => Boolean(p));

  const carousel2 = c2Ids
    .map((id) => furnitureProducts.find((p) => p.id === id))
    .filter((p): p is FurnitureProduct => Boolean(p));

  return { carousel1, carousel2 };
};

export const getProductsByCategory = (categorySlug: string): FurnitureProduct[] => {
  return furnitureProducts.filter((p) => p.categorySlug === categorySlug);
};

export const getProductsBySubcategory = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureProduct[] => {
  return furnitureProducts.filter(
    (p) =>
      (!categorySlug || p.categorySlug === categorySlug) &&
      p.subcategorySlug === subcategorySlug
  );
};

export const getCategoryBySlug = (slug: string): FurnitureCategory | undefined => {
  return furnitureCategories.find((c) => c.slug === slug);
};

export const getSubcategoryBySlug = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureSubcategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find((s) => s.slug === subcategorySlug);
};

export const getProductBySlug = (slug: string): FurnitureProduct | undefined => {
  return furnitureProducts.find((p) => p.slug === slug || p.id === slug);
};

export const getRelatedProductsForSubcategory = (
  categorySlug: string,
  subcategorySlug: string,
  limit: number = 4
): FurnitureProduct[] => {
  const othersInCat = furnitureProducts.filter(
    (p) => p.categorySlug === categorySlug && p.subcategorySlug !== subcategorySlug
  );
  if (othersInCat.length >= limit) return othersInCat.slice(0, limit);
  const othersOverall = furnitureProducts.filter(
    (p) => p.subcategorySlug !== subcategorySlug
  );
  return othersOverall.slice(0, limit);
};

export const getRelatedProducts = (
  currentProduct: FurnitureProduct,
  limit: number = 4
): FurnitureProduct[] => {
  const sameSub = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.subcategorySlug === currentProduct.subcategorySlug
  );
  const sameCat = furnitureProducts.filter(
    (p) =>
      p.id !== currentProduct.id &&
      p.subcategorySlug !== currentProduct.subcategorySlug &&
      p.categorySlug === currentProduct.categorySlug
  );
  const otherCats = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.categorySlug !== currentProduct.categorySlug
  );

  const combined = [...sameSub, ...sameCat, ...otherCats];
  return combined.slice(0, limit);
};

export const getCompleteTheLookProducts = (
  currentProduct: FurnitureProduct,
  limit: number = 4
): FurnitureProduct[] => {
  const currentCat = currentProduct.categorySlug;
  let complementaryCats: string[] = [];
  if (currentCat === 'sofas') {
    complementaryCats = ['living-storage', 'dining-tables'];
  } else if (currentCat === 'dining-tables') {
    complementaryCats = ['living-storage', 'sofas'];
  } else if (currentCat === 'beds-bedroom') {
    complementaryCats = ['living-storage', 'sofas'];
  } else {
    complementaryCats = ['sofas', 'dining-tables', 'beds-bedroom'];
  }

  const matches = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && complementaryCats.includes(p.categorySlug)
  );

  return matches.slice(0, limit);
};

export const editorialGuides: Record<string, EditorialArticle> = {
  sofas: {
    categorySlug: 'sofas',
    title: 'The Architecture of Comfortable Living',
    subtitle: 'How to select the right sofa proportions and upholstery for Mumbai homes',
    paragraphs: [
      'Choosing a sofa for a Mumbai home is an exercise in balancing spatial proportions with daily living realities. Humidity, room dimensions, natural light, and entertaining frequency all influence the ideal choice.',
      'Our factory workshops engineer kiln-dried timber structures with 5-year guarantees, preventing seasonal warpage while multi-density high-resilience foams ensure support that lasts decades.'
    ],
    tips: [
      'Allow at least 30 inches of walking clearance around coffee tables and passages.',
      'Select performance stain-resistant fabrics for homes with children or pets.',
      'Consider L-shapes to anchor open-plan living rooms without requiring partition walls.'
    ]
  },
  'dining-tables': {
    categorySlug: 'dining-tables',
    title: 'Creating Spaces for Shared Memories',
    subtitle: 'A guide to selecting dining table shapes, seating clearance, and tabletop materials',
    paragraphs: [
      'The dining table is more than a place for meals; it is where families gather, conversations unfold, and celebrations take shape.',
      'Whether you choose solid Burma teak or sealed Italian Statuario marble, each piece is engineered with ergonomic knee clearance and durable hand-applied seals.'
    ],
    tips: [
      'Plan 36 inches between the table edge and walls to allow chairs to slide out comfortably.',
      'Round dining tables facilitate effortless conversation and fluid room movement.',
      'For compact dining nooks, explore central pedestal bases that provide legroom on all sides.'
    ]
  },
  'beds-bedroom': {
    categorySlug: 'beds-bedroom',
    title: 'Designing Your Personal Sanctuary',
    subtitle: 'Master suite bed proportions, noise-free joinery, and concealed hydraulic storage',
    paragraphs: [
      'A great bed balances architectural presence with tranquil comfort. In Mumbai residences where floor space is valuable, our hydraulic lift-up mechanisms unlock massive dust-free storage underneath without compromising aesthetics.',
      'Solid timber frames with precision mortise-and-tenon joints eliminate nocturnal creaking and support luxury pocket-spring mattresses with ease.'
    ],
    tips: [
      'Maintain at least 24 inches on both sides of a king or queen bed for side tables and movement.',
      'Upholstered fluted headboards add acoustic dampening and sumptuous late-night reading comfort.',
      'Opt for gas-lift hydraulic storage to access underbed luggage with effortless fingertip action.'
    ]
  },
  'living-storage': {
    categorySlug: 'living-storage',
    title: 'Effortless Order & Architectural Joinery',
    subtitle: 'From floating media walls to bespoke floor-to-ceiling wardrobes',
    paragraphs: [
      'Intelligent storage transforms living rooms and bedrooms from cluttered spaces into calm architectural retreats.',
      'Our factory specializes in custom wardrobe joinery, acoustically treated TV panels, and fluted credenzas built to your exact wall elevations.'
    ],
    tips: [
      'Wall-mounted floating media consoles create visual lightness and simplify floor cleaning.',
      'Top-hung sliding wardrobe doors save valuable swing space in compact bedrooms.',
      'Incorporate integrated warm LED lighting inside wardrobes and display vitrines for luxurious evening ambiance.'
    ]
  }
};
`;

fs.writeFileSync('src/data/furniture.ts', tsHeader);
console.log('🎉 Successfully wrote updated authoritative furniture.ts!');

