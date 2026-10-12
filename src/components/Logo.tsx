import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';

  // Heights tailored for the trimmed 894x513 logo ratio (~1.74:1)
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12 md:h-14',
    lg: 'h-14 sm:h-16 md:h-18',
    xl: 'h-18 sm:h-20 md:h-22',
  }[size];

  if (isLight) {
    // Rendered on dark backgrounds (e.g. Footer #18181B)
    // Pure logo with ZERO borders, ZERO background boxes, and a subtle luxury gold sheen
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/logo-transparent.png"
          alt="D'Signer Furniture & Interior"
          referrerPolicy="no-referrer"
          className={`${heightClasses} w-auto object-contain block drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-102`}
        />
      </div>
    );
  }

  // Rendered on light backgrounds (e.g. Header & Contact Section #FAF9F5)
  // Pure logo with ZERO borders, ZERO boxes, crystal clear and uncluttered
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/logo-transparent.png"
        alt="D'Signer Furniture & Interior"
        referrerPolicy="no-referrer"
        className={`${heightClasses} w-auto object-contain block transition-transform duration-300 hover:scale-102`}
      />
    </div>
  );
};
