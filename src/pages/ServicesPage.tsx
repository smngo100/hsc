import React from 'react';
import { ServiceId } from '../types';
import { RIDE_RATES, TRANSLATION_FEES, SERVICES_DATA } from '../data/contentData';

interface ServicesPageProps {
  activeService: ServiceId;
  onSelectService: (id: ServiceId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  activeService,
  onSelectService,
}) => {
  const tabs: { id: ServiceId; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'rides', label: 'Imlay City Area Rides' },
    { id: 'shelter', label: 'Family Shelter' },
    { id: 'pantry', label: 'Food Pantry' },
    { id: 'senior', label: 'Senior Program' },
    { id: 'translation', label: 'Translation Services' },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            Community Services
          </span>
          <h1 className="hsc-font-heading text-3xl font-bold text-[#2A211A] mb-3">
            Services
          </h1>
          <p className="text-base text-[#6B5B4D] max-w-3xl leading-relaxed">
            The Hispanic Service Center offers a range of no-cost and low-cost programs designed to meet needs in our community — from housing and food security to transportation, senior care, and language support. Every service is open to all Lapeer County residents, regardless of background.
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
                className={`px-4 py-2 text-sm font-bold rounded-[6px] transition-colors whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#1B6B5C] text-white border-[#1B6B5C]'
                    : 'bg-[#F0E4D3] text-[#6B5B4D] border-[rgba(42,33,26,0.08)] hover:bg-[#1B6B5C] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sub-View: All Services Overview */}
        {activeService === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="hsc-card p-6 flex flex-col justify-between">
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
                  View Program Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Sub-View: Imlay City Area Rides */}
        {activeService === 'rides' && (
          <div className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                Imlay City Area Rides
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                In partnership with the Ruth Hughes Community Foundation, HSC offers Imlay City Area Rides — a program that provides rides for residents without reliable personal transportation.
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-6">
              For many, transportation is the invisible barrier between stability and setback. A missed doctor's appointment, a lost job, or work program that slips away can be tragic. This program helps relieve that burden.
            </p>
            <div className="bg-[#F0E4D3] p-4 rounded-[10px] border border-[rgba(42,33,26,0.14)] mb-8 text-center font-bold text-[#2A211A]">
              Operating Hours: 8:00 AM - 5:00 PM (Monday – Friday)
            </div>

            <h3 className="hsc-font-heading text-lg font-bold text-[#2A211A] mb-4">
              Ride Rates Information:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {RIDE_RATES.map((rate, i) => (
                <div key={i} className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[10px] p-4 text-center">
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
              For more information or to schedule a ride, call <strong className="text-[#1B6B5C]">(012) 345-6789</strong>.
            </p>
          </div>
        )}

        {/* Sub-View: Family Shelter */}
        {activeService === 'shelter' && (
          <div className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                Family Shelter
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                Safe, non-violent temporary housing for families in crisis, giving them time and space to stabilize.
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-6">
              The Hispanic Service Center provides temporary emergency shelter for families who need a safe place during periods of hardship. Families may stay for a short duration while working toward permanent housing.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B5B4D] text-sm mb-8">
              <li>Safe, private housing for women and children</li>
              <li>Supportive case management</li>
              <li>Nutritious meals, clothing, and essential supplies</li>
              <li>Assistance with employment, transportation, and housing navigation</li>
            </ul>
            <div className="bg-[rgba(193,80,46,0.14)] p-4 rounded-[10px] border border-[rgba(193,80,46,0.3)] text-[#C1502E] text-center font-bold">
              To check eligibility or to join the waitlist, call (012) 345-6789.
            </div>
          </div>
        )}

        {/* Sub-View: Food Pantry */}
        {activeService === 'pantry' && (
          <div className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                Food Pantry
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                Free, dignified access to nutritious food open weekdays with appointment options for working families.
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-4">
              Our food pantry serves all residents throughout Lapeer County, open Monday through Friday, providing consistent access to nutritious food for individuals and families facing food insecurity.
            </p>
            <p className="text-base text-[#2A211A] leading-relaxed">
              Twice a week, we extend our reach through outdoor grab-and-go tables — making access quick, dignified, and convenient. We gratefully accept non-perishable food donations, produce, and monetary contributions to keep our shelves stocked.
            </p>
          </div>
        )}

        {/* Sub-View: Senior Program */}
        {activeService === 'senior' && (
          <div className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                Senior Program
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                In-home support, transportation, and social enrichment for seniors in our community.
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-8">
              Funded by the Valley Area Agency on Aging, our senior program provides essential services that promote dignity and independence for seniors and caregivers in our community — helping older adults remain safe, engaged, and supported in their own homes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F0E4D3] p-6 rounded-[10px] border border-[rgba(42,33,26,0.14)]">
                <h4 className="hsc-font-heading text-lg font-bold text-[#1B6B5C] mb-3">
                  Services Provided
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#6B5B4D]">
                  <li>In-home visits</li>
                  <li>Transportation for essential errands</li>
                  <li>Twice-weekly social and enrichment activities</li>
                  <li>Needs or help with light housekeeping or tasks</li>
                </ul>
              </div>

              <div className="bg-[#F0E4D3] p-6 rounded-[10px] border border-[rgba(42,33,26,0.14)]">
                <h4 className="hsc-font-heading text-lg font-bold text-[#C1502E] mb-3">
                  Qualifications
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#6B5B4D]">
                  <li>60 years or older</li>
                  <li>A caregiver who is 60 years or older</li>
                  <li>Low income resident</li>
                  <li>Handicapped or experiencing isolation</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Sub-View: Translation Services */}
        {activeService === 'translation' && (
          <div className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs">
            <div className="border-b border-[rgba(42,33,26,0.08)] pb-4 mb-6">
              <h2 className="hsc-font-heading text-2xl md:text-3xl font-bold text-[#2A211A]">
                Translation Services
              </h2>
              <p className="text-sm text-[#6B5B4D] mt-2">
                Bilingual support for documents, forms, certificates, and legal paperwork.
              </p>
            </div>
            <p className="text-base text-[#2A211A] leading-relaxed mb-8">
              We provide bilingual translation assistance to help residents navigate everyday paperwork.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {TRANSLATION_FEES.map((group, idx) => (
                <table key={idx} className="hsc-table">
                  <thead>
                    <tr>
                      <th colSpan={2}>{group.category}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td>{row.item}</td>
                        <td>
                          <strong>{row.fee}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
            <p className="text-xs text-[#9C8C7D] text-center mt-4">
              Other document translations are determined by page count. Call (012) 345-6789 for quotes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
