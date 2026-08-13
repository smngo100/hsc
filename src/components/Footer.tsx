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
    <footer className="bg-[#FFFCF7] border-t border-[rgba(42,33,26,0.14)] mt-auto">
      {/* Footer Top Note */}
      {/* <div className="bg-[#F0E4D3] py-3 border-b border-[rgba(42,33,26,0.08)] text-sm text-[#6B5B4D] text-center">
        <div className="hsc-container">{t.footer.topNote}</div>
      </div> */}

      {/* Main Footer Links & Info */}
      <div className="py-10 md:py-12">
        <div className="hsc-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand column */}
            <div>
              {/* <h3 className="hsc-font-heading text-lg font-bold text-[#2A211A] mb-2">
                {t.footer.brandTitle}
              </h3> */}
              <img
                src="attachments/hsc_logo.png"
                alt={t.brand.title}
                className="h-[10rem] w-[auto] object-contain mb-2"
              />
              {/* <p className="text-sm text-[#6B5B4D] leading-relaxed">
                {t.footer.brandDesc}
              </p> */}
            </div>

            {/* Quick Links */}
            <div>
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
            </div>

            {/* Action Buttons */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-4">
                {t.footer.getInvolved}
              </h4>
              <div className="flex flex-col gap-2 max-w-[200px]">
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

      {/* Copyright */}
      <div className="border-t border-[rgba(42,33,26,0.08)] py-4 text-xs text-[#9C8C7D]">
        <div className="hsc-container flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.locationNote}</span>
        </div>
      </div>
    </footer>
  );
};
