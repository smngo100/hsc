import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, title, subtitle, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(42,33,26,0.8)] flex items-center justify-center p-4 z-50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFCF7] rounded-[16px] max-w-[700px] w-full overflow-hidden shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-[#F0E4D3] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[#2A211A] hover:bg-[#FAF3E8] cursor-pointer"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div className="h-[300px] bg-[#F0E4D3] flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none">
            <rect width="500" height="300" fill="#F0E4D3" />
            <line x1="0" y1="0" x2="500" y2="300" stroke="#C9BEB0" strokeWidth="2" />
            <line x1="500" y1="0" x2="0" y2="300" stroke="#C9BEB0" strokeWidth="2" />
            <circle cx="250" cy="150" r="45" fill="#FAF3E8" stroke="#1B6B5C" strokeWidth="2" />
            <text
              x="250"
              y="155"
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
        <div className="p-4">
          <h3 className="hsc-font-heading text-lg text-[#2A211A] font-bold mb-1">
            {title}
          </h3>
          <p className="text-sm text-[#6B5B4D]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
