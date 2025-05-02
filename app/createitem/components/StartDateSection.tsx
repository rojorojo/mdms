import { Input } from "@/components/ui/input";
import React from "react";

export const StartDateSection = () => {
  return (
    <div className="bg-[#F5F5F5] p-6 w-full">
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
              placeholder="Enter text"
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
              placeholder="Enter text"
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
              placeholder="Enter text"
              className="w-full px-3 py-2 border border-black bg-white text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
