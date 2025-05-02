"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";

const alcoholUOMOptions = [
  { value: "liters", label: "Liters" },
  { value: "milliliters", label: "Milliliters" },
  { value: "gallons", label: "Gallons" },
  { value: "ounces", label: "Ounces" },
];

const alcoholLicenseOptions = [
  { value: "type-a", label: "Type A" },
  { value: "type-b", label: "Type B" },
  { value: "type-c", label: "Type C" },
];

export const AlcoholSection: React.FC = () => {
  const [alcoholUOM, setAlcoholUOM] = useState<Option | null>(null);
  const [alcoholLicense, setAlcoholLicense] = useState<Option | null>(null);
  const [value, setValue] = useState<string>("");

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-2xl font-medium text-black mb-6">Alcohol</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="alcohol-uom"
            className="text-sm font-medium text-[#09090B]"
          >
            Alcohol UOM
          </label>
          <AutoComplete
            options={alcoholUOMOptions}
            placeholder="Choose an item"
            value={alcoholUOM || undefined}
            emptyMessage="No results."
            onValueChange={setAlcoholUOM}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="alcohol-license"
            className="text-sm font-medium text-[#09090B]"
          >
            Alcohol license type
          </label>
          <AutoComplete
            options={alcoholLicenseOptions}
            placeholder="Choose an item"
            value={alcoholLicense || undefined}
            emptyMessage="No results."
            onValueChange={setAlcoholLicense}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="value" className="text-sm font-medium text-[#09090B]">
            Value
          </label>
          <Input
            id="value"
            type="text"
            placeholder="Enter text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
