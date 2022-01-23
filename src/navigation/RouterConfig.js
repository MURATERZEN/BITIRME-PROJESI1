import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Yonlendirme bilesenleri.
import {
  ROOT,
  CONTACT,
  LOGIN,
  NOTFOUND,
  ORDER,
  DISCOUNT,
  REGISTER,
} from './Constants';

import LoginUserRoute from './LoginUserRoute';
import NotFoundRoute from './NotFoundRoute';

//Sayfa Bilesenleri.
import MainAppLayout from 'pages/MainAppLayout/MainAppLayout';
import ContactPage from 'pages/ContactPage/ContactPage';

import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import OrderPage from 'pages/OrderPage/OrderPage';
import DiscountPage from 'pages/DiscountPage/DiscountPage';

//Genel yonlendirme yapisi
//Constants icerisinde olusturulan routelar ve bu routlelar icerisinde hangi bilesenlerin gosterileceginin belirlenmesi.
//RouteConfig genel uygulama icerisine oturtulur ve urlye gore uygulamada istenen bilesen/sayfalar gosterilebilir.
//Bazi sayfalara giris kullanici/yonetici olma durumuna gore engellenebilir veya izin verilebilir.

//Bazi sayfalar genel bir sema altinda bulunurlar. Sayfa degisimi durumunda tasarimda sadece istenen alan degisir header/footer gibi yapilir degismez
//Bunun icin gerekli sayfalar/semalar altinda React routerin saglamis oldugu <Outlet/> bileseni kullanilmistir.

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={NOTFOUND} element={<NotFoundRoute />} />
      <Route path={ROOT} element={<MainAppLayout />}>
        <Route index element={<HomePage />} />
        <Route path={DISCOUNT} element={<DiscountPage />} />
        <Route path={CONTACT} element={<ContactPage />} />
        <Route path={ORDER} element={<OrderPage />} />
      </Route>

      {/* YONETIM BOLUMU EKLENECEK */}

      {/* <Route element={<AuthRoute />}>
        <Route path={DASHBOARD} element={<DashboardPage />} />
      </Route> */}

      {/* YONETIM BOLUMU EKLENECEK */}
      <Route element={<LoginUserRoute />}>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
