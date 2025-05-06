"use client";

import React from "react";
import { AutoComplete, type Option } from "./Autocomplete";

const psaOptions = [
  { value: "psa-1", label: "PSA 1" },
  { value: "psa-2", label: "PSA 2" },
  { value: "psa-3", label: "PSA 3" },
  { value: "psa-4", label: "PSA 4" },
  { value: "psa-5", label: "PSA 5" },
  { value: "psa-6", label: "PSA 6" },
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

interface HierarchySectionProps {
  value?: {
    psa: string;
    category: string;
    subCategory: string;
    vClass: string;
  };
  onChange?: (value: {
    psa?: string;
    category?: string;
    subCategory?: string;
    vClass?: string;
  }) => void;
}

export const HierarchySection: React.FC<HierarchySectionProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">Hierarchy</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="psa" className="text-sm font-medium text-[#09090B]">
            PSA <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={psaOptions}
            placeholder="Choose an item"
            value={psaOptions.find((option) => option.value === value?.psa)}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, psa: newValue.value })
            }
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
            value={categoryOptions.find(
              (option) => option.value === value?.category
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, category: newValue.value })
            }
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
            value={subCategoryOptions.find(
              (option) => option.value === value?.subCategory
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, subCategory: newValue.value })
            }
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
            value={vClassOptions.find(
              (option) => option.value === value?.vClass
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, vClass: newValue.value })
            }
          />
        </div>
      </div>
    </div>
  );
};
