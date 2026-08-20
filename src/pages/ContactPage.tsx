// import React, { useState } from "react";
// import { ContactFormData } from "../types";
// import { useLanguage } from "../context/LanguageContext";

// interface ContactPageProps {
//   onSubmitMessage: (data: ContactFormData) => void;
// }

// export const ContactPage: React.FC<ContactPageProps> = ({
//   onSubmitMessage,
// }) => {
//   const { t } = useLanguage();

//   const [formData, setFormData] = useState<ContactFormData>({
//     fullName: "",
//     email: "",
//     serviceNeeded: "general",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmitMessage(formData);
//     setFormData({
//       fullName: "",
//       email: "",
//       serviceNeeded: "general",
//       message: "",
//     });
//   };

//   return (
//     <div className="py-12 md:py-16">
//       <div className="hsc-container">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-10">
//           <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
//             {t.contact.eyebrow}
//           </span>
//           <h1 className="hsc-font-heading text-3xl font-bold text-[#2A211A] mb-3">
//             {t.contact.title}
//           </h1>
//           <p className="text-base text-[#6B5B4D]">{t.contact.subtitle}</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Contact Information Column */}
//           <div className="space-y-4">
//             <div className="hsc-card hsc-card--static p-5">
//               <div className="text-xs font-bold uppercase text-[#1B6B5C]">
//                 {t.contact.locationLabel}
//               </div>
//               <div className="text-base font-bold text-[#2A211A] mt-1">
//                 {t.contact.locationValue}
//               </div>
//             </div>

//             <div className="hsc-card hsc-card--static p-5">
//               <div className="text-xs font-bold uppercase text-[#1B6B5C]">
//                 {t.contact.poBoxLabel}
//               </div>
//               <div className="text-base font-bold text-[#2A211A] mt-1">
//                 {t.contact.poBoxValue}
//               </div>
//             </div>

//             <div className="hsc-card hsc-card--static p-5">
//               <div className="text-xs font-bold uppercase text-[#1B6B5C]">
//                 {t.contact.emailPhoneLabel}
//               </div>
//               <div className="text-base font-bold text-[#2A211A] mt-1">
//                 email@gmail.com
//               </div>
//               <div className="text-base font-bold text-[#C1502E] mt-0.5">
//                 (012) 345-6789
//               </div>
//             </div>

//             <div className="hsc-card hsc-card--static p-5">
//               <div className="text-xs font-bold uppercase text-[#1B6B5C]">
//                 {t.contact.hoursLabel}
//               </div>
//               <div className="text-base font-bold text-[#2A211A] mt-1">
//                 {t.contact.hoursValue}
//               </div>
//             </div>
//           </div>

//           {/* Interactive Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs"
//           >
//             <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-6">
//               {t.contact.formTitle}
//             </h3>

//             <div className="mb-4">
//               <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
//                 {t.contact.fullNameLabel}
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fullName: e.target.value })
//                 }
//                 placeholder={t.contact.fullNamePlaceholder}
//                 className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
//                 {t.contact.emailLabel}
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 placeholder={t.contact.emailPlaceholder}
//                 className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
//                 {t.contact.serviceNeededLabel}
//               </label>
//               <select
//                 value={formData.serviceNeeded}
//                 onChange={(e) =>
//                   setFormData({ ...formData, serviceNeeded: e.target.value })
//                 }
//                 className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
//               >
//                 <option value="general">
//                   {t.contact.serviceOptions.general}
//                 </option>
//                 <option value="rides">{t.contact.serviceOptions.rides}</option>
//                 <option value="shelter">
//                   {t.contact.serviceOptions.shelter}
//                 </option>
//                 <option value="pantry">
//                   {t.contact.serviceOptions.pantry}
//                 </option>
//                 <option value="senior">
//                   {t.contact.serviceOptions.senior}
//                 </option>
//                 <option value="translation">
//                   {t.contact.serviceOptions.translation}
//                 </option>
//               </select>
//             </div>

//             <div className="mb-6">
//               <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
//                 {t.contact.messageLabel}
//               </label>
//               <textarea
//                 required
//                 rows={4}
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 placeholder={t.contact.messagePlaceholder}
//                 className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all resize-y"
//               />
//             </div>

//             <button type="submit" className="hsc-btn hsc-btn-teal w-full">
//               {t.contact.submitBtn}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { ContactFormData } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface ContactPageProps {
  onSubmitMessage: (data: ContactFormData) => void;
}

const GOOGLE_FORM_BASE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfFTLjmOyxRhHrmKn0x32dBVdAtuHXuOvniJfzIUJ7sC032w";
const GOOGLE_FORM_ACTION_URL = `${GOOGLE_FORM_BASE_URL}/formResponse`;

// Entry IDs from the Google Form
const ENTRY_IDS = {
  fullName: "entry.2005620554",
  email: "entry.1045781291",
  serviceNeeded: "entry.1065046570",
  message: "entry.839337160",
};

// Google Forms requires the EXACT option label text for multiple-choice/dropdown
// questions. Map our internal short values to the labels defined in the form.
const SERVICE_NEEDED_LABELS: Record<string, string> = {
  general: "General Inquiry",
  rides: "Imlay City Area Rides",
  shelter: "Family Shelter",
  pantry: "Food Pantry",
  senior: "Senior Program",
  translation: "Translation Services",
};

export const ContactPage: React.FC<ContactPageProps> = ({
  onSubmitMessage,
}) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    serviceNeeded: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build the payload Google Forms expects (form-urlencoded, keyed by entry IDs)
    const payload = new URLSearchParams();
    payload.append(ENTRY_IDS.fullName, formData.fullName);
    payload.append(ENTRY_IDS.email, formData.email);
    payload.append(
      ENTRY_IDS.serviceNeeded,
      SERVICE_NEEDED_LABELS[formData.serviceNeeded] ?? formData.serviceNeeded,
    );
    payload.append(ENTRY_IDS.message, formData.message);

    try {
      // Google Forms doesn't return CORS headers, so we use no-cors.
      // This means we can't read the response — we just assume success if no network error is thrown.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      // Keep any existing local handling (e.g. admin dashboard, local storage, etc.)
      onSubmitMessage(formData);

      setFormData({
        fullName: "",
        email: "",
        serviceNeeded: "general",
        message: "",
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            {t.contact.eyebrow}
          </span>
          <h1 className="hsc-font-heading text-3xl font-bold text-[#2A211A] mb-3">
            {t.contact.title}
          </h1>
          <p className="text-base text-[#6B5B4D]">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information Column */}
          <div className="space-y-4">
            <div className="hsc-card hsc-card--static p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">
                {t.contact.locationLabel}
              </div>
              <div className="text-base text-[#2A211A] mt-1">
                {t.contact.locationValue}
              </div>
            </div>

            <div className="hsc-card hsc-card--static p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">
                {t.contact.poBoxLabel}
              </div>
              <div className="text-base text-[#2A211A] mt-1">
                {t.contact.poBoxValue}
              </div>
            </div>

            <div className="hsc-card hsc-card--static p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">
                {t.contact.emailPhoneLabel}
              </div>
              <div className="text-base text-[#2A211A] mt-1">
                director@imlayhsc.org
              </div>
              <div className="text-base text-[#C1502E] mt-0.5">
                (810) 724-3665
              </div>
            </div>

            <div className="hsc-card hsc-card--static p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">
                {t.contact.hoursLabel}
              </div>
              <div className="text-base text-[#2A211A] mt-1">
                {t.contact.daysOpen}
              </div>
              <div className="text-base text-[#2A211A] mt-1">
                {t.contact.hoursValue}
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-surface3 border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs"
          >
            <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-6">
              {t.contact.formTitle}
            </h3>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                {t.contact.fullNameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder={t.contact.fullNamePlaceholder}
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                {t.contact.serviceNeededLabel}
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) =>
                  setFormData({ ...formData, serviceNeeded: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
              >
                <option value="general">
                  {t.contact.serviceOptions.general}
                </option>
                <option value="rides">{t.contact.serviceOptions.rides}</option>
                <option value="shelter">
                  {t.contact.serviceOptions.shelter}
                </option>
                <option value="pantry">
                  {t.contact.serviceOptions.pantry}
                </option>
                <option value="senior">
                  {t.contact.serviceOptions.senior}
                </option>
                <option value="translation">
                  {t.contact.serviceOptions.translation}
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                {t.contact.messageLabel}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-bg border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="hsc-btn hsc-btn-teal w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "..." : t.contact.submitBtn}
            </button>

            {showSuccess && (
              <div className="mt-3 text-sm font-medium text-[#1B6B5C] text-center">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
