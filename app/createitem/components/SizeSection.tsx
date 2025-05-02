"use client";

import React from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";

interface SizeSectionProps {
  className?: string;
}

const sizeUnits = [
  { value: "none", label: "None" },
  { value: "meter", label: "Mete" },
  { value: "centimeter", label: "Centimeter" },
  { value: "inches", label: "Inches" },
];

export const SizeSection: React.FC<SizeSectionProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isDisabled, setDisbled] = React.useState(false);
  const [value, setValue] = React.useState<Option>();

  return (
    <div className={`bg-[#f5f5f5] p-6 w-full ${className}`}>
      <h2 className="text-2xl font-medium text-black mb-6">Size</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="size-uom"
            className="text-sm font-medium text-[#09090B]"
          >
            Size UOM
          </label>
          <AutoComplete
            options={sizeUnits}
            emptyMessage="No results."
            placeholder="Find something"
            isLoading={isLoading}
            onValueChange={setValue}
            value={value}
            disabled={isDisabled}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="size-length"
            className="text-sm font-medium text-[#09090B]"
          >
            Size length
          </label>
          <Input
            id="size-length"
            type="text"
            placeholder="Enter text"
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="size-width"
            className="text-sm font-medium text-[#09090B]"
          >
            Size width
          </label>
          <Input
            id="size-width"
            type="text"
            placeholder="Enter text"
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="size-height"
            className="text-sm font-medium text-[#09090B]"
          >
            Size height
          </label>
          <Input
            id="size-height"
            type="text"
            placeholder="Enter text"
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};
