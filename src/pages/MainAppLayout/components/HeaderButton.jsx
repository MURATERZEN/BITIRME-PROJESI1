import React from 'react';

//Header üzerindeki linkler için bir bileşen.
//içerisindeki yazıyı gideceği adresi ve varsa ikon proplarını alır

export default function HeaderButton({
  text,
  icon = '',
  customClass,
  ...rest
}) {
  return (
    <button
      className={`text-yellow-900 rounded-md py-1 px-2 text-xs md:text-sm lg:text-md active:translate-y-1 flex gap-x-2 items-center duration-150 hover:bg-yellow-900 hover:text-yellow-400 group font-bold ${customClass}`}
      {...rest}
    >
      <span>{icon}</span>
      <span className="hidden group-hover:inline-block group-active:inline-block md:inline-block">
        {text}
      </span>
    </button>
  );
}
