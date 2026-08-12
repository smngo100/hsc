import React from "react";

import { TEAM_MEMBERS } from "../data/contentData";

export const AboutPage: React.FC = () => {
  const hscStaff = TEAM_MEMBERS.filter((m) => m.department === "hsc");
  const ridesStaff = TEAM_MEMBERS.filter((m) => m.department === "rides");

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            Our History & Mission
          </span>
          <h1 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A] leading-snug">
            What Started As A Small Act Of Care In 1972 Continues Today — Rooted
            In Community, Open To Everyone.
          </h1>
        </div>

        {/* Narrative Box */}
        <div className="max-w-3xl mx-auto mb-16 text-[#6B5B4D] leading-relaxed space-y-4">
          <p>
            Founded in 1972 as the Hispanic Speaking Information Center, a group
            of dedicated community members came together to provide language and
            social services to migrant workers and Hispanic families settling in
            Lapeer County. The organization incorporated in 1989 as the Hispanic
            Service Center and expanded its mission in 1999 as a nonprofit —
            expanding its scope to serve ALL residents in Lapeer County,
            regardless of background.
          </p>
          <p>
            In 1997, HSC partnered with Bethany Mennonite Church to open a
            family shelter in Imlay City. What started with 4 beds grew to
            accommodate up to 20 individuals, giving families in crisis a safe,
            dignified place to stay for up to 90 days, while they get back on
            their feet.
          </p>
          <p>
            Today, nearly 50 years later, HSC is a trusted community resource,
            partnering with local agencies to serve anyone facing hardship. In
            2018, HSC launched Imlay City Area Rides to fill a major
            transportation gap in the county. It's a symbol of what happens when
            a community cares for one another — with compassion, perseverance,
            and equity.
          </p>
        </div>

        {/* Leadership & Staff */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            Leadership & Staff
          </span>
          <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
            Our Team
          </h2>
        </div>

        {/* HSC Staff */}
        <h3 className="hsc-font-heading text-center text-xl font-bold text-[#1B6B5C] mb-6">
          Hispanics Service Center Staff
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {hscStaff.map((member) => (
            <div
              key={member.id}
              className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[10px] p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#F0E4D3] mx-auto mb-4 flex items-center justify-center border-2 border-[rgba(27,107,92,0.3)] text-[#1B6B5C] font-bold text-lg">
                {member.initials}
              </div>
              <div className="text-base font-bold text-[#2A211A]">
                {member.name}
              </div>
              <div className="text-xs text-[#6B5B4D]">{member.role}</div>
            </div>
          ))}
        </div>

        {/* Rides Staff */}
        <h3 className="hsc-font-heading text-center text-xl font-bold text-[#C1502E] mb-6">
          Imlay City Area Rides Staff
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {ridesStaff.map((member) => (
            <div
              key={member.id}
              className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[10px] p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#F0E4D3] mx-auto mb-4 flex items-center justify-center border-2 border-[rgba(193,80,46,0.3)] text-[#C1502E] font-bold text-lg">
                {member.initials}
              </div>
              <div className="text-base font-bold text-[#2A211A]">
                {member.name}
              </div>
              <div className="text-xs text-[#6B5B4D]">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
