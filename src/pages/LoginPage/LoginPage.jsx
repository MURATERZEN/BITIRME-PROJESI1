import React from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';

import hamburgerLogo from 'assets/hamburger-logo.svg';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

//Giris Ekrani
//Suan islevsizdir veritabani baglantisina ihtiyac duymaktadir.
//Giris sonrasi anaysayfaya yonlendirme yapmaktadir.

export default function LoginPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const LoginSwal = withReactContent(Swal);

  //Giris basarili ise ekranda bildirim gosterme
  const Toast = LoginSwal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    background: '#65a30d',
    color: 'white',
    showConfirmButton: false,
    timer: 1500,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: 'success',
      title: 'Giriş Başarılı!',
    });
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1800);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: 'success',
      title: 'Kayıt Başarılı!',
    });
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1800);
  };

  return (
    <div className="bg-gradient-to-t from-yellow-400 to-yellow-500 w-full h-screen flex items-center lg:items-stretch">
      <div className="food-pattern absolute top-0 left-0 w-full h-full" />
      <div className="bg-white z-[50] rounded lg:rounded-none mx-auto lg:mx-0 lg:ml-auto  w-[97%] lg:w-1/4 flex flex-col items-center justify-center py-5">
        <div className="flex items-center gap-x-5 justify-center z-10 relative">
          <img src={hamburgerLogo} className="w-12 lg:w-24" alt="logo" />
          <h1 className="text-yellow-900 text-2xl lg:text-3xl font-bold">
            Kantinci Abi
          </h1>
        </div>
        <div>
          {pathname === '/giris' ? (
            <SignInForm handleLogin={handleLogin} />
          ) : (
            <SignUpForm handleRegister={handleRegister} />
          )}
        </div>
      </div>
    </div>
  );
}
