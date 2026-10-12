import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'call' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  children,
  className = '',
  onClick,
  disabled,
  type = 'button',
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18181B]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-sm gap-1.5 tracking-wider uppercase',
    md: 'text-xs sm:text-sm px-5 py-2.5 rounded-sm gap-2 tracking-wide uppercase font-semibold',
    lg: 'text-sm sm:text-base px-7 py-3.5 rounded-sm gap-2.5 tracking-wide uppercase font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-transparent text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF9F5] border-2 border-[#18181B] shadow-2xs',
    secondary:
      'bg-[#EFEAE2] text-[#18181B] hover:bg-[#E5DED4] border border-[#D9D1C5]',
    outline:
      'bg-transparent text-[#18181B] border border-[#18181B] hover:bg-[#18181B] hover:text-[#FAF9F5]',
    whatsapp:
      'bg-transparent text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF9F5] border border-[#18181B] shadow-2xs',
    call:
      'bg-transparent text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF9F5] border border-[#18181B] shadow-2xs',
    ghost:
      'bg-transparent text-[#18181B] hover:bg-[#ECE5DC] border border-transparent',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
