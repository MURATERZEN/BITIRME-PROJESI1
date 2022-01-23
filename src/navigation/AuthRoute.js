import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

//Yonetim uzeri route lar icin kontrol. Kullanici uye/yonetici degilse bu route a giremez.
//Login sayfasina yonlendirilir.
//Veritabani baglantisi sonrasi calisabilir olacaktir.

export default function AuthRoute() {
  if (!false) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
