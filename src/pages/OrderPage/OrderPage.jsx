import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Navigate } from 'react-router-dom';
import { useCart } from 'context/CartContext';

import CartItemCard from 'components/Cards/CartItemCard';
import Button from 'components/Buttons/Button';

//Siparis sayfasi.
//Sepet ile ayni sistemle calisir
//Cart Contexti kullanmaktadir.

export default function OrderPage() {
  const {
    cart,
    cartTotal,
    cartItemAmount,
    calculateDiscount,
    cartDiscountAmount,
    emptyCart,
  } = useCart();

  const OrderSwal = withReactContent(Swal);
  const [discountCode, setDiscountCode] = useState('');

  const Toast = OrderSwal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',

    color: 'white',
    showConfirmButton: false,
    timer: 1500,
  });

  const handleOrder = async (e) => {
    e.preventDefault();
    await Toast.fire({
      icon: 'success',
      title: `Siparişiniz Alındı.`,
      background: 'green',
    });
    emptyCart();
  };

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  //Indirim hesaplama
  const getDiscount = () => {
    if (discountCode) {
      if (calculateDiscount(discountCode)) {
        Toast.fire({
          icon: 'success',
          title: `İndirim uygulandı.`,
          background: 'green',
        });
      } else {
        Toast.fire({
          icon: 'success',
          title: 'Kod Yanlış veya Uygun Değil',
          background: 'red',
        });
      }
    }
    setDiscountCode('');
  };

  return !cart.length ? (
    <Navigate to="/" replace />
  ) : (
    <div className="container mx-auto lg:min-h-[50rem]">
      <h2 className="text-center lg:text-left text-2xl my-2 text-yellow-900 font-bold">
        Sipariş Ver
      </h2>
      <div className="flex flex-col lg:flex-row gap-x-2 w-full">
        <div className="lg:h-[40rem] lg:overflow-y-auto w-[98%] lg:w-4/6 mx-auto flex flex-col gap-y-1">
          {cart.map((item) => (
            <CartItemCard key={item.name} cartItemData={item} no />
          ))}
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg w-[98%] lg:w-2/6 mx-auto p-4">
          <h2 className="text-center lg:text-left text-xl text-yellow-900 font-bold my-2">
            Sipariş Özeti
          </h2>
          <div className="flex flex-col text-base font-semibold">
            <span className="flex justify-between bg-gray-100 p-2 text-lg">
              Toplam Ürün:<span>{cartItemAmount}</span>
            </span>
            <span className="flex justify-between bg-gray-100 p-2 text-lg">
              Toplam Tutar:<span>{cartTotal}₺</span>
            </span>
            <span className="flex justify-between bg-gray-100 p-2 text-lg">
              İndirim:<span>%{cartDiscountAmount.amount}</span>
            </span>
          </div>
          <div className="mt-1 mb-4 flex items-end gap-x-1">
            <label htmlFor="orderCode">
              <span className="text-gray-700 font-semibold inline-block my-1">
                Indirim kodu
              </span>
              <input
                type="text"
                placeholder="kod"
                className="w-full bg-white border-2 border-gray-200 rounded-sm h-12 px-2 focus:outline-yellow-500"
                value={discountCode}
                onChange={handleDiscountCodeChange}
              />
            </label>
            <Button
              text="Kod Gir"
              customClass="duration-200 bg-yellow-400 hover:bg-yellow-600 text-orange-900 text-base h-[3rem] w-[10rem] mx-auto disabled:bg-gray-600 disabled:text-white m-0"
              onClick={getDiscount}
            />
          </div>
          <hr />
          <form className="flex flex-col" onSubmit={handleOrder}>
            <label htmlFor="orderName" className="my-2">
              <span className="text-gray-700 font-semibold inline-block my-1">
                İsim Soyisim
              </span>
              <input
                type="text"
                placeholder="Isim"
                className="w-full bg-white border-2 border-gray-200 rounded-sm h-12 px-2 focus:outline-yellow-500"
              />
            </label>
            <label htmlFor="orderTel" className="my-2">
              <span className="text-gray-700 font-semibold inline-block my-1">
                Telefon No:
              </span>
              <input
                type="text"
                placeholder="Telefon"
                className="w-full bg-white border-2 border-gray-200 rounded-sm h-12 px-2 focus:outline-yellow-500"
              />
            </label>

            <label htmlFor="orderAdressDesc" className="my-2">
              <span className="text-gray-700 font-semibold inline-block my-1">
                Sipariş Notu
              </span>
              <textarea
                type="text"
                placeholder="Notunuz"
                className="w-full bg-white border-2 border-gray-200 rounded-sm h-32 p-2 resize-none focus:outline-yellow-500"
              />
            </label>
            <Button
              text="Siparişi Tamamla"
              customClass="duration-200 bg-yellow-400 hover:bg-yellow-600 text-orange-900 text-base h-[3rem] w-[15rem] mx-auto disabled:bg-gray-600 disabled:text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
