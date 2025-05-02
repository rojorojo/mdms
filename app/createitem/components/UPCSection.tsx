"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

import { Pill } from "./Pill";
import { AutoComplete, type Option } from "./Autocomplete";

const upcOptions = [
  { value: "sourced", label: "Sourced" },
  { value: "in-sourced", label: "In-sourced" },
];

interface UPCSectionProps {
  className?: string;
}

export const UPCSection: React.FC<UPCSectionProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Option | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [pills, setPills] = React.useState<string[]>([]);
  const [isLoading, setLoading] = React.useState(false);
  const [isDisabled, setDisbled] = React.useState(false);

  const handleApply = () => {
    if (value && inputValue) {
      const newPill = `${value.value}-${inputValue}`;
      setPills((prev) => [...prev, newPill]);
      setValue(null);
      setInputValue("");
    }
  };

  const handleRemovePill = (pill: string) => {
    setPills((prev) => prev.filter((p) => p !== pill));
  };

  return (
    <div className={`bg-[#f5f5f5] p-6 w-full ${className}`}>
      <h2 className="text-2xl font-medium text-black mb-6">UPC</h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="upc-type"
            className="text-sm font-medium text-[#09090B]"
          >
            Type
          </label>
          <AutoComplete
            options={upcOptions}
            emptyMessage="No results."
            placeholder="Find something"
            isLoading={isLoading}
            onValueChange={(option) => setValue(option)}
            value={value || undefined}
            disabled={isDisabled}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="upc-value"
            className="text-sm font-medium text-[#09090B]"
          >
            Value
          </label>
          <Input
            id="upc-value"
            type="text"
            placeholder="Enter text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleApply}
            disabled={!value || !inputValue}
            className="bg-[#4a4a4a] text-white px-6 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {pills.map((pill) => (
          <Pill
            key={pill}
            value={pill}
            onRemove={() => handleRemovePill(pill)}
          />
        ))}
      </div>
    </div>
  );
};
