import React from "react";
import { TEAM_MEMBERS } from "../data/contentData";
import { useLanguage } from "../context/LanguageContext";

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const hscStaff = TEAM_MEMBERS.filter((m) => m.department === "hsc");
  const ridesStaff = TEAM_MEMBERS.filter((m) => m.department === "rides");
  const boardStaff = TEAM_MEMBERS.filter((m) => m.department === "board");

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            {t.about.eyebrow}
          </span>
          <h1 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A] leading-snug">
            {t.about.heading}
          </h1>
        </div>

        {/* Narrative Box */}
        <div className="max-w-3xl mx-auto mb-16 text-[#6B5B4D] leading-relaxed space-y-4">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        {/* Leadership & Staff */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            {t.about.staffEyebrow}
          </span>
          <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
            {t.about.staffTitle}
          </h2>
        </div>

        {/* HSC Staff */}
        <h3 className="hsc-font-heading text-center text-xl font-bold mb-6">
          {t.about.hscStaffHeading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {hscStaff.map((member) => {
            const translatedRole =
              t.about.roles[member.role as keyof typeof t.about.roles] ||
              member.role;

            return (
              <div
                key={member.id}
                className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[10px] p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#F0E4D3] mx-auto mb-4 flex items-center justify-center border-2 border-[rgba(27,107,92,0.3)] text-[#1B6B5C] font-bold text-lg">
                  {member.initials}
                </div>
                <div className="text-base">{member.name}</div>
                <div className="text-xs text-[#6B5B4D]">{translatedRole}</div>
              </div>
            );
          })}
        </div>

        {/* Rides Staff */}
        <h3 className="hsc-font-heading text-center text-xl font-bold mb-6">
          {t.about.ridesStaffHeading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-xl mx-auto">
          {ridesStaff.map((member) => {
            const translatedRole =
              t.about.roles[member.role as keyof typeof t.about.roles] ||
              member.role;

            return (
              <div
                key={member.id}
                className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[10px] p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#F0E4D3] mx-auto mb-4 flex items-center justify-center border-2 border-[rgba(27,107,92,0.3)] text-[#1B6B5C] font-bold text-lg">
                  {member.initials}
                </div>
                <div className="text-base text-[#2A211A]">{member.name}</div>
                <div className="text-xs text-[#6B5B4D]">{translatedRole}</div>
              </div>
            );
          })}
        </div>

        {/* Board Staff */}
        <h3 className="hsc-font-heading text-center text-xl font-bold mb-6">
          {t.about.boardStaffHeading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {boardStaff.map((member) => {
            const translatedRole =
              t.about.roles[member.role as keyof typeof t.about.roles] ||
              member.role;

            return (
              <div
                key={member.id}
                className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[10px] p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#F0E4D3] mx-auto mb-4 flex items-center justify-center border-2 border-[rgba(27,107,92,0.3)] text-[#1B6B5C] font-bold text-lg">
                  {member.initials}
                </div>
                <div className="text-base text-[#2A211A]">{member.name}</div>
                <div className="text-xs text-[#6B5B4D]">{translatedRole}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
