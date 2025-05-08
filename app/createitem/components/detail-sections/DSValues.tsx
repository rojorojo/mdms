import React from "react";

interface DSValuesProps {
  formData: {
    values: {
      manufacturerCode?: string;
      itemType?: string;
      privateBrand?: string;
      manufacturerCaseQuantity?: string;
      licenseSystemItemId?: string;
      franchiseeSystemName?: string;
      nutritionSystemItemId?: string;
      ipq?: string;
    };
  };
}

export const DSValues: React.FC<DSValuesProps> = ({ formData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-4 px-4 pb-7 border-b border-neutral-500/30">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Manufacturer code
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.manufacturerCode || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Manufacturer case quantity
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.manufacturerCaseQuantity || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          License system item ID
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.licenseSystemItemId || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Item type
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.itemType || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Franchisee system name
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.franchiseeSystemName || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Nutrition system item ID
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.nutritionSystemItemId || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Private brand
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.privateBrand || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">IPQ</span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.values.ipq || "---"}
        </span>
      </div>
    </div>
  );
};
