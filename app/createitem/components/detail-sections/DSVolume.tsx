import React from "react";

interface DSVolumeProps {
  formData: {
    volume: {
      volumeUOM: string;
      totalVolume: string;
      netVolume: string;
    };
  };
}

export const DSVolume: React.FC<DSVolumeProps> = ({ formData }) => {
  return (
    <div className="flex flex-col px-4 pb-7">
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Volume UOM
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.volume.volumeUOM || "---"}
        </span>
      </div>
      <div className="flex justify-between h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Total volume
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.volume.totalVolume || "---"}
        </span>
      </div>
      <div className="flex justify-between bg-gray-200 h-11 items-center px-4">
        <span className="text-sm font-semibold text-black truncate">
          Net wolume
        </span>
        <span className="text-sm text-neutral-800 break-words">
          {formData.volume.netVolume || "---"}
        </span>
      </div>
    </div>
  );
};
