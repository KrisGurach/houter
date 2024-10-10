import React from 'react';
import logo from '../images/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <>
    <header className="flex justify-between items-center pt-[40px] px-[120px]">
      <div className="flex items-center">
        <Image src={logo} alt="Логотип" className="w-9 h-9 object-cover" />
        <h1 className="font-[family-name:var(--font-lexend-bold)] ml-3">Hounter</h1>
      </div>
      <nav className="z-10">
        <ul className="flex space-x-4">
          <li>
            <button className="py-2 px-4 text-sm text-[var(--color-txt-transparent-button)] font-[family-name:var(--font-lexend-semiBold)] bg-[var(--color-bg-transparent-button)] border border-[var(--color-border-transparent-button)] rounded-[32px] hover:bg-[var(--color-border-transparent-button)]">
              About Us
            </button>
          </li>
          <li>
            <button className="py-2 px-4 text-sm text-[var(--color-txt-transparent-button)] font-[family-name:var(--font-lexend-semiBold)] bg-[var(--color-bg-transparent-button)] border border-[var(--color-border-transparent-button)] rounded-[32px] hover:bg-[var(--color-border-transparent-button)]">
              Article
            </button>
          </li>
          <li>
            <button className="py-2 px-4 text-sm text-[var(--color-txt-transparent-button)] font-[family-name:var(--font-lexend-semiBold)] bg-[var(--color-bg-transparent-button)] border border-[var(--color-border-transparent-button)] rounded-[32px] hover:bg-[var(--color-border-transparent-button)]">
              Property
            </button>
          </li>
          <li>
          <button className="ml-14 py-3 px-6 text-sm text-[var(--color-txt-green-button)] font-[family-name:var(--font-lexend-semiBold)] bg-[var(--color-bg-light-green-button)] rounded-[32px] hover:bg-[var(color-bg-light-green-button)]">
            Sign up!
          </button>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
