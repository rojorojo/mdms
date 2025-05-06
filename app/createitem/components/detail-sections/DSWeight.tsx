import React from "react";

interface DSWeightProps {
  formData: {
    weight: {
      weightUOM: string;
      totalWeight: string;
      netWeight: string;
    };
  };
}

export const DSWeight: React.FC<DSWeightProps> = ({ formData }) => {
  return (
    <div className="flex flex-col px-4 pb-7 border-b border-neutral-500/30">
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Weight UOM
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.weight.weightUOM || "---"}
        </span>
      </div>
      <div className="flex justify-between h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Total weight
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.weight.totalWeight || "---"}
        </span>
      </div>
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Net weight
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.weight.netWeight || "---"}
        </span>
      </div>
    </div>
  );
};
