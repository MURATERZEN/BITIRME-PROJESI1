import React from 'react';

//Buton bileseni
//Icine gonderilen text propu ve onclick fonksiyonu ile tiklanildiginda islem gerceklestirilebilir

export default function Button({ text = 'Button', customClass = '', ...rest }) {
  return (
    <button
      className={`rounded-md text-sm px-2 py-2 font-semibold active:translate-y-1 ${customClass}`}
      {...rest}
    >
      {text}
    </button>
  );
}
