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
  value?: string[];
  onChange?: (value: string[]) => void;
}

export const UPCSection: React.FC<UPCSectionProps> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const [source, setSource] = React.useState<Option | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [pills, setPills] = React.useState<string[]>([]);
  const [isLoading, setLoading] = React.useState(false);
  const [isDisabled, setDisbled] = React.useState(false);

  const handleApply = () => {
    if (source && inputValue) {
      const newPill = `${source.value}-${inputValue}`;
      const updatedUpcs = [...(value || []), newPill];
      setPills(updatedUpcs);

      setInputValue("");
      onChange?.(updatedUpcs);
    }
  };

  const handleRemovePill = (pill: string) => {
    const updatedUpcs = (value || []).filter((p) => p !== pill);
    onChange?.(updatedUpcs);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleApply();
    }
  };
  const handleFocus = () => {
    setOpen(true);
  };
  const handleBlur = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">UPC</h2>

      <div className="flex gap-4 mb-4">
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
            onValueChange={(option) => setSource(option)}
            value={source || undefined}
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
          <div className="flex items-center gap-2">
            <Input
              id="upc-value"
              type="text"
              placeholder="Enter text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border border-black bg-white px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              onClick={handleApply}
              disabled={!value || !inputValue}
              className="bg-[#4a4a4a] text-white px-6 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(value || []).map((pill) => (
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
