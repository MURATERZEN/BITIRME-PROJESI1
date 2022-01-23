import { DotsCircleHorizontalIcon } from '@heroicons/react/solid';
import Button from 'components/Buttons/Button';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

//Urunleri listelemek icin kart bileseni
//Verilen productData prop verisi ile urun bilgisi yazdirilir
//addToCartFunc ile sepete ekleme fonksiyonu kart icerisinde kullanilabilir
//addToCartFunct sepet sayfasindan gonderilir

export default function ProductCard({ productData, addToCartFunc }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [productAmount, setProductAmount] = useState('');
  const ProductSwal = withReactContent(Swal);

  //Urun eklendi uyarisi
  const Toast = ProductSwal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    background: '#65a30d',
    color: 'white',
    showConfirmButton: false,
    timer: 1500,
  });

  //Adet bilgisi degistiginde state e yazma
  const handleAmountChange = (e) => {
    setProductAmount(Number(e.target.value));
  };

  // Inputtan gelen sayi verisi ile urunleri sepete ekleme
  const handleAddToCart = async (e) => {
    e.preventDefault();

    addToCartFunc({
      name: productData.name,
      id: productData.id,
      price: productData.price,
      image: productData.image,
      amount: productAmount ? productAmount : 1,
    });
    setProductAmount('');
    Toast.fire({
      icon: 'success',
      title: 'Sepete Eklendi',
    });
  };
  //w-72 min-h-64 sm:w-60 sm:min-h-72 md:w-72 2xl:w-72 2xl:min-h-96
  return (
    <div className="bg-white w-[11rem] md:w-52 lg:w-72 lg:h-[26rem] rounded-lg overflow-hidden shadow-sm flex flex-col gap-y-2 cursor-pointer border border-gray-300 duration-100 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1">
      <div>
        <img
          className="w-full h-[8rem] lg:h-[12rem] rounded-b-lg"
          style={{ display: `${imageLoading ? 'none' : 'inline-block'}` }}
          src={productData.image}
          alt={productData.name}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      {imageLoading && (
        <span className="flex w-full h-[12rem] ">
          <DotsCircleHorizontalIcon className="text-yellow-500 animate-ping w-5 m-auto" />
        </span>
      )}
      <div className="flex px-2 py-2 border-b border-gray-200 items-center">
        <span className="font-bold text-sm text-amber-900">
          {productData.name}
        </span>
        <span className="text-amber-900 font-bold text-center text-base lg:text-lg rounded-md ml-auto mr-2 ">
          {productData.price}₺
        </span>
      </div>
      <span className="px-4 py-2 text-[0.6rem] lg:text-xs font-normal text-gray-400 mb-auto">
        {productData.description ? productData.description : productData.name}
      </span>
      <form
        className="flex flex-col lg:flex-row gap-2 px-2 justify-between items-center"
        onSubmit={handleAddToCart}
      >
        <input
          type="number"
          className="h-7 w-full lg:w-[30%] inline-block px-2 border border-orange-300 rounded"
          placeholder="Adet"
          min={1}
          max={20}
          onChange={handleAmountChange}
          value={productAmount}
        />
        <Button
          type="submit"
          text="Sepete Ekle"
          customClass="duration-200 bg-yellow-500 hover:bg-yellow-900 text-black hover:text-white w-full lg:w-[60%] my-2"
        />
      </form>
    </div>
  );
}
