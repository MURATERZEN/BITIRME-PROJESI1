import CartPage from 'pages/CartPage/CartPage';
import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutFooter from './components/LayoutFooter';
import LayoutHeader from './components/LayoutHeader';

//Ana sayfa duzeni.
//Sayfa degistirilmesi durumunda sadece icerigin degismesi icin genel layout yapisi

export default function MainAppLayout() {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <CartPage />
      <LayoutHeader />
      <div className="my-10">
        <Outlet />
      </div>
      <LayoutFooter />
    </div>
  );
}
