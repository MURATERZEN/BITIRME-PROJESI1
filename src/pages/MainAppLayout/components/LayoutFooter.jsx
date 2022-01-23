import React from 'react';
import hamburgerLogo from 'assets/hamburger-logo.svg';

export default function LayoutFooter() {
  return (
    <div className="bg-yellow-900 h-80 w-full mt-auto relative flex">
      <div className="food-pattern absolute top-0 left-0 w-full h-full" />
      <div className="flex items-center gap-x-5 justify-center z-10 relative m-auto">
        <img src={hamburgerLogo} className="w-12 lg:w-24" alt="logo" />
        <h1 className="text-yellow-500 text-2xl lg:text-3xl font-bold">
          Kantinci Abi
        </h1>
      </div>
    </div>
  );
}
