import React from "react";
import { KeyboardKey } from "@/app/createitem/components/KeyboardKey";

export const ShortcutsList: React.FC = () => {
  return (
    <div className="flex flex-col w-[460px] gap-2">
      <div className="flex items-center justify-between border-b border-neutral-300/30 py-2">
        <span className="text-sm font-medium text-[#09090B]">
          Switch to Details
        </span>
        <span className="flex gap-2">
          <KeyboardKey keyName="Alt/Option" />
          <KeyboardKey keyName="1" />
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-300/30 py-2">
        <span className="text-sm font-medium text-[#09090B]">
          Switch to Values
        </span>
        <span className="flex gap-2">
          <KeyboardKey keyName="Alt/Option" />
          <KeyboardKey keyName="2" />
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-300/30 py-2">
        <span className="text-sm font-medium text-[#09090B]">
          Switch to Tags
        </span>
        <span className="flex gap-2">
          <KeyboardKey keyName="Alt/Option" />
          <KeyboardKey keyName="3" />
        </span>
      </div>
    </div>
  );
};
