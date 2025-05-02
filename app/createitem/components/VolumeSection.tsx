"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";

const volumeOptions = [
  { value: "liters", label: "Liters" },
  { value: "milliliters", label: "Milliliters" },
  { value: "gallons", label: "Gallons" },
  { value: "cubic-meters", label: "Cubic Meters" },
];

export const VolumeSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [totalVolume, setTotalVolume] = useState<string>("");
  const [netVolume, setNetVolume] = useState<string>("");

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-2xl font-medium text-black mb-6">Volume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="volume-uom"
            className="text-sm font-medium text-[#09090B]"
          >
            Volume UOM
          </label>
          <AutoComplete
            options={volumeOptions}
            placeholder="Choose an item"
            value={selectedOption || undefined}
            emptyMessage="No results."
            onValueChange={setSelectedOption}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="total-volume"
            className="text-sm font-medium text-[#09090B]"
          >
            Total volume
          </label>
          <Input
            id="total-volume"
            type="text"
            placeholder="Enter text"
            value={totalVolume}
            onChange={(e) => setTotalVolume(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="net-volume"
            className="text-sm font-medium text-[#09090B]"
          >
            Net volume
          </label>
          <Input
            id="net-volume"
            type="text"
            placeholder="Enter text"
            value={netVolume}
            onChange={(e) => setNetVolume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
