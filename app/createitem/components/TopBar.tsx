import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Breadcrumb {
  title: string;
  href: string;
}

interface TopBarProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  children?: React.ReactNode;
}

export const TopBar: React.FC<TopBarProps> = ({
  breadcrumbs,
  title,
  children,
}) => {
  return (
    <div className="flex flex-col">
      {/* MDMS Header */}
      <div className="bg-black text-white h-12 flex items-center px-6">
        <h1 className="text-base font-bold">MDMS</h1>
      </div>
      
      {/* Breadcrumb and title area */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <nav
          aria-label="breadcrumb"
          className="flex items-center space-x-2 text-sm text-gray-500"
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.href}>
              <Link href={crumb.href} className="hover:text-gray-700">
                {crumb.title}
              </Link>
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};
