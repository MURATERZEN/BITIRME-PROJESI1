import React from 'react';

//Indirim kart bileseni
//Verilen discountItem verisi ile indirim bilgisi ve kodunu iceren kart olusturulur
//Anasayfada indirim kuponlarini gostermek icin kullanilmaktadir.

export default function DiscountCard({ discountItem }) {
  return (
    <div className="h-36 w-44 bg-yellow-500 border border-gray-200 rounded-lg flex flex-col flex-wrap text-center justify-between p-2 shadow-sm cursor-pointer hover:shadow-lg text-yellow-900">
      <span className="text-base font-semibold">{discountItem.name}</span>
      <span className="text-xl font-bold bg-yellow-900 text-yellow-500">
        {discountItem.code}
      </span>
    </div>
  );
}
