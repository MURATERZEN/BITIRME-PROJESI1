import React from 'react';
import { useCart } from 'context/CartContext';
import {
  HomeIcon,
  ShoppingCartIcon,
  ChatIcon,
  UserIcon,
  TrendingDownIcon,
} from '@heroicons/react/solid';

import HeaderLink from 'pages/MainAppLayout/components/HeaderLink';
import HeaderButton from './HeaderButton';

import hamburgerLogo from 'assets/hamburger-logo.svg';

//Sayfa header. Butun Sayfalarda gozukmesi beklenir
// Linkleri ve logoyu barındırır

export default function LayoutHeader() {
  const { openCart, cartItemAmount } = useCart();

  return (
    <header className="bg-gradient-to-t from-yellow-400 to-yellow-500 h-[10rem] lg:h-[15rem] relative flex flex-col gap-y-10 md:gap-y-5 justify-center">
      <div className="food-pattern absolute top-0 left-0 w-full h-full" />
      <div className="flex items-center gap-x-5 justify-center z-10 relative">
        <img src={hamburgerLogo} className="w-12 lg:w-32" alt="logo" />
        <h1 className="text-yellow-900 text-2xl lg:text-5xl font-bold">
          Kantinci Abi
        </h1>
      </div>
      <div className="flex flex-wrap z-10 justify-center gap-x-2 md:gap-x-8 gap-y-2 text-yellow-400 font-bold mt-2 lg:mt-0">
        <HeaderLink
          text="Anasayfa"
          to="/"
          icon={<HomeIcon className="w-7" />}
        />
        <HeaderLink
          text="Giriş Yap"
          to="/giris"
          icon={<UserIcon className="w-7" />}
        />
        <HeaderLink
          text="İletişim"
          to="/iletisim"
          icon={<ChatIcon className="w-7" />}
        />
        <HeaderLink
          text="Kampanyalar"
          to="/kampanyalar"
          icon={<TrendingDownIcon className="w-7" />}
        />
        <HeaderButton
          text="Sepet"
          onClick={openCart}
          customClass="relative"
          icon={
            <>
              <ShoppingCartIcon className="w-7" />{' '}
              <span className="absolute bg-yellow-900 text-yellow-400 px-2 py-1 top-[50%] translate-y-[-50%] right-[-35%] text-xs rounded-sm">
                {cartItemAmount}
              </span>
            </>
          }
        />
      </div>
    </header>
  );
}
