import React from "react";

interface DSAssociationProps {
  formData: {
    association: string[];
  };
}

export const DSAssociation: React.FC<DSAssociationProps> = ({ formData }) => {
  return (
    <div className="flex flex-col px-4 pb-7 border-b border-neutral-500/30">
      <ul>
        {formData.association.map((association, index) => (
          <li key={index}>{association}</li>
        ))}
      </ul>
    </div>
  );
};
