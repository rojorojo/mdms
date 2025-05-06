import React from "react";

interface KeyboardKeyProps {
  keyName: string;
}

export const KeyboardKey: React.FC<KeyboardKeyProps> = ({ keyName }) => {
  return (
    <span className="inline-flex items-center justify-center px-2 py-1 bg-neutral-200 text-xs font-medium text-neutral-700">
      {keyName}
    </span>
  );
};
