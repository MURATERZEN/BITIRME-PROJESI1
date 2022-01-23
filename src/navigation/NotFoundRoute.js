import React from 'react';
import { Link } from 'react-router-dom';

//404 Route. Uygulamada bulunmayan bir route a giris sonrasi bu sayfa gosterilir.
//Anasayfaya donme linki verilir

export default function NotFoundRoute() {
  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-7xl">404</h1>
      <h2 className="text-2xl">Aradığınız sayfa bulunamadı.</h2>
      <Link to="/" replace className=" bg-yellow-900 p-2 rounded-md text-white">
        Anasayfaya Dön &rarr;
      </Link>
    </div>
  );
}
