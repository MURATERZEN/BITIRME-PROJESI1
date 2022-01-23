import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Buttons/Button';
import { LockClosedIcon, MailIcon } from '@heroicons/react/solid';

export default function SignInForm({ handleLogin }) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleLogin}
      className="h-[32rem] flex flex-col justify-center items-center px-20 gap-y-5 w-full"
    >
      <h2 className="text-xl font-bold text-yellow-900">Giriş Yapın</h2>
      <label htmlFor="loginMail" className="text-sm flex flex-col gap-y-2">
        <span className="text-yellow-900 font-semibold">
          <MailIcon className="w-5 inline-block" />
          E-Mail
        </span>
        <input
          id="loginMail"
          type="text"
          className="border rounded-md border-gray-400 h-[3rem] w-[17rem]"
        />
      </label>
      <label htmlFor="loginPassword" className="text-sm flex flex-col gap-y-2">
        <span className="text-yellow-900 font-semibold">
          <LockClosedIcon className="w-5 inline-block" /> Şifre
        </span>
        <input
          id="loginPassword"
          type="password"
          className="border rounded-md border-gray-400 h-[3rem] w-[17rem]"
        />
      </label>
      <Button
        text="Giriş"
        type="submit"
        customClass="duration-200 bg-yellow-400 hover:bg-yellow-600 text-orange-900 text-base h-[3rem] w-full disabled:bg-gray-600 disabled:text-white"
      />
      <Button
        text="Kayıt Ol"
        type="button"
        customClass="duration-200 bg-blue-500 hover:bg-yellow-600 text-white h-[3rem] w-[70%] disabled:bg-gray-600 disabled:text-white"
        onClick={() => {
          navigate('/kayit');
        }}
      />
    </form>
  );
}
