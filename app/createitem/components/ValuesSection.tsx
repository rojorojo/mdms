"use client";

import React, { useState } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { Input } from "@/components/ui/input";
import { on } from "events";

const manufacturerCodeOptions = [
  { value: "M0001", label: "M0001 - Anheuser-Busch InBev" },
  { value: "M0002", label: "M0002 - Heineken International" },
  { value: "M0003", label: "M0003 - Molson Coors Beverage Company" },
  { value: "M0004", label: "M0004 - Constellation Brands" },
  { value: "M0005", label: "M0005 - Sierra Nevada Brewing Co." },
  { value: "M0006", label: "M0006 - Boston Beer Company" },
  { value: "M0007", label: "M0007 - Deschutes Brewery" },
  { value: "M0008", label: "M0008 - Dogfish Head Craft Brewery" },
];

const itemTypeOptions = [
  { value: "retail", label: "Retail" },
  { value: "supply", label: "Supply" },
  { value: "cost of goods", label: "Cost of Goods" },
  { value: "refil", label: "Refil" },
];

const privateBrandOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

interface ValuesSectionProps {
  value?: {
    manufacturerCode?: string;
    itemType?: string;
    privateBrand?: string;
    manufacturerCaseQuantity?: string;
    licenseSystemItemID?: string;
    franchiseeSystemName?: string;
    nutritionSystemItemID?: string;
    ipq?: string;
  };
  onChange?: (value: {
    manufacturerCode?: string;
    itemType?: string;
    privateBrand?: string;
    manufacturerCaseQuantity?: string;
    licenseSystemItemID?: string;
    franchiseeSystemName?: string;
    nutritionSystemItemID?: string;
    ipq?: string;
  }) => void;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({
  value,
  onChange,
}) => {
  const [manufacturerCode, setManufacturerCode] = useState<Option | null>(null);
  const [itemType, setItemType] = useState<Option | null>(null);
  const [privateBrand, setPrivateBrand] = useState<Option | null>(null);
  const [manufacturerCaseQuantity, setManufacturerCaseQuantity] =
    useState<string>("");
  const [licenseSystemItemID, setLicenseSystemItemID] = useState<string>("");
  const [franchiseeSystemName, setFranchiseeSystemName] = useState<string>("");
  const [nutritionSystemItemID, setNutritionSystemItemID] =
    useState<string>("");
  const [ipq, setIpq] = useState<string>("");

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="manufacturer-code"
            className="text-sm font-medium text-[#09090B]"
          >
            Manufacturer code <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={manufacturerCodeOptions}
            placeholder="Choose an item"
            value={manufacturerCodeOptions.find(
              (option) => option.value === manufacturerCode?.value
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, manufacturerCode: newValue.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="manufacturer-case-quantity"
            className="text-sm font-medium text-[#09090B]"
          >
            Manufacturer case quantity
          </label>
          <Input
            id="manufacturer-case-quantity"
            type="text"
            placeholder="Enter text"
            value={value?.manufacturerCaseQuantity}
            onChange={(e) =>
              onChange?.({ ...value, manufacturerCaseQuantity: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="license-system-item-id"
            className="text-sm font-medium text-[#09090B]"
          >
            License system item ID
          </label>
          <Input
            id="license-system-item-id"
            type="text"
            placeholder="Enter text"
            value={value?.licenseSystemItemID}
            onChange={(e) =>
              onChange?.({ ...value, licenseSystemItemID: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="item-type"
            className="text-sm font-medium text-[#09090B]"
          >
            Item type <span className="text-red-600">*</span>
          </label>
          <AutoComplete
            options={itemTypeOptions}
            placeholder="Choose an item"
            value={itemTypeOptions.find(
              (option) => option.value === itemType?.value
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, itemType: newValue.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="franchisee-system-name"
            className="text-sm font-medium text-[#09090B]"
          >
            Franchisee system name
          </label>
          <Input
            id="franchisee-system-name"
            type="text"
            placeholder="Enter text"
            value={value?.franchiseeSystemName}
            onChange={(e) =>
              onChange?.({ ...value, franchiseeSystemName: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="nutrition-system-item-id"
            className="text-sm font-medium text-[#09090B]"
          >
            Nutrition system item ID
          </label>
          <Input
            id="nutrition-system-item-id"
            type="text"
            placeholder="Enter text"
            value={value?.nutritionSystemItemID}
            onChange={(e) =>
              onChange?.({ ...value, nutritionSystemItemID: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="private-brand"
            className="text-sm font-medium text-[#09090B]"
          >
            Private brand
          </label>
          <AutoComplete
            options={privateBrandOptions}
            placeholder="Choose an item"
            value={privateBrandOptions.find(
              (option) => option.value === privateBrand?.value
            )}
            emptyMessage="No results."
            onValueChange={(newValue) =>
              onChange?.({ ...value, privateBrand: newValue.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="ipq" className="text-sm font-medium text-[#09090B]">
            IPQ (Inner pack quantity)
          </label>
          <Input
            id="ipq"
            type="text"
            placeholder="Enter text"
            value={value?.ipq}
            onChange={(e) => onChange?.({ ...value, ipq: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
