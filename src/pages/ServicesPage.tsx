import React, { useState, useEffect } from "react";
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

  const distanceConfig = [
    { label: "Local", priceKey: "localPrice", icon: "map-pin.svg" },
    {
      label: "Long Distance",
      priceKey: "longDistancePrice",
      icon: "road-horizon.svg",
    },
  ] as const;

  const rateTypes = ["general", "medical"] as const;
  const airportDestinations = ["detroitMetro", "flintBishop"] as const;
  const scheduledRunKeys = ["kroger", "walmart"] as const;
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            {t.services.eyebrow}
          </span>
          <h1 className="hsc-font-heading text-3xl font-bold text-text1 mb-3">
            {t.services.title}
          </h1>
          <p className="text-base text-text2 max-w-3xl leading-relaxed">
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
                    : "bg-[#F0E4D3] text-text2 border-[rgba(42,33,26,0.08)] hover:bg-[#1B6B5C] hover:text-white"
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
                  <h3 className="hsc-font-heading text-xl font-bold text-text1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text2 leading-relaxed mb-6">
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
                    <h3 className="hsc-font-heading text-2xl font-bold text-text1 mb-2">
                      {ridesService.title}
                    </h3>
                    <p className="text-base text-text2 leading-relaxed max-w-3xl">
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
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesOverviewList
                .filter((service) => service.id !== "rides")
                .map((service) => (
                  <div
                    key={service.id}
                    className="hsc-card p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="hsc-font-heading text-xl font-bold text-text1 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-text2 leading-relaxed mb-6">
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
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesOverviewList
                .filter((service) => service.id !== "rides")
                .map((service) => (
                  <div
                    key={service.id}
                    className="hsc-card p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="hsc-font-heading text-xl font-bold text-text1 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-text2 leading-relaxed mb-6">
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
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-text1">
                {t.services.rides.title}
              </h2>
              <p className="text-sm text-text2 mt-2">
                {t.services.rides.intro}
              </p>
            </div>
            <p className="text-base text-text1 leading-relaxed mb-6">
              {t.services.rides.body}
            </p>
            <div className="font-semibold text-center mb-2">
              {t.services.rides.hoursLabel}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] text-center text-text1 flex flex-col">
                <p className="font-medium mb-2 text-text2">
                  {t.services.rides.daysOpen}
                </p>
                <p>{t.services.rides.hoursValue}</p>
              </div>

              <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] text-center text-text1 flex flex-col">
                <p className="font-medium mb-2 text-text2">
                  {t.services.rides.daysClosed}
                </p>
                <p>{t.services.rides.hoursClosedValue}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] mb-6">
                <h3 className="hsc-font-heading text-lg font-bold text-text1 mb-3">
                  {t.services.rides.rates.general.label}
                </h3>
                <div className="flex flex-col">
                  {distanceConfig.map(({ label, priceKey, icon }) => {
                    const price = t.services.rides.rates.general[priceKey];
                    return (
                      <div
                        key={priceKey}
                        className="p-4 text-center flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={`attachments/icons/${icon}`}
                            alt="${label} Icon"
                            className="w-6 h-6 text-terracotta"
                          />
                          <div className="text-sm font-bold uppercase text-text2">
                            {label}
                          </div>
                        </div>
                        <div className="hsc-font-heading text-2xl font-bold text-terracotta">
                          ${price}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] mb-6">
                <h3 className="hsc-font-heading text-lg font-bold text-text1 mb-3">
                  {t.services.rides.rates.medical.label}
                </h3>
                <div className="flex flex-col">
                  {distanceConfig.map(({ label, priceKey, icon }) => {
                    const price = t.services.rides.rates.medical[priceKey];
                    return (
                      <div
                        key={priceKey}
                        className="p-4 text-center flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={`attachments/icons/${icon}`}
                            alt="${label} Icon"
                            className="w-6 h-6 text-terracotta"
                          />
                          <div className="text-sm font-bold uppercase text-text2">
                            {label}
                          </div>
                        </div>
                        <div className="hsc-font-heading text-2xl font-bold text-terracotta">
                          ${price}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] mb-6">
                <h3 className="hsc-font-heading text-lg font-bold text-text1 mb-3">
                  {t.services.rides.rates.airport.label}
                </h3>
                <div className="flex flex-col">
                  {airportDestinations.map((key) => {
                    const dest =
                      t.services.rides.rates.airport.destinations[key];
                    return (
                      <div
                        key={key}
                        className="p-4 text-center flex justify-between items-center"
                      >
                        <div className="flex items-start gap-2">
                          <img
                            src="attachments/icons/airplane.svg"
                            alt="Airplane Icon"
                            className="w-6 h-6 text-terracotta"
                          />
                          <div className="flex flex-col items-start">
                            <div className="text-sm font-bold uppercase text-text2">
                              {dest.name}
                            </div>
                            {dest.extraPassengerFee && (
                              <div className="text-xs text-[#9C8C7D] mt-1">
                                +${dest.extraPassengerFee}/additional passenger
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="hsc-font-heading text-2xl font-bold text-terracotta">
                          ${dest.price}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] mb-6">
              <h3 className="hsc-font-heading text-lg font-bold text-text1 mb-3">
                {
                  t.services.rides
                    .ratesHeader /* or a dedicated "Scheduled Runs" label if you add one */
                }
              </h3>
              <div className="grid grid-cols-2 gap-4 p-2">
                {scheduledRunKeys.map((key) => {
                  const run = t.services.rides.rates.scheduledRuns[key];
                  return (
                    <div
                      key={key}
                      className="flex flex-col gap-2 rounded-[10px] p-6"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src="attachments/icons/map-pin.svg"
                          alt="Map Pin Icon"
                          className="w-6 h-6 text-terracotta"
                        />
                        <div className="text-sm font-bold uppercase text-text2">
                          {run.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="attachments/icons/car-profile.svg"
                          alt="Car Icon"
                          className="w-6 h-6 text-terracotta"
                        />
                        <div className="hsc-font-heading text-2xl font-bold text-terracotta">
                          ${run.price}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="attachments/icons/calendar-blank.svg"
                          alt="Calendar Icon"
                          className="w-6 h-6 text-terracotta"
                        />
                        <div className="text-sm text-text2 mt-1">
                          {run.dayTime}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <img
                          src="attachments/icons/user.svg"
                          alt="User Icon"
                          className="w-6 h-6 text-terracotta"
                        />
                        <div className="text-sm text-text2 mt-1">
                          {run.info}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Poster Carousel */}
            <div className="mb-6">
              <h3 className="hsc-font-heading text-lg font-bold text-text1 mb-3 text-center">
                {t.services.rides.mapsHeader}
              </h3>
              <div className="hsc-carousel">
                <ul className="hsc-carousel-track">
                  <li>
                    <button
                      type="button"
                      className="block w-full cursor-zoom-in relative"
                      onClick={() =>
                        setLightboxSrc(
                          "attachments/car_service_posters/icarwellnessridesmap_noairports.png",
                        )
                      }
                      aria-label="Enlarge ICAR Wellness rides service area map"
                    >
                      <img
                        src="attachments/car_service_posters/icarwellnessridesmap_noairports.png"
                        alt="ICAR Wellness rides service area map"
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full cursor-zoom-in relative"
                      onClick={() =>
                        setLightboxSrc(
                          "attachments/car_service_posters/airportmaplayout1_updated.png",
                        )
                      }
                      aria-label="Enlarge airport ride layout map"
                    >
                      <img
                        src="attachments/car_service_posters/airportmaplayout1_updated.png"
                        alt="Airport ride layout map"
                      />
                    </button>
                  </li>
                </ul>
              </div>

              {lightboxSrc && (
                <div
                  className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
                  role="dialog"
                  aria-modal="true"
                  onClick={() => setLightboxSrc(null)}
                >
                  <button
                    type="button"
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
                    onClick={() => setLightboxSrc(null)}
                    aria-label="Close"
                  >
                    <img src="attachments/icons/x.svg" className="invert" />
                  </button>
                  <img
                    src={lightboxSrc}
                    alt=""
                    className="max-w-full max-h-full object-contain rounded-[8px]"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>

            <div className="text-sm text-[#9C8C7D] text-center space-y-2">
              <p>{t.services.rides.callNote[0]}</p>
              <p className="flex items-center justify-center gap-2">
                {t.services.rides.callNote[1]}
                <a
                  href="https://www.facebook.com/people/Hispanic-Service-Center/100087471197040/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="attachments/icons/facebook.png"
                    alt="Facebook"
                    className="h-6 w-auto object-contain"
                  />
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Sub-View: Family Shelter */}
        {activeService === "shelter" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-text1">
                {t.services.shelter.title}
              </h2>
              <p className="text-sm text-text2 mt-2">
                {t.services.shelter.intro}
              </p>
            </div>
            <p className="text-base text-text1 leading-relaxed mb-6">
              {t.services.shelter.body}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text2 text-sm mb-8">
              {t.services.shelter.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="bg-[rgba(193,80,46,0.14)] p-4 rounded-[10px] border border-[rgba(193,80,46,0.3)] text-terracotta text-center font-bold">
              {t.services.shelter.callNote}
            </div>
          </div>
        )}

        {/* Sub-View: Food Pantry */}
        {activeService === "pantry" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-text1">
                {t.services.pantry.title}
              </h2>
              <p className="text-sm text-text2 mt-2">
                {t.services.pantry.intro}
              </p>
            </div>
            <p className="text-base text-text1 leading-relaxed mb-4">
              {t.services.pantry.body1}
            </p>
            <p className="text-base text-text1 leading-relaxed">
              {t.services.pantry.body2}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] text-center text-text1 flex flex-col">
                <p className="font-medium mb-2 text-text2">
                  {t.services.pantry.body3}
                </p>
                <p>{t.services.pantry.grabNGoDays}</p>
              </div>

              <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] text-center text-text1 flex flex-col">
                <p className="font-medium mb-2 text-text2">
                  {t.services.pantry.body4}
                </p>
                <p>{t.services.pantry.otherDays}</p>
              </div>
            </div>
          </div>
        )}

        {/* Sub-View: Senior Program */}
        {activeService === "senior" && (
          <div className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-text1">
                {t.services.senior.title}
              </h2>
              <p className="text-sm text-text2 mt-2">
                {t.services.senior.intro}
              </p>
            </div>
            <p className="text-base text-text1 leading-relaxed mb-8">
              {t.services.senior.body}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F0E4D3] p-6 rounded-[10px] border border-[rgba(42,33,26,0.14)]">
                <h4 className="hsc-font-heading text-lg font-bold text-[#1B6B5C] mb-3">
                  {t.services.senior.providedTitle}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-text2">
                  {t.services.senior.providedList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F0E4D3] p-6 rounded-[10px] border border-[rgba(42,33,26,0.14)]">
                <h4 className="hsc-font-heading text-lg font-bold text-terracotta mb-3">
                  {t.services.senior.qualificationsTitle}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-text2">
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
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-text1">
                {t.services.translation.title}
              </h2>
              <p className="text-sm text-text2 mt-2">
                {t.services.translation.intro}
              </p>
            </div>
            <p className="text-base text-text1 leading-relaxed mb-8">
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
