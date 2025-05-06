"use client";

import React from "react";
import { XCircle } from "lucide-react";

interface PillProps {
  value: string;
  onRemove: () => void;
}

export const Pill: React.FC<PillProps> = ({ value, onRemove }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-black  text-black text-sm font-medium rounded-full">
      <span>{value}</span>
      <button
        type="button"
        onClick={onRemove}
        className="text-black hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-black rounded-full"
        aria-label={`Remove ${value}`}
      >
        <XCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
