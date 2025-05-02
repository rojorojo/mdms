"use client";

import React from "react";
import { XCircle } from "lucide-react";

interface PillProps {
  value: string;
  onRemove: () => void;
  className?: string;
}

export const Pill: React.FC<PillProps> = ({ value, onRemove, className }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 text-black text-sm font-medium rounded-full ${className}`}
    >
      <span>{value}</span>
      <button
        type="button"
        onClick={onRemove}
        className="text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-black rounded-full"
        aria-label={`Remove ${value}`}
      >
        <XCircle className="w-4 h-4" />
      </button>
    </div>
  );
};
