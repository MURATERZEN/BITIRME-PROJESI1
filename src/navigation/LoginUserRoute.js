import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//Loginden yonlendirme route.
//Zaten giris yapmis kullanicilarin tekrar login ekranina ulasmasini engellemek icin kullanilir.
//Veritabani baglantisi sonrasi calisabilir hale getirilecektir.

export default function LoginUserRoute() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
