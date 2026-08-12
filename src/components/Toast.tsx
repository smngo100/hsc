import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-[#2A211A] text-white px-5 py-3 rounded-[10px] text-sm font-semibold shadow-lg z-50 animate-bounce">
      {message}
    </div>
  );
};
