"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const associationOptions = [
  { value: "multipack-setup", label: "Multipack setup" },
  { value: "display-setup", label: "Display setup" },
];

interface AssociationSectionProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

export const AssociationSection: React.FC<AssociationSectionProps> = ({
  value,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleApply = () => {
    if (selectedOption && inputValue) {
      const newAssociation = `${selectedOption.value}-${inputValue}`;
      const updatedAssociations = [...(value || []), newAssociation];
      setSelectedOption(null);
      setInputValue("");
      onChange?.(updatedAssociations);
    }
  };

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">Association</h2>

      <div className="flex items-center gap-4">
        <div className="flex gap-3 items-center">
          <AutoComplete
            options={associationOptions}
            emptyMessage="No results."
            placeholder="Choose..."
            value={selectedOption || undefined}
            onValueChange={(option) => setSelectedOption(option)}
          />

          <Input
            type="text"
            placeholder="Enter text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-white border border-black"
          />

          <Button
            onClick={handleApply}
            disabled={!selectedOption || !inputValue}
            className="bg-black text-white px-6 py-2 text-sm rounded-none font-medium focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
          >
            Apply
          </Button>

          <span className="text-sm text-neutral-500">or</span>

          <Button
            variant="outline"
            className="border border-black bg-white rounded-none px-6 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-black"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
