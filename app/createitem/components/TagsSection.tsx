"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";

const tagTypeOptions = [
  { value: "platform", label: "Platform" },
  { value: "nationality", label: "Nationality" },
  { value: "age", label: "Age" },
  { value: "gender", label: "Gender" },
  { value: "location", label: "Location" },
  { value: "store services", label: "Store Services" },
];

const tagOptions = [
  { value: "10-20", label: "10-20" },
  { value: "20-35", label: "20-35" },
  { value: "35-50", label: "35-50" },
  { value: "50-65", label: "50-65" },
];

export const TagsSection: React.FC = () => {
  const [tagType, setTagType] = useState<Option | null>(null);
  const [tag, setTag] = useState<Option | null>(null);

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-2xl font-medium text-black mb-6">Tags</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tag-type"
            className="text-sm font-medium text-[#09090B]"
          >
            Tag type
          </label>
          <AutoComplete
            options={tagTypeOptions}
            placeholder="Choose an item"
            value={tagType || undefined}
            emptyMessage="No results."
            onValueChange={setTagType}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tag" className="text-sm font-medium text-[#09090B]">
            Tag
          </label>
          <AutoComplete
            options={tagOptions}
            placeholder="Choose an item"
            value={tag || undefined}
            emptyMessage="No results."
            onValueChange={setTag}
          />
        </div>

        {/* Columns 3 and 4 are intentionally left empty */}
      </div>
    </div>
  );
};
