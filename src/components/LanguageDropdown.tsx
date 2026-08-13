import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

interface LanguageOption {
  code: Language;
  name: string;
  flag: React.ReactNode;
}

const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    flag: (
      <svg
        className="w-5 h-3.5 rounded-[2px] border border-[rgba(0,0,0,0.12)] shrink-0 object-cover"
        viewBox="0 0 640 480"
        aria-hidden="true"
      >
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.5h640M0 129h640M0 203h640M0 277h640M0 351h640M0 424.5h640"
        />
        <path fill="#192f5d" d="M0 0h285v258.5H0z" />
      </svg>
    ),
  },
  {
    code: 'es',
    name: 'Español',
    flag: (
      <svg
        className="w-5 h-3.5 rounded-[2px] border border-[rgba(0,0,0,0.12)] shrink-0 object-cover"
        viewBox="0 0 640 480"
        aria-hidden="true"
      >
        <path fill="#c60b1e" d="M0 0h640v480H0z" />
        <path fill="#ffc400" d="M0 120h640v240H0z" />
      </svg>
    ),
  },
];

export const LanguageDropdown: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-semibold text-[#2A211A] bg-white hover:bg-[#FAF3E8] border border-[rgba(42,33,26,0.18)] rounded-2xl shadow-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1B6B5C]"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        {currentLang.flag}
        <span className="text-xs font-semibold text-[#2A211A]">{currentLang.name}</span>
        <svg
          className={`w-3.5 h-3.5 text-[#6B5B4D] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-[rgba(42,33,26,0.14)] rounded-2xl shadow-lg z-50 py-1.5 overflow-hidden divide-y divide-[rgba(42,33,26,0.06)] animate-in fade-in duration-150">
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer text-left ${
                  isSelected
                    ? 'bg-[rgba(27,107,92,0.1)] text-[#1B6B5C] font-bold'
                    : 'text-[#2A211A] hover:bg-[#FAF3E8]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {lang.flag}
                  <span>{lang.name}</span>
                </div>
                {isSelected && (
                  <svg
                    className="w-3.5 h-3.5 text-[#1B6B5C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
