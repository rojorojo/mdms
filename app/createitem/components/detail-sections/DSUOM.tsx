import React from "react";

interface DSUOMProps {
  formData: {
    uom: {
      preShelfLifeUOM: string;
      preShelfLife: string;
      shelfLifeUOM: string;
      shelfLife: string;
    };
  };
}

export const DSUOM: React.FC<DSUOMProps> = ({ formData }) => {
  return (
    <div className="flex flex-col px-4 pb-7 border-b border-neutral-500/30">
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Pre shelf life UOM
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.uom.preShelfLifeUOM || "---"}
        </span>
      </div>
      <div className="flex justify-between h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Pre shelf life
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.uom.preShelfLife || "---"}
        </span>
      </div>
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Shelf life UOM
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.uom.shelfLifeUOM || "---"}
        </span>
      </div>
      <div className="flex justify-between h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Shelf life
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.uom.shelfLife || "---"}
        </span>
      </div>
    </div>
  );
};
