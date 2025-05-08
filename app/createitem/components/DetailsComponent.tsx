import React from "react";
import { DSStartDate } from "./detail-sections/DSStartDate";
import { DSHierarchy } from "./detail-sections/DSHierarchy";
import { DSSize } from "./detail-sections/DSSize";
import { DSWeight } from "./detail-sections/DSWeight";
import { DSUPC } from "./detail-sections/DSUpc";
import { DSAssociation } from "./detail-sections/DSAssociation";
import { DSVolume } from "./detail-sections/DSVolume";
import { DSUOM } from "./detail-sections/DSUOM";
import { DSAlcohol } from "./detail-sections/DSAlcohol";
import { DSValues } from "./detail-sections/DSValues";

interface DetailsComponentProps {
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
    size: {
      sizeUOM: string;
      sizeLength: string;
      sizeWidth: string;
      sizeHeight: string;
    };
    weight: {
      weightUOM: string;
      totalWeight: string;
      netWeight: string;
    };
    upc: string[];
    association: string[];
    volume: {
      volumeUOM: string;
      totalVolume: string;
      netVolume: string;
    };
    uom: {
      preShelfLifeUOM: string;
      preShelfLife: string;
      shelfLifeUOM: string;
      shelfLife: string;
    };
    alcohol: {
      alcoholUOM: string;
      licenseType: string;
      aValue: string;
    };
    values: {
      manufacturerCode: string;
      manufacturerCaseQuantity: string;
      licenseSystemItemId: string;
      itemType: string;
      franchiseeSystemName: string;
      nutritionSystemItemId: string;
      privateBrand: string;
      ipq: string;
    };
  };
}

/**
 * Component that displays a summary of item details
 */
export const DetailsComponent: React.FC<DetailsComponentProps> = ({
  formData,
}) => {
  return (
    <div className="bg-white border border-neutral-500/30 w-full pt-4">
      <div className="flex flex-col gap-4 sm:gap-6">
        <h2 className="text-xl font-normal text-black pl-4">Description</h2>
        <DSStartDate formData={formData} />

        <DSHierarchy formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">Size</h2>
        <DSSize formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">Weight</h2>
        <DSWeight formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">UPC</h2>
        <DSUPC formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">Association</h2>
        <DSAssociation formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">Volume</h2>
        <DSVolume formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">UOM</h2>
        <DSUOM formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">Alcohol</h2>
        <DSAlcohol formData={formData} />
        <h2 className="text-xl font-normal text-black pl-4">Values</h2>
        <DSValues formData={formData} />
      </div>
    </div>
  );
};
