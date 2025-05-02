"use client";

import * as React from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";

const weightUnits = [
  { value: "none", label: "None" },
  { value: "kilogram", label: "Kilogram" },
  { value: "gram", label: "Gram" },
  { value: "pound", label: "Pound" },
  { value: "ounce", label: "Ounce" },
];

interface WeightSectionProps {
  className?: string;
}

export const WeightSection: React.FC<WeightSectionProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  //const [value, setValue] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [isDisabled, setDisbled] = React.useState(false);
  const [value, setValue] = React.useState<Option>();

  return (
    <div className={`bg-[#f5f5f5] p-6 w-full ${className}`}>
      <h2 className="text-2xl font-medium text-black mb-6">Weight</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="weight-uom"
            className="text-sm font-medium text-[#09090B]"
          >
            Weight UOM
          </label>
          <AutoComplete
            options={weightUnits}
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
            htmlFor="weight-value"
            className="text-sm font-medium text-[#09090B]"
          >
            Weight value
          </label>
          <Input
            id="weight-value"
            type="text"
            placeholder="Enter text"
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="net-weight"
            className="text-sm font-medium text-[#09090B]"
          >
            Net weight
          </label>
          <Input
            id="net-weight"
            type="text"
            placeholder="Enter text"
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="gross-weight"
            className="text-sm font-medium text-[#09090B]"
          >
            Gross weight
          </label>
          <Input
            id="gross-weight"
            type="text"
            placeholder="Enter text"
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};
