import React from 'react';
import DiscountCard from 'components/Cards/DiscountCard';
import discountValues from 'utils/discountValues';

//Indirim kupon alani
//Indirip kuponlari kartlar halinde anasayfada listelenir

export default function DiscountPage() {
  return (
    <div className="container mx-auto min-h-[40rem]">
      <h2 className="text-2xl py-4 font-bold text-center">Kampanyalar</h2>
      <p className="text-center py-5 text-base text-gray-700">
        İndirim kodunuzu sipariş ekranında kullanabilirsiniz.
      </p>
      <div className="flex gap-x-2 justify-center">
        {Object.keys(discountValues).map((discountKey) => (
          <DiscountCard
            discountItem={{ ...discountValues[discountKey], code: discountKey }}
          />
        ))}
      </div>
    </div>
  );
}
