import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCcw } from "lucide-react";
import React from "react";

interface StartDateSectionProps {
  value?: {
    startDate?: string;
    productDescription?: string;
    receiptDescription?: string;
  };
  onChange?: (value: {
    startDate?: string;
    productDescription?: string;
    receiptDescription?: string;
  }) => void;
}

export const StartDateSection: React.FC<StartDateSectionProps> = ({
  value,
  onChange,
}) => {
  const handleReset = () => {
    onChange?.({
      startDate: "",
      productDescription: "",
      receiptDescription: "",
    });
  };

  return (
    <div className="bg-[#F5F5F5] p-6 w-full relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleReset}
        className="absolute top-4 right-4 h-8 w-8 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200"
        title="Reset fields"
      >
        <RefreshCcw className="h-4 w-4" />
      </Button>
      <h2 className="text-xl font-medium text-black mb-6">
        Start date & description
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Start date - 234px width */}
        <div className="flex flex-col gap-1 w-full">
          <label className="flex items-center gap-1 text-sm font-medium text-[#09090B]">
            Start date <span className="text-[#DC2626]">*</span>
          </label>
          <div className="relative w-full">
            <Input
              type="text"
              value={value?.startDate || ""}
              onChange={(e) =>
                onChange?.({ ...value, startDate: e.target.value })
              }
              placeholder="Enter start date"
              className="w-full px-3 py-2 border border-black bg-white text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Product description - 493px width */}
        <div className="flex flex-col gap-1 w-full">
          <label className="flex items-center gap-1 text-sm font-medium text-[#09090B]">
            Product description <span className="text-[#DC2626]">*</span>
          </label>
          <div className="relative w-full">
            <Input
              type="text"
              value={value?.productDescription}
              onChange={(e) =>
                onChange?.({ ...value, productDescription: e.target.value })
              }
              placeholder="Enter product description"
              className="w-full px-3 py-2 border border-black bg-white text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Receipt description - 235px width */}
        <div className="flex flex-col gap-1 w-full">
          <label className="flex items-center gap-1 text-sm font-medium text-[#09090B]">
            Receipt description <span className="text-[#DC2626]">*</span>
          </label>
          <div className="relative w-full">
            <Input
              type="text"
              value={value?.receiptDescription}
              onChange={(e) =>
                onChange?.({ ...value, receiptDescription: e.target.value })
              }
              placeholder="Enter receipt description"
              className="w-full px-3 py-2 border border-black bg-white text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
