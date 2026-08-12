import React, { useState } from 'react';
import { ContactFormData } from '../types';

interface ContactPageProps {
  onSubmitMessage: (data: ContactFormData) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSubmitMessage }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    serviceNeeded: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitMessage(formData);
    setFormData({
      fullName: '',
      email: '',
      serviceNeeded: 'general',
      message: '',
    });
  };

  return (
    <div className="py-12 md:py-16">
      <div className="hsc-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B6B5C] block mb-1">
            Connect With Us
          </span>
          <h1 className="hsc-font-heading text-3xl font-bold text-[#2A211A] mb-3">
            Get In Touch With Us
          </h1>
          <p className="text-base text-[#6B5B4D]">
            Reach out — we're here to help. Find our location, hours, and contact information below, or send us a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information Column */}
          <div className="space-y-4">
            <div className="hsc-card p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">Location</div>
              <div className="text-base font-bold text-[#2A211A] mt-1">
                123 Main Street, Imlay City, MI 48444
              </div>
            </div>

            <div className="hsc-card p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">PO Box</div>
              <div className="text-base font-bold text-[#2A211A] mt-1">
                PO Box 123, Imlay City, MI 48444
              </div>
            </div>

            <div className="hsc-card p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">Email & Phone</div>
              <div className="text-base font-bold text-[#2A211A] mt-1">
                email@gmail.com
              </div>
              <div className="text-base font-bold text-[#C1502E] mt-0.5">
                (012) 345-6789
              </div>
            </div>

            <div className="hsc-card p-5">
              <div className="text-xs font-bold uppercase text-[#1B6B5C]">Operating Hours</div>
              <div className="text-base font-bold text-[#2A211A] mt-1">
                Monday – Friday: 8:00 AM – 5:00 PM
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFFCF7] border border-[rgba(42,33,26,0.14)] rounded-[16px] p-6 md:p-8 shadow-xs"
          >
            <h3 className="hsc-font-heading text-xl font-bold text-[#2A211A] mb-6">
              Send Us A Message
            </h3>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-[#FAF3E8] border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-[#FAF3E8] border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                Service Needed
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-[#FAF3E8] border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all"
              >
                <option value="general">General Inquiry</option>
                <option value="rides">Imlay City Area Rides</option>
                <option value="shelter">Family Shelter</option>
                <option value="pantry">Food Pantry</option>
                <option value="senior">Senior Program</option>
                <option value="translation">Translation Services</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A211A] mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can our team help you today?"
                className="w-full px-3.5 py-2.5 text-sm text-[#2A211A] bg-[#FAF3E8] border border-[rgba(42,33,26,0.24)] rounded-[6px] outline-none focus:border-[#1B6B5C] focus:ring-2 focus:ring-[rgba(27,107,92,0.14)] transition-all resize-y"
              />
            </div>

            <button type="submit" className="hsc-btn hsc-btn-teal w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
