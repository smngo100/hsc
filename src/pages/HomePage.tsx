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
              {/* <div className="relative rounded-[16px] overflow-hidden shadow-md bg-[#F0E4D3] aspect-4/3 flex items-center justify-center">
                <img
                  src={`attachments/community.png`}
                  alt="Community"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div> */}
              <div
                className="aspect-[4/3] bg-[#F0E4D3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('attachments/community.png')`,
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  WebkitMaskComposite: "destination-in",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskComposite: "intersect",
                }}
              />
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
                <div className="h-[15rem] bg-surface3 border-b border-[rgba(42,33,26,0.08)] relative overflow-hidden">
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
      <section className="py-12 md:py-16 bg-surface2 border-b border-[rgba(42,33,26,0.08)]">
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
              <img
                src="attachments/icons/handshake.svg"
                alt="Handshake Icon"
                className="mx-auto mb-3 w-8 h-8 text-[#C1502E]"
              />
              <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                {t.home.cardGetHelpTitle}
              </h3>
              <p className="text-sm text-[#6B5B4D] mb-6 flex-1">
                {t.home.cardGetHelpText}
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="hsc-btn hsc-btn-teal"
              >
                {t.home.cardGetHelpBtn}
              </button>
            </div>

            <div className="hsc-card p-6 text-center flex flex-col items-center">
              <img
                src="attachments/icons/users-three.svg"
                alt="Volunteer Icon"
                className="mx-auto mb-3 w-8 h-8 text-[#C1502E]"
              />
              <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                {t.home.cardVolunteerTitle}
              </h3>
              <p className="text-sm text-[#6B5B4D] mb-6 flex-1">
                {t.home.cardVolunteerText}
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="hsc-btn hsc-btn-outline"
              >
                {t.home.cardVolunteerBtn}
              </button>
            </div>

            <div className="hsc-card p-6 text-center flex flex-col items-center">
              <img
                src="attachments/icons/hand-heart.svg"
                alt="Donate Icon"
                className="mx-auto mb-3 w-8 h-8 text-[#C1502E]"
              />
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

      {/* Sponsors & Partners Section */}
      <section className="py-12 md:py-16 bg-surface3 border-b border-[rgba(42,33,26,0.08)]">
        <div className="hsc-container">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
              {t.home.sponsorsEyebrow}
            </span>
            <h2 className="hsc-font-heading text-2xl md:text-3xl text-[#2A211A] font-bold mb-2">
              {t.home.sponsorsTitle}
            </h2>
            <p className="text-base text-[#6B5B4D]">
              {t.home.sponsorsSubtitle}
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="flex flex-nowrap justify-center overflow-x-auto sm:overflow-x-visible">
            <div className="flex flex-nowrap items-center justify-start gap-12">
              <img
                src={`attachments/sponsors/easterseals.png`}
                alt="Easterseals"
                className="h-[5rem] w-auto object-contain shrink-0"
              />
              <img
                src={`attachments/sponsors/fccf.png`}
                alt="FCCF"
                className="h-[6rem] w-auto object-contain shrink-0"
              />
              <img
                src={`attachments/sponsors/ford.png`}
                alt="Ford"
                className="h-[4rem] w-auto object-contain shrink-0"
              />
              <img
                src={`attachments/sponsors/salvation_army.png`}
                alt="Salvation Army"
                className="h-[5rem] w-auto object-contain shrink-0"
              />
              <img
                src={`attachments/sponsors/vaaa.png`}
                alt="VAAA"
                className="h-[5rem] w-auto object-contain shrink-0"
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <img
              src={`attachments/sponsors/easterseals.png`}
              alt="Easterseals"
              className="h-[8rem] w-full object-contain"
            />
            <img
              src={`attachments/sponsors/fccf.jpg`}
              alt="FCCF"
              className="h-[8rem] w-full object-contain"
            />
            <img
              src={`attachments/sponsors/Ford.png`}
              alt="Ford"
              className="h-[6rem] w-full object-contain"
            />
            <img
              src={`attachments/sponsors/salvation_army.png`}
              alt="Salvation Army"
              className="h-[8rem] w-full object-contain"
            />
            <img
              src={`attachments/sponsors/vaaa.jpg`}
              alt="VAAA"
              className="h-[8rem] w-full object-contain"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};
