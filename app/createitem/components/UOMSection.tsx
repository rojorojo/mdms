"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";

const uomOptions = [
  { value: "days", label: "Days" },
  { value: "weeks", label: "Weeks" },
  { value: "months", label: "Months" },
  { value: "years", label: "Years" },
];

export const UOMSection: React.FC = () => {
  const [preShelfLifeUOM, setPreShelfLifeUOM] = useState<Option | null>(null);
  const [preShelfLife, setPreShelfLife] = useState<string>("");
  const [shelfLifeUOM, setShelfLifeUOM] = useState<Option | null>(null);
  const [shelfLife, setShelfLife] = useState<string>("");

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-2xl font-medium text-black mb-6">UOM</h2>

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
            value={preShelfLifeUOM || undefined}
            emptyMessage="No results."
            onValueChange={setPreShelfLifeUOM}
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
            value={preShelfLife}
            onChange={(e) => setPreShelfLife(e.target.value)}
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
            value={shelfLifeUOM || undefined}
            emptyMessage="No results."
            onValueChange={setShelfLifeUOM}
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
            value={shelfLife}
            onChange={(e) => setShelfLife(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
