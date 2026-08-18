import React from "react";
import { ServiceId } from "../types";
import { RIDE_RATES, TRANSLATION_FEES } from "../data/contentData";
import { useLanguage } from "../context/LanguageContext";

interface ServicesPageProps {
  activeService: ServiceId;
  onSelectService: (id: ServiceId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  activeService,
  onSelectService,
}) => {
  const { t } = useLanguage();

  const tabs: { id: ServiceId; label: string }[] = [
    { id: "all", label: t.services.tabs.all },
    { id: "rides", label: t.services.tabs.rides },
    { id: "shelter", label: t.services.tabs.shelter },
    { id: "pantry", label: t.services.tabs.pantry },
    { id: "senior", label: t.services.tabs.senior },
    { id: "translation", label: t.services.tabs.translation },
  ];

  const servicesOverviewList: {
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

  const translatedRideRates = [
    { amount: "$15", label: t.services.rides.rates.longDistance },
    { amount: "$10", label: t.services.rides.rates.discounted },
    { amount: "$20", label: t.services.rides.rates.nonRes },
    { amount: "$8", label: t.services.rides.rates.local },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            {t.services.eyebrow}
          </span>
          <h1 className="hsc-font-heading text-3xl font-bold text-[#2A211A] mb-3">
            {t.services.title}
          </h1>
          <p className="text-base text-[#6B5B4D] max-w-3xl leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Subnav Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 border-b border-[rgba(42,33,26,0.14)]">
          {tabs.map((tab) => {
            const isActive = activeService === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectService(tab.id)}
                className={`px-4 py-2 text-sm rounded-[6px] transition-colors whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-[#1B6B5C] text-white border-[#1B6B5C]"
                    : "bg-[#F0E4D3] text-[#6B5B4D] border-[rgba(42,33,26,0.08)] hover:bg-[#1B6B5C] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sub-View: All Services Overview */}
        {/* {activeService === "all" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesOverviewList.map((service) => (
              <div
                key={service.id}
                className="hsc-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B5B4D] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="hsc-btn hsc-btn-teal hsc-btn-sm self-start"
                >
                  {t.services.viewDetails}
                </button>
              </div>
            ))}
          </div>
        )} */}

        {/* Sub-View: All Services Overview */}
        {activeService === "all" && (
          <div className="flex flex-col gap-6">
            {/* Featured: Rides — full-width row */}
            {(() => {
              const ridesService = servicesOverviewList.find(
                (s) => s.id === "rides",
              );
              if (!ridesService) return null;
              return (
                <div className="hsc-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="hsc-font-heading text-2xl font-bold text-[#2A211A] mb-2">
                      {ridesService.title}
                    </h3>
                    <p className="text-base text-[#6B5B4D] leading-relaxed max-w-3xl">
                      {ridesService.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectService("rides")}
                    className="hsc-btn hsc-btn-teal self-start md:self-auto whitespace-nowrap"
                  >
                    {t.services.viewDetails}
                  </button>
                </div>
              );
            })()}

            {/* Remaining services — two-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesOverviewList
                .filter((service) => service.id !== "rides")
                .map((service) => (
                  <div
                    key={service.id}
                    className="hsc-card p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-[#6B5B4D] leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="hsc-btn hsc-btn-teal hsc-btn-sm self-start"
                    >
                      {t.services.viewDetails}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Sub-View: Imlay City Area Rides */}
        {activeService === "rides" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                {t.services.rides.title}
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                {t.services.rides.intro}
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-6">
              {t.services.rides.body}
            </p>
            <div className="font-semibold text-center mb-2">
              {t.services.rides.hoursLabel}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] text-center text-[#2A211A] flex flex-col">
                <p className="font-medium mb-2">{t.services.rides.daysOpen}</p>
                <p>{t.services.rides.hoursValue}</p>
              </div>

              <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] text-center text-[#2A211A] flex flex-col">
                <p className="font-medium mb-2">
                  {t.services.rides.daysClosed}
                </p>
                <p>{t.services.rides.hoursClosedValue}</p>
              </div>
            </div>

            {/* <h3 className="hsc-font-heading text-lg font-bold text-[#2A211A] mb-4">
              {t.services.rides.ratesHeader}
            </h3> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {translatedRideRates.map((rate, i) => (
                <div
                  key={i}
                  className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[10px] p-4 text-center"
                >
                  <div className="hsc-font-heading text-2xl font-bold text-[#C1502E] mb-1">
                    {rate.amount}
                  </div>
                  <div className="text-xs font-bold uppercase text-[#6B5B4D]">
                    {rate.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9C8C7D] text-center">
              {t.services.rides.callNote}
            </p>
          </div>
        )}

        {/* Sub-View: Family Shelter */}
        {activeService === "shelter" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                {t.services.shelter.title}
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                {t.services.shelter.intro}
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-6">
              {t.services.shelter.body}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B5B4D] text-sm mb-8">
              {t.services.shelter.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="bg-[rgba(193,80,46,0.14)] p-4 rounded-[10px] border border-[rgba(193,80,46,0.3)] text-[#C1502E] text-center font-bold">
              {t.services.shelter.callNote}
            </div>
          </div>
        )}

        {/* Sub-View: Food Pantry */}
        {activeService === "pantry" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                {t.services.pantry.title}
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                {t.services.pantry.intro}
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-4">
              {t.services.pantry.body1}
            </p>
            <p className="text-base text-[#2A211A] leading-relaxed">
              {t.services.pantry.body2}
            </p>
          </div>
        )}

        {/* Sub-View: Senior Program */}
        {activeService === "senior" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                {t.services.senior.title}
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                {t.services.senior.intro}
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-8">
              {t.services.senior.body}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F0E4D3] p-6 rounded-[10px] border border-[rgba(42,33,26,0.14)]">
                <h4 className="hsc-font-heading text-lg font-bold text-[#1B6B5C] mb-3">
                  {t.services.senior.providedTitle}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#6B5B4D]">
                  {t.services.senior.providedList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F0E4D3] p-6 rounded-[10px] border border-[rgba(42,33,26,0.14)]">
                <h4 className="hsc-font-heading text-lg font-bold text-[#C1502E] mb-3">
                  {t.services.senior.qualificationsTitle}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#6B5B4D]">
                  {t.services.senior.qualificationsList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Sub-View: Translation Services */}
        {activeService === "translation" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                {t.services.translation.title}
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                {t.services.translation.intro}
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-8">
              {t.services.translation.body}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {TRANSLATION_FEES.map((group, idx) => {
                const translatedCategory =
                  t.services.translation.categories[
                    group.category as keyof typeof t.services.translation.categories
                  ] || group.category;

                return (
                  <div className="border border-[rgba(42,33,26,0.14)] rounded-[10px]">
                    <table key={idx} className="hsc-table">
                      <thead>
                        <tr>
                          <th colSpan={2}>{translatedCategory}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.items.map((row, rIdx) => {
                          const translatedItemName =
                            t.services.translation.items[
                              row.item as keyof typeof t.services.translation.items
                            ] || row.item;

                          return (
                            <tr key={rIdx}>
                              <td>{translatedItemName}</td>
                              <td style={{ textAlign: "right" }}>
                                <strong>{row.fee}</strong>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-[#9C8C7D] text-center mt-4">
              {t.services.translation.callNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
