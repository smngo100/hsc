import React, { useState } from "react";
import { GalleryCategory } from "../types";
import { GALLERY_ITEMS } from "../data/galleryData";
import { useLanguage } from "../context/LanguageContext";

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const { t } = useLanguage();

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: t.gallery.categories.all },
    { id: "community", label: t.gallery.categories.community },
    { id: "pantry", label: t.gallery.categories.pantry },
    { id: "rides", label: t.gallery.categories.rides },
    { id: "senior", label: t.gallery.categories.senior },
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

        {/* Gallery Grid (fixed aspect ratio layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[10px] overflow-hidden border border-[rgba(42,33,26,0.14)] aspect-4/3 bg-[#F0E4D3]"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Gallery Grid (masonry-style layout) */}
        {/* <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[10px] overflow-hidden border border-[rgba(42,33,26,0.14)] bg-[#F0E4D3] mb-6 break-inside-avoid"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
