import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StatsBar: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '50+', label: t.stats.years },
    { number: '1,200+', label: t.stats.families },
    { number: '15,000+', label: t.stats.meals },
    { number: '3,500+', label: t.stats.residents },
  ];

  return (
    <div className="bg-[#F0E4D3] border-y border-[rgba(42,33,26,0.14)] py-8">
      <div className="hsc-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-2">
              <div className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#1B6B5C] leading-tight mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#6B5B4D]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
