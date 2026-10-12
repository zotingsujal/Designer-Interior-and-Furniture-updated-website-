import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProjectType = 'Custom Furniture',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#18181B]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#FAF9F5] border border-[#D9D1C5] shadow-2xl rounded-xs overflow-hidden my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#5C554E] hover:text-[#18181B] bg-[#EFEAE2] hover:bg-[#E5DED4] rounded-full transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <ContactForm initialProjectType={defaultProjectType} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
