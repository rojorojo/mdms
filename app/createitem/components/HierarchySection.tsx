"use client";

import React from "react";
import { AutoComplete, type Option } from "./Autocomplete";

const psaOptions = [
  { value: "psa-1", label: "PSA 1" },
  { value: "psa-2", label: "PSA 2" },
];

const categoryOptions = [
  { value: "category-1", label: "Category 1" },
  { value: "category-2", label: "Category 2" },
];

const subCategoryOptions = [
  { value: "sub-category-1", label: "Sub Category 1" },
  { value: "sub-category-2", label: "Sub Category 2" },
];

const vClassOptions = [
  { value: "v-class-1", label: "V Class 1" },
  { value: "v-class-2", label: "V Class 2" },
];

export const HierarchySection: React.FC = () => {
  const [psa, setPsa] = React.useState<Option | null>(null);
  const [category, setCategory] = React.useState<Option | null>(null);
  const [subCategory, setSubCategory] = React.useState<Option | null>(null);
  const [vClass, setVClass] = React.useState<Option | null>(null);

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-2xl font-medium text-black mb-6">Hierarchy</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="psa" className="text-sm font-medium text-[#09090B]">
            PSA <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={psaOptions}
            placeholder="Choose an item"
            value={psa || undefined}
            emptyMessage="No results."
            onValueChange={setPsa}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-[#09090B]"
          >
            Category <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={categoryOptions}
            placeholder="Choose an item"
            value={category || undefined}
            emptyMessage="No results."
            onValueChange={setCategory}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="sub-category"
            className="text-sm font-medium text-[#09090B]"
          >
            Sub category <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={subCategoryOptions}
            placeholder="Choose an item"
            value={subCategory || undefined}
            emptyMessage="No results."
            onValueChange={setSubCategory}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="v-class"
            className="text-sm font-medium text-[#09090B]"
          >
            V Class <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={vClassOptions}
            placeholder="Choose an item"
            value={vClass || undefined}
            emptyMessage="No results."
            onValueChange={setVClass}
          />
        </div>
      </div>
    </div>
  );
};
