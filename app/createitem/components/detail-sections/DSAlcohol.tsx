import React from "react";

interface DSAlcoholProps {
  formData: {
    alcohol: {
      alcoholUOM: string;
      licenseType: string;
      aValue: string;
    };
  };
}

export const DSAlcohol: React.FC<DSAlcoholProps> = ({ formData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-4 px-4 pb-7 border-b border-neutral-500/30">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Alcohol UOM
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.alcohol.alcoholUOM || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Alcohol license type
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.alcohol.licenseType || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">Value</span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.alcohol.aValue || "---"}
        </span>
      </div>
    </div>
  );
};
