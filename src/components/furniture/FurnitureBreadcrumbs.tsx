import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface FurnitureBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const FurnitureBreadcrumbs: React.FC<FurnitureBreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 sm:py-4">
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] text-[#716A62]">
        <li>
          <button
            type="button"
            onClick={items[0]?.onClick}
            className="inline-flex items-center gap-1 hover:text-[#18181B] transition-colors cursor-pointer"
            title="Return to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          if (index === 0) return null; // Home already rendered
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li className="text-[#C4BCB2] select-none">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                {isLast || !item.onClick ? (
                  <span
                    className="font-medium text-[#18181B] truncate max-w-[200px] sm:max-w-none inline-block"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="hover:text-[#18181B] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
