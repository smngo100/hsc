import React from "react";
import { PageId } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const pageLabels: Record<PageId, string> = {
    home: t.nav.home,
    services: t.nav.services,
    gallery: t.nav.gallery,
    about: t.nav.about,
    contact: t.nav.contact,
  };

  return (
    <footer className="bg-surface3 border-t border-[rgba(42,33,26,0.14)] mt-auto">
      {/* Main Footer Links & Info */}
      <div className="pt-6 pb-4">
        <div className="hsc-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Brand column */}
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home");
                }}
                className="flex items-center gap-3 tracking-wide h-full py-3"
              >
                <img
                  src="attachments/logos/hsc_logo_2.png"
                  alt={t.brand.title}
                  className="h-[8rem] w-[auto] object-contain"
                />
              </a>
            </div>

            {/* Info */}
            <div className="flex flex-col text-sm items-center gap-2 text-center text-[#9C8C7D]">
              <a
                href="https://www.facebook.com/people/Hispanic-Service-Center/100087471197040/"
                target="_blank"
              >
                <img
                  src="attachments/icons/facebook.png"
                  className="h-[1.5rem] w-[auto] object-contain mb-1.5"
                />
              </a>
              <div>{t.contact.phoneNumber}</div>
              <div>{t.contact.emailPlaceholder}</div>
              <div className="max-w-[32rem]">{t.contact.locationValue}</div>
            </div>

            {/* Quick Links */}
            {/* <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-4">
                {t.footer.quickLinks}
              </h4>
              <div className="flex flex-col gap-2">
                {(
                  [
                    "home",
                    "services",
                    "gallery",
                    "about",
                    "contact",
                  ] as PageId[]
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => onNavigate(page)}
                    className="text-sm text-[#6B5B4D] hover:text-[#1B6B5C] text-left transition-colors cursor-pointer"
                  >
                    {pageLabels[page]}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex justify-center md:justify-end">
              <div className="w-[200px]">
                {/* <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-4">
                  {t.footer.getInvolved}
                </h4> */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate("contact")}
                    className="hsc-btn hsc-btn-teal hsc-btn-sm"
                  >
                    {t.footer.getHelpBtn}
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="hsc-btn hsc-btn-outline hsc-btn-sm"
                  >
                    {t.footer.joinUsBtn}
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="hsc-btn hsc-btn-terracotta hsc-btn-sm"
                  >
                    {t.footer.donateBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="border-t border-[rgba(42,33,26,0.08)] py-4 text-xs text-[#9C8C7D]"> */}
      <div className="mb-4 text-xs text-[#9C8C7D]">
        <div className="hsc-container flex justify-center">
          <span>{t.footer.copyright}</span>
          {/* <span>{t.footer.locationNote}</span> */}
        </div>
      </div>
    </footer>
  );
};
