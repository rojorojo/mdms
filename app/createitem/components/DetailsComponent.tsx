import React from "react";

type DetailItem = {
  label: string;
  value: string;
};

interface DetailsComponentProps {
  items?: DetailItem[];
  className?: string;
  formData: {
    startDate: string;
    receiptDescription: string;
    productDescription: string;
    hierarchy: {
      psa: string;
      category: string;
      subCategory: string;
      vClass: string;
    };
  };
}

/**
 * Component that displays a summary of item details
 */
export const DetailsComponent: React.FC<DetailsComponentProps> = ({
  items = defaultItems,
  className,
  formData,
}) => {
  return (
    <div
      className={`bg-white border border-neutral-500/30 w-full ${
        className || ""
      }`}
    >
      <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
        <h2 className="text-xl font-normal text-black">Description</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-black truncate">
                {item.label}
              </span>
              <span className="text-sm text-neutral-800 break-words">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Default data to display if no items are provided
const defaultItems: DetailItem[] = [
  { label: "Start date", value: "10/24/2025" },
  { label: "Receipt description", value: "Coke Heffeweisen" },
  { label: "Product description", value: "6 Pk Coke Heff" },
  { label: "PSA", value: "4-COLD DISPENSED BEVS" },
  { label: "V Class", value: "2135-ALL" },

  { label: "Category", value: "69-BUBBLER/JET SPRAY" },

  { label: "Sub category", value: "599-BUBBLER/JET SPRAY COST OF GOOD" },
];
