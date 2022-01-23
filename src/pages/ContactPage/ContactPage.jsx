import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import contactJSON from 'utils/contact.json';

//Iletisim sayfasi.
//Iletisim bilgileri ve google maps haritasi bulunmaktadir.
//Sadece bu verileri gosterir. Veriler contact.json dosyasindan degistirilebilir

export default function ContactPage() {
  return (
    <div className="container mx-auto flex flex-col items-center min-h-[40rem]">
      <h2 className="text-2xl py-4 font-bold">İletişim</h2>
      <div className="flex flex-col lg:flex-row w-full m-auto justify-evenly gap-5 px-5">
        <div className="h-[20rem] lg:h-[30rem] lg:w-[50%] flex flex-col gap-y-5 text-gray-400 font-normal ">
          <span className="flex text-xs md:text-base gap-x-2">
            <HomeIcon className="w-8" />
            {contactJSON.address}
          </span>
          <span className="flex text-xs md:text-base gap-x-2">
            <PhoneIcon className="w-8" />
            {contactJSON.mobileNo}
          </span>
          <span className="flex text-xs md:text-base gap-x-2">
            <MailIcon className="w-8" />
            {contactJSON.email}
          </span>
        </div>
        <div className="h-[20rem] md:h-[25rem] lg:h-[30rem] lg:w-[50%]">
          <iframe
            title="google-map"
            src={contactJSON.map}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}
