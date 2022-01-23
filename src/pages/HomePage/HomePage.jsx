import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CategoriesMenu from './components/CategoriesMenu';
import ProductList from './components/ProductList';

import { DotsCircleHorizontalIcon } from '@heroicons/react/solid';

import products from 'utils/products.json';
import categories from 'utils/categories.json';

// Uygulama ana ve kategori sayfasi
// Urunler,kategoriler ve indirim kuponlari bu sayfa altinda bulunur. Bilesenleri components klasoru altindadir.
// Urunler products.json dosyasinda bulunmaktadir.
// Kategoriler categories.json dosyasinda bulunmaktadir.

export default function HomePage() {
  const location = useLocation();

  const [categoryTitle, setCategoryTitle] = useState('Yiyecekler');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //Ust kategori secilirse ust kategoriye ait tum urunler,

  const getAllTopCategoryItems = (topCategoryId) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedProducts(
        products.filter((product) => product.topCategory === topCategoryId)
      );
      setLoading(false);
    }, 1000);
  };

  //Alt kategori secilirse alt kategoriye ait tum urunler product verisinden alinir.
  const getAllSubCategoryItems = (subCategoryId) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedProducts(
        products.filter((product) => product.subCategory === subCategoryId)
      );
      setLoading(false);
    }, 1000);
  };

  //Sayfanin ilk yuklenmesi durumunda verileri getir.
  //Varsayilan kategori yiyeceklerdir.
  useEffect(() => {
    getAllTopCategoryItems('yiyecekler');
  }, [location]);

  return (
    <div className="container flex flex-col lg:flex-row mx-auto gap-x-10 relative">
      <CategoriesMenu
        categories={categories}
        getAllSubCategoryItems={getAllSubCategoryItems}
        getAllTopCategoryItems={getAllTopCategoryItems}
        setCategoryTitle={setCategoryTitle}
      />
      {isLoading ? (
        <div className="h-[45rem] w-full flex">
          <DotsCircleHorizontalIcon className="w-10 animate-ping mx-auto my-auto text-yellow-500" />
        </div>
      ) : (
        <div className="basis-3/4">
          <ProductList
            productList={selectedProducts}
            categoryTitle={categoryTitle}
          />
        </div>
      )}
    </div>
  );
}
