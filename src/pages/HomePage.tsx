import React from "react";
import { PageId, ServiceId } from "../types";
import { StatsBar } from "../components/StatsBar";
import { useLanguage } from "../context/LanguageContext";

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const { t } = useLanguage();

  const servicesList: {
    id: Exclude<ServiceId, "all">;
    title: string;
    shortDesc: string;
  }[] = [
    {
      id: "rides",
      title: t.services.rides.title,
      shortDesc: t.services.rides.shortDesc,
    },
    {
      id: "shelter",
      title: t.services.shelter.title,
      shortDesc: t.services.shelter.shortDesc,
    },
    {
      id: "pantry",
      title: t.services.pantry.title,
      shortDesc: t.services.pantry.shortDesc,
    },
    {
      id: "senior",
      title: t.services.senior.title,
      shortDesc: t.services.senior.shortDesc,
    },
    {
      id: "translation",
      title: t.services.translation.title,
      shortDesc: t.services.translation.shortDesc,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#FFFCF7] to-[#FAF3E8] border-b border-[rgba(42,33,26,0.14)]">
        <div className="hsc-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              {/* <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#1B6B5C] bg-[rgba(27,107,92,0.14)] px-3 py-1 rounded-[6px] mb-3">
                {t.home.eyebrow}
              </span> */}
              <h1 className="hsc-font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2A211A] mb-4">
                {t.home.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-[#6B5B4D] leading-relaxed mb-6">
                {t.home.heroLead}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate("contact")}
                  className="hsc-btn hsc-btn-teal"
                >
                  {t.home.getHelp}
                </button>
                <button
                  onClick={() => onNavigate("services")}
                  className="hsc-btn hsc-btn-outline"
                >
                  {t.home.seeHow}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[16px] overflow-hidden border border-[rgba(42,33,26,0.14)] shadow-md bg-[#F0E4D3] aspect-4/3 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ background: "#F0E4D3" }}
                >
                  <rect width="500" height="380" fill="#F0E4D3" />
                  <line
                    x1="0"
                    y1="0"
                    x2="500"
                    y2="380"
                    stroke="#C9BEB0"
                    strokeWidth="2"
                  />
                  <line
                    x1="500"
                    y1="0"
                    x2="0"
                    y2="380"
                    stroke="#C9BEB0"
                    strokeWidth="2"
                  />
                  <circle
                    cx="250"
                    cy="190"
                    r="45"
                    fill="#FAF3E8"
                    stroke="#1B6B5C"
                    strokeWidth="2"
                  />
                  <text
                    x="250"
                    y="196"
                    fontFamily="-apple-system, sans-serif"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1B6B5C"
                    textAnchor="middle"
                  >
                    HSC COMMUNITY
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* What We Do Section */}
      <section className="py-12 md:py-16 border-b border-[rgba(42,33,26,0.08)]">
        <div className="hsc-container">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C1502E] block mb-1">
              {t.home.whatWeDoEyebrow}
            </span>
            <h2 className="hsc-font-heading text-2xl md:text-3xl text-[#2A211A] font-bold mb-2">
              {t.home.whatWeDoTitle}
            </h2>
            <p className="text-base text-[#6B5B4D]">
              {t.home.whatWeDoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="hsc-card flex flex-col h-full"
              >
                <div className="h-[15rem] bg-[#FFFCF7] border-b border-[rgba(42,33,26,0.08)] relative overflow-hidden">
                  <img
                    src={`attachments/card_covers/${service.id}.jpg`}
                    alt={service.title}
                    className="h-full w-full object-cover object-[center_35%]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="hsc-font-heading text-xl text-[#2A211A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B5B4D] leading-relaxed mb-4 flex-1">
                    {service.shortDesc}
                  </p>
                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="hsc-btn hsc-btn-teal hsc-btn-sm"
                    >
                      {t.home.learnMore}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-12 md:py-16 bg-[#F0E4D3] border-b border-[rgba(42,33,26,0.08)]">
        <div className="hsc-container">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C1502E] block mb-1">
              {t.home.impactEyebrow}
            </span>
            <h2 className="hsc-font-heading text-2xl md:text-3xl text-[#2A211A] font-bold mb-2">
              {t.home.impactTitle}
            </h2>
            <p className="text-base text-[#6B5B4D]">{t.home.impactSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hsc-card p-6 text-center flex flex-col items-center">
              <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                {t.home.cardGetHelpTitle}
              </h3>
              <p className="text-sm text-[#6B5B4D] mb-6 flex-1">
                {t.home.cardGetHelpText}
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="hsc-btn hsc-btn-outline"
              >
                {t.home.cardGetHelpBtn}
              </button>
            </div>

            <div className="hsc-card p-6 text-center flex flex-col items-center">
              <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                {t.home.cardVolunteerTitle}
              </h3>
              <p className="text-sm text-[#6B5B4D] mb-6 flex-1">
                {t.home.cardVolunteerText}
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="hsc-btn hsc-btn-teal"
              >
                {t.home.cardVolunteerBtn}
              </button>
            </div>

            <div className="hsc-card p-6 text-center flex flex-col items-center">
              <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                {t.home.cardDonateTitle}
              </h3>
              <p className="text-sm text-[#6B5B4D] mb-6 flex-1">
                {t.home.cardDonateText}
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="hsc-btn hsc-btn-terracotta"
              >
                {t.home.cardDonateBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
