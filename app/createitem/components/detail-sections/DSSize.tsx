import React from "react";

interface DSSizeProps {
  formData: {
    size: {
      sizeUOM: string;
      sizeLength: string;
      sizeWidth: string;
      sizeHeight: string;
    };
  };
}

export const DSSize: React.FC<DSSizeProps> = ({ formData }) => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Size UOM
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.size.sizeUOM || "---"}
        </span>
      </div>
      <div className="flex justify-between h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Size length
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.size.sizeLength || "---"}
        </span>
      </div>
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Size width
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.size.sizeWidth || "---"}
        </span>
      </div>
      <div className="flex justify-between h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Size height
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.size.sizeHeight || "---"}
        </span>
      </div>
    </div>
  );
};
