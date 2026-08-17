import React, { useState } from "react";
import { PageId } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { LanguageDropdown } from "./LanguageDropdown";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavClick = (page: PageId) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "gallery", label: t.nav.gallery },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="bg-surface3 border-b border-[rgba(42,33,26,0.14)] sticky top-0 z-50 shadow-xs">
      <div className="hsc-container flex items-center justify-between h-[6rem] relative">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="flex items-center gap-3 tracking-wide h-full py-3"
        >
          <img
            src="/attachments/hsc_logo.png"
            alt={t.brand.title}
            className="h-full w-auto object-contain"
          />
          {/* <span className="text-xs sm:text-sm md:text-base font-bold text-[#2A211A]">
            {t.brand.title}
          </span> */}
        </a>

        {/* Responsive Navigation Menu */}
        <nav className="flex items-center">
          <button
            className="lg:hidden flex flex-col justify-between w-7 h-5 p-0 bg-transparent border-none cursor-pointer z-50 mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-full h-[2px] bg-[#2A211A] rounded-full transition-all duration-200 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-[#2A211A] rounded-full transition-all duration-200 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-[#2A211A] rounded-full transition-all duration-200 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            ></span>
          </button>

          {/* Desktop & Mobile Dropdown */}
          <ul
            className={`flex items-center gap-6 ${
              isMobileMenuOpen
                ? "absolute top-[72px] left-0 right-0 bg-surface3 border-b border-[rgba(42,33,26,0.14)] flex-col items-stretch p-4 shadow-md z-40 max-h-[360px]"
                : "hidden lg:flex"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm px-3 py-2 rounded-[6px] transition-colors cursor-pointer w-full text-left lg:w-auto ${
                      isActive
                        ? "text-[#1B6B5C] bg-[rgba(27,107,92,0.14)]"
                        : "text-[#6B5B4D] hover:text-[#1B6B5C] hover:bg-[rgba(27,107,92,0.14)]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Language Selector & Donate CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageDropdown />

          <button
            onClick={() => onNavigate("contact")}
            className="hsc-btn hsc-btn-terracotta hsc-btn-sm"
          >
            {t.nav.donate}
          </button>
        </div>
      </div>
    </header>
  );
};
