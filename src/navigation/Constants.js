// Route larin listelenmesi. Yeni route lar eklenip cikarilabilir.
// Routeconfig dosyasinda kullanilir.

export const ROOT = '/';
export const ORDER = 'siparis';
export const CONTACT = 'iletisim';
export const DISCOUNT = 'kampanyalar';
export const LOGIN = 'giris';
export const REGISTER = 'kayit';
export const DASHBOARD = '/yonetim';
export const NOTFOUND = '*';

// Route isimleri. Genel olarak sayfa basligi olarak kullanilabilir.
export const routeTitles = {
  [ROOT]: 'Anasayfa',
  [LOGIN]: 'Giriş',
  [NOTFOUND]: '404',
};

//KULLANIM DISI

// export const CATEGORY = '/kategori';
// export const CATEGORY_ID = ':categoryId';
// export const SUBCATEGORY_ID = ':subCategoryId';
// export const CART = '/sepet';
