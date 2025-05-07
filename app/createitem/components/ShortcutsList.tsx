"use client";

import React, { useState, useEffect } from "react";
import { KeyboardKey } from "@/app/createitem/components/KeyboardKey";

export const ShortcutsList: React.FC = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Detect if user is on a Mac
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsMac(userAgent.indexOf("mac") !== -1);
  }, []);

  const modifierKey = isMac ? "Option" : "Alt";

  return (
    <div className="flex flex-col w-[460px]">
      <div className="flex items-center justify-between border-b border-neutral-300/50 pb-4 pt-4">
        <span className="text-sm font-medium text-[#09090B]">
          Switch to Details
        </span>
        <span className="flex gap-2">
          <KeyboardKey keyName={modifierKey} />
          <KeyboardKey keyName="1" />
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-300/50 pb-4 pt-4">
        <span className="text-sm font-medium text-[#09090B]">
          Switch to Values
        </span>
        <span className="flex gap-2">
          <KeyboardKey keyName={modifierKey} />
          <KeyboardKey keyName="2" />
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-300/50 pb-4 pt-4">
        <span className="text-sm font-medium text-[#09090B]">
          Switch to Tags
        </span>
        <span className="flex gap-2">
          <KeyboardKey keyName={modifierKey} />
          <KeyboardKey keyName="3" />
        </span>
      </div>
    </div>
  );
};
