import React, { useState } from "react";
import { GalleryCategory, GalleryItem } from "../types";
import { GALLERY_ITEMS } from "../data/contentData";
import { useLanguage } from "../context/LanguageContext";

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const { t } = useLanguage();

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: t.gallery.categories.all },
    { id: "community", label: t.gallery.categories.community },
    { id: "pantry", label: t.gallery.categories.pantry },
    { id: "rides", label: t.gallery.categories.rides },
    { id: "shelter", label: t.gallery.categories.shelter },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            {t.gallery.eyebrow}
          </span>
          <h1 className="hsc-font-heading text-3xl font-bold text-[#2A211A] mb-3">
            {t.gallery.title}
          </h1>
          <p className="text-base text-[#6B5B4D]">{t.gallery.subtitle}</p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm rounded-[6px] transition-colors cursor-pointer border ${
                  isActive
                    ? "bg-[#1B6B5C] text-white border-[#1B6B5C]"
                    : "bg-[#F0E4D3] text-[#6B5B4D] border-[rgba(42,33,26,0.08)] hover:bg-[#1B6B5C] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const translatedItemInfo = t.gallery.items[
              item.id as unknown as keyof typeof t.gallery.items
            ] || {
              title: item.title,
              subtitle: item.subtitle,
            };

            const translatedCategoryLabel =
              t.gallery.categories[
                item.category as keyof typeof t.gallery.categories
              ] || item.category;

            const translatedItemObj: GalleryItem = {
              ...item,
              title: translatedItemInfo.title,
              subtitle: translatedItemInfo.subtitle,
            };

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(translatedItemObj)}
                className="group relative rounded-[10px] overflow-hidden border border-[rgba(42,33,26,0.14)] cursor-pointer aspect-4/3 bg-[#F0E4D3]"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 300 225"
                  fill="none"
                  style={{ background: item.bgColor }}
                >
                  <rect width="300" height="225" fill={item.bgColor} />
                  <line
                    x1="0"
                    y1="0"
                    x2="300"
                    y2="225"
                    stroke="#C9BEB0"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="300"
                    y1="0"
                    x2="0"
                    y2="225"
                    stroke="#C9BEB0"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="150"
                    cy="112"
                    r="30"
                    fill="#FAF3E8"
                    stroke="#1B6B5C"
                    strokeWidth="2"
                  />
                  <text
                    x="150"
                    y="116"
                    fontFamily="-apple-system, sans-serif"
                    fontSize="10"
                    fontWeight="700"
                    fill="#1B6B5C"
                    textAnchor="middle"
                  >
                    HSC PHOTO
                  </text>
                </svg>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,33,26,0.85)] via-[rgba(0,0,0,0)] to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="text-sm font-bold">
                    {translatedItemInfo.title}
                  </div>
                  <div className="text-xs text-[#F0E4D3] capitalize">
                    {translatedCategoryLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
