import { LockClosedIcon, MailIcon } from '@heroicons/react/solid';
import Button from 'components/Buttons/Button';
import React from 'react';

export default function SignUpForm({ handleRegister }) {
  return (
    <form
      className="h-[32rem] flex flex-col justify-center items-center px-20 gap-y-5 w-full"
      onSubmit={handleRegister}
    >
      <h2 className="text-xl font-bold text-yellow-900">Kayıt Olun</h2>
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
      <label
        htmlFor="loginPasswordConfir"
        className="text-sm flex flex-col gap-y-2"
      >
        <span className="text-yellow-900 font-semibold">
          <LockClosedIcon className="w-5 inline-block" /> Şifre Tekrar
        </span>
        <input
          id="loginPasswordConfirm"
          type="password"
          className="border rounded-md border-gray-400 h-[3rem] w-[17rem]"
        />
      </label>
      <Button
        text="Kayıt Ol"
        type="submit"
        customClass="duration-200 bg-yellow-400 hover:bg-yellow-600 text-orange-900 text-base h-[3rem] w-full disabled:bg-gray-600 disabled:text-white"
      />
    </form>
  );
}
