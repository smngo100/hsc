import React, { useState } from 'react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#FFFCF7] border-b border-[rgba(42,33,26,0.14)] sticky top-0 z-50 shadow-xs">
      <div className="hsc-container flex items-center justify-between h-[72px] md:h-[72px] relative">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 font-serif font-bold text-base text-[#2A211A] tracking-wide"
        >
          <div className="w-[38px] h-[38px] bg-[#F0E4D3] border border-[rgba(42,33,26,0.24)] rounded-[6px] flex items-center justify-center text-[11px] font-extrabold text-[#1B6B5C] relative">
            HSC
          </div>
          <span className="text-xs sm:text-sm md:text-base font-bold text-[#2A211A]">
            HISPANICS SERVICE CENTER
          </span>
        </a>

        {/* Responsive Navigation Menu */}
        <nav className="flex items-center">
          <button
            className="lg:hidden flex flex-col justify-between w-7 h-5 p-0 bg-transparent border-none cursor-pointer z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-full h-[2px] bg-[#2A211A] rounded-full transition-all duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-[#2A211A] rounded-full transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-[#2A211A] rounded-full transition-all duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`}
            ></span>
          </button>

          {/* Desktop & Mobile Dropdown */}
          <ul
            className={`flex items-center gap-6 ${
              isMobileMenuOpen
                ? 'absolute top-[72px] left-0 right-0 bg-[#FFFCF7] border-b border-[rgba(42,33,26,0.14)] flex-col items-stretch p-4 shadow-md z-40 max-h-[360px]'
                : 'hidden lg:flex'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm font-semibold px-3 py-2 rounded-[6px] transition-colors cursor-pointer w-full text-left lg:w-auto ${
                      isActive
                        ? 'text-[#1B6B5C] bg-[rgba(27,107,92,0.14)]'
                        : 'text-[#6B5B4D] hover:text-[#1B6B5C] hover:bg-[rgba(27,107,92,0.14)]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: EN Flag & Donate CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className="hidden sm:flex items-center gap-1 text.xs font-bold text-[#6B5B4D] bg-[#F0E4D3] px-2 py-1 rounded-[6px] border border-[rgba(42,33,26,0.08)]"
            title="English / Español"
          >
            <svg className="w-[18px] h-[12px] rounded-[1px]" viewBox="0 0 640 480" aria-label="US Flag">
              <path fill="#bd3d44" d="M0 0h640v480H0z" />
              <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129h640M0 203h640M0 277h640M0 351h640M0 424.5h640" />
              <path fill="#192f5d" d="M0 0h285v258.5H0z" />
            </svg>
            <span className="text-xs">EN</span>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="hsc-btn hsc-btn-terracotta hsc-btn-sm"
          >
            DONATE
          </button>
        </div>
      </div>
    </header>
  );
};
