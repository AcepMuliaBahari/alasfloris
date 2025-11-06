import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { CartIcon, FlowerIcon } from './icons/MiscIcons';
import ThemeToggle from './ThemeToggle';
import { Theme } from '../App';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  cartItemCount: number;
  onCartClick: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, cartItemCount, onCartClick, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { page: Page; label: string }[] = [
    { page: 'home', label: 'Beranda' },
    { page: 'about', label: 'Tentang Kami' },
    { page: 'shop', label: 'Katalog' },
    { page: 'services', label: 'Layanan' },
    { page: 'gallery', label: 'Galeri' },
    { page: 'contact', label: 'Kontak' },
  ];

  const handleLinkClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-brand-bg-dark/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            <FlowerIcon className="h-8 w-8 text-brand-green" />
            <span className={`text-xl font-bold font-serif ${isScrolled || isMenuOpen ? 'text-brand-green' : 'text-white'}`}>Alas Floris</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => handleLinkClick(page)}
                className={`font-semibold transition-colors duration-200 ${
                  currentPage === page 
                  ? 'text-brand-green dark:text-green-300' 
                  : `hover:text-brand-green dark:hover:text-green-300 ${isScrolled || isMenuOpen ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
             <ThemeToggle theme={theme} setTheme={setTheme} />
             <button onClick={onCartClick} className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-green-300">
                <CartIcon className="h-6 w-6" />
                {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {cartItemCount}
                    </span>
                )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-green dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu */}
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                {/* Icon for close */}
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-brand-bg-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(({ page, label }) => (
            <button
              key={page}
              onClick={() => handleLinkClick(page)}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                currentPage === page 
                ? 'bg-brand-green text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;