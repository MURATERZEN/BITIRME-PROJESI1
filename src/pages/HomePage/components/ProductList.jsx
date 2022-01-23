import React from 'react';
import { useCart } from 'context/CartContext';

import ProductCard from 'components/Cards/ProductCard';

//Ürünleri listeleme
//Gelen productList verisine gore urunler kartlar halinde gosterilir.
//Urun yoksa urun bulunamadi yazisi gosterilir

//Urunlere CartContext icerisindeki addToCart fonksiyonu ile sepete ekleme ozelligi prop olarak gonderilir.

export default function ProductList({ productList, categoryTitle }) {
  const { addToCart } = useCart();

  return (
    <div className="py-5 px-2 lg:px-5">
      <h2 className="font-bold text-gray-700 mb-10 text-center lg:text-left">
        {categoryTitle}
      </h2>
      <div className="flex flex-wrap gap-2 lg:gap-5 justify-center lg:justify-start">
        {productList.length
          ? productList.map((product) => (
              <ProductCard
                key={product.name}
                productData={product}
                addToCartFunc={addToCart}
              />
            ))
          : 'Ürün bulunamadı'}
      </div>
    </div>
  );
}
