"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";
import { on } from "events";

const uomOptions = [
  { value: "days", label: "Days" },
  { value: "weeks", label: "Weeks" },
  { value: "months", label: "Months" },
  { value: "years", label: "Years" },
];

interface UOMSectionProps {
  value?: {
    preShelfLifeUOM?: string;
    preShelfLife?: string;
    shelfLifeUOM?: string;
    shelfLife?: string;
  };
  onChange?: (value: {
    preShelfLifeUOM?: string;
    preShelfLife?: string;
    shelfLifeUOM?: string;
    shelfLife?: string;
  }) => void;
}

export const UOMSection: React.FC<UOMSectionProps> = ({ value, onChange }) => {
  const [preShelfLifeUOM, setPreShelfLifeUOM] = useState<Option | null>(null);
  const [preShelfLife, setPreShelfLife] = useState<string>("");
  const [shelfLifeUOM, setShelfLifeUOM] = useState<Option | null>(null);
  const [shelfLife, setShelfLife] = useState<string>("");

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">UOM</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="pre-shelf-life-uom"
            className="text-sm font-medium text-[#09090B]"
          >
            Pre shelf life UOM
          </label>
          <AutoComplete
            options={uomOptions}
            placeholder="Choose an item"
            value={uomOptions.find(
              (option) => option.value === value?.preShelfLifeUOM
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, preShelfLifeUOM: newValue.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="pre-shelf-life"
            className="text-sm font-medium text-[#09090B]"
          >
            Pre shelf life
          </label>
          <Input
            id="pre-shelf-life"
            type="text"
            placeholder="Enter text"
            value={value?.preShelfLife}
            onChange={(e) =>
              onChange?.({ ...value, preShelfLife: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="shelf-life-uom"
            className="text-sm font-medium text-[#09090B]"
          >
            Shelf life UOM
          </label>
          <AutoComplete
            options={uomOptions}
            placeholder="Choose an item"
            value={uomOptions.find(
              (option) => option.value === value?.shelfLifeUOM
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, shelfLifeUOM: newValue.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="shelf-life"
            className="text-sm font-medium text-[#09090B]"
          >
            Shelf life
          </label>
          <Input
            id="shelf-life"
            type="text"
            placeholder="Enter text"
            value={value?.shelfLife}
            onChange={(e) =>
              onChange?.({ ...value, shelfLife: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};
