import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  alignment = 'center',
  dark = false,
  className = '',
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {label && (
        <div
          className={`text-xs uppercase tracking-[0.25em] font-semibold mb-3 ${
            dark ? 'text-[#C5A880]' : 'text-[#87786B]'
          }`}
        >
          {label}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-[1.15] text-balance ${
          dark ? 'text-[#FAF9F5]' : 'text-[#18181B]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-balance ${
            dark ? 'text-[#A1A1AA]' : 'text-[#5C554E]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
