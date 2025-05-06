import React from "react";

interface DSStartDateProps {
  formData: {
    startDate: string;
    productDescription: string;
    receiptDescription: string;
  };
}

export const DSStartDate: React.FC<DSStartDateProps> = ({ formData }) => {
  return (
    <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Start Date
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.startDate || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Product description
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.productDescription || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Receipt description
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.receiptDescription || "---"}
        </span>
      </div>
    </div>
  );
};
