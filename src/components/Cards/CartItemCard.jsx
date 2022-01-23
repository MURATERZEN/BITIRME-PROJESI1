import React from 'react';

import { TrashIcon } from '@heroicons/react/solid';
import { useCart } from 'context/CartContext';

//Sepet urunu bileseni
//Verilen cartItemData verisi ile bir urun karti olusturulur.
//Sepet ve siparis ekraninda kullanilir

export default function CartItemCard({ cartItemData }) {
  const { removeFromCart } = useCart();

  return (
    <div className="bg-white h-[8rem] flex items-center border border-gray-300 gap-x-2 text-yellow-900 px-2">
      <img
        src={cartItemData.image}
        alt={cartItemData.name}
        className="w-[7rem] h-[5rem] inline-block"
      />
      <div className="flex flex-col h-full py-2 justify-evenly ">
        <p className=" text-sm lg:text-lg font-bold">{cartItemData.name}</p>
        <span className="inline-flex justify-between text-xs lg:text-base lg:w-[10rem]">
          <span className="">{cartItemData.amount} adet</span>
          <span className="font-bold">
            {cartItemData.amount * cartItemData.price}₺
          </span>
        </span>
      </div>
      <TrashIcon
        className="w-7 ml-auto mr-5 cursor-pointer"
        onClick={() => {
          removeFromCart(cartItemData.id);
        }}
      />
    </div>
  );
}
