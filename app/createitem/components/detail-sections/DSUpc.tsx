import React from "react";

interface DSUPCProps {
  formData: {
    upc: string[];
  };
}

export const DSUPC: React.FC<DSUPCProps> = ({ formData }) => {
  return (
    <div className="flex flex-col px-4 pb-7 border-b border-neutral-500/30">
      <ul>
        {formData.upc.map((upc, index) => (
          <li key={index}>{upc}</li>
        ))}
      </ul>
    </div>
  );
};
