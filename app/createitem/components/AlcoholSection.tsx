"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";
import { on } from "events";

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

interface AlcoholSectionProps {
  value?: {
    alcoholUOM?: string;
    licenseType?: string;
    aValue?: string;
  };
  onChange?: (value: {
    alcoholUOM?: string;
    licenseType?: string;
    aValue?: string;
  }) => void;
}

export const AlcoholSection: React.FC<AlcoholSectionProps> = ({
  value,
  onChange,
}) => {
  const [alcoholUOM, setAlcoholUOM] = useState<Option | null>(null);
  const [alcoholLicense, setAlcoholLicense] = useState<Option | null>(null);
  //const [value, setValue] = useState<string>("");

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">Alcohol</h2>

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
            value={alcoholUOMOptions.find(
              (option) => option.value === alcoholUOM?.value
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, alcoholUOM: newValue.value })
            }
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
            value={alcoholLicenseOptions.find(
              (option) => option.value === value?.licenseType
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, licenseType: newValue.value })
            }
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
            value={value?.aValue}
            onChange={(e) => onChange?.({ ...value, aValue: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
