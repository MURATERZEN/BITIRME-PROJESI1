import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'context/CartContext';

import Button from 'components/Buttons/Button';
import CartItemCard from 'components/Cards/CartItemCard';

import { XCircleIcon } from '@heroicons/react/solid';

//SEPET
//Burasi bir sayfa olarak tasarlandigi icin page altinda CartPage adini aldi.
//Sonrasinda tum uygulama uzerinde bir yapi olmasina karar verildi.
//Sepete eklenen urunleri,urun sayisini, toplam fiyati CartContext uzerinden alip listeleme yapar.
//Sepet doluysa siparis ekranina yonlendirecek bir butona sahiptir.

export default function CartPage() {
  const { isCartOpen, closeCart, cart, cartTotal, cartItemAmount } = useCart();
  const navigate = useNavigate();
  //useRef ile guncellenen en son div tutuluyor
  const cartRef = useRef(null);

  //Tiklama sonrasinda tiklanilan eleman ile sepet sekmesi karsilastiriliyor.
  //Eger tiklanilan yer sepet ise kapatma
  //Eger sepet disina tiklanildiysa sepeti geri cek.
  const handleCartClick = (e) => {
    if (cartRef.current === e.target) {
      closeCart();
    }
  };

  //ref ile sepet sekmesinin div i baglandi.
  //Ekran guncellense bile hep en guncel div tutuluyor.
  return (
    <div onClick={handleCartClick} className="relative w-screen">
      <div
        ref={cartRef}
        className=" z-[20] fixed w-full h-screen bg-gray-700 opacity-50 cursor-pointer"
        style={{
          display: isCartOpen ? 'block' : 'none',
        }}
      />
      <div
        className="bg-gray-100 fixed right-0 top-0 z-[30] h-screen w-[18rem] md:w-[23rem] lg:w-[30rem] duration-200 flex flex-col justify-center"
        style={{
          transform: isCartOpen ? 'translateX(0%)' : 'translateX(100%)',
        }}
      >
        <div className="flex px-2 py-2 justify-between items-center text-yellow-900">
          <h2 className=" text-lg lg:text-2xl font-bold">Sepetim</h2>
          <XCircleIcon className="w-10 cursor-pointer" onClick={closeCart} />
        </div>
        <div className="flex px-2 py-2 justify-between items-center text-yellow-900">
          <h2 className=" text-xs font-bold">
            Sepetinizde {cartItemAmount} ürün var.
          </h2>
        </div>
        {/* SEPET ICERIGI */}
        <div className="h-[35rem] px-1 py-2 overflow-y-auto border-b border-t border-yellow-700 flex flex-col gap-y-5">
          {cartItemAmount ? (
            cart.map((item) => (
              <CartItemCard key={item.name} cartItemData={item} />
            ))
          ) : (
            <h3 className="inline-block m-auto font-bold text-lg text-yellow-900">
              Sepet Boş
            </h3>
          )}
        </div>
        {/* SEPET ICERIGI */}
        <div className="flex justify-between px-5 py-5 text-lg text-yellow-900 font-bold">
          <span>Toplam:</span>
          <span>{cartTotal}₺</span>
        </div>
        <Button
          disabled={cartItemAmount <= 0}
          text="Sipariş Ver"
          customClass="duration-200 bg-yellow-400 hover:bg-yellow-600 text-orange-900 text-base h-[3rem] w-[15rem] mx-auto disabled:bg-gray-600 disabled:text-white"
          onClick={() => {
            navigate('siparis');
            closeCart();
          }}
        />
      </div>
    </div>
  );
}
