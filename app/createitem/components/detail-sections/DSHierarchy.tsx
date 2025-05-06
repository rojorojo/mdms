import React from "react";

interface DSHierarchyProps {
  formData: {
    hierarchy: {
      psa: string;
      category: string;
      subCategory: string;
      vClass: string;
    };
  };
}

export const DSHierarchy: React.FC<DSHierarchyProps> = ({ formData }) => {
  return (
    <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-4 border-b border-neutral-500/30">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">PSA</span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.hierarchy.psa || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Category
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.hierarchy.category || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          Sub category
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.hierarchy.subCategory || "---"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-black truncate">
          V class
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.hierarchy.vClass || "---"}
        </span>
      </div>
    </div>
  );
};
