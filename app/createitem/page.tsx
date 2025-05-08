"use client";

import React, { useEffect, useState } from "react";
import { TopBar, Breadcrumb } from "@/app/createitem/components/TopBar";
import { CreateItemTabs } from "@/app/createitem/components/Tabs";
import { TabsContent } from "@/components/ui/tabs";
import { StartDateSection } from "@/app/createitem/components/StartDateSection";
import { HierarchySection } from "@/app/createitem/components/HierarchySection";
import { SizeSection } from "@/app/createitem/components/SizeSection";
import { WeightSection } from "@/app/createitem/components/WeightSection";
import { UPCSection } from "@/app/createitem/components/UPCSection";
import { UOMSection } from "@/app/createitem/components/UOMSection";
import { VolumeSection } from "@/app/createitem/components/VolumeSection";
import { AssociationSection } from "@/app/createitem/components/AssociationSection";
import { ValuesSection } from "@/app/createitem/components/ValuesSection";
import { AlcoholSection } from "./components/AlcoholSection";
import { DetailsComponent } from "@/app/createitem/components/DetailsComponent";
import { Tag } from "lucide-react";
import { TagsSection } from "./components/TagsSection";

const tabs = ["details", "values", "tags"];

export default function CreateItemPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [formData, setFormData] = useState({
    startDate: "",
    productDescription: "",
    receiptDescription: "",
    hierarchy: {
      psa: "",
      category: "",
      subCategory: "",
      vClass: "",
    },
    size: {
      sizeUOM: "",
      sizeLength: "",
      sizeWidth: "",
      sizeHeight: "",
    },
    weight: {
      weightUOM: "",
      totalWeight: "",
      netWeight: "",
    },
    upc: [],
    association: [],
    volume: {
      volumeUOM: "",
      totalVolume: "",
      netVolume: "",
    },
    uom: {
      preShelfLifeUOM: "",
      preShelfLife: "",
      shelfLifeUOM: "",
      shelfLife: "",
    },
    alcohol: {
      alcoholUOM: "",
      licenseType: "",
      aValue: "",
    },
    values: {
      manufacturerCode: "",
      manufacturerCaseQuantity: "",
      licenseSystemItemId: "",
      itemType: "",
      franchiseeSystemName: "",
      nutritionSystemItemId: "",
      privateBrand: "",
      ipq: "",
    },
    tags: {
      tagType: [],
      tags: [],
    },
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => {
      if (field === "startDateSection") {
        return {
          ...prev,
          ...value, // Merge all fields from StartDateSection into formData
        };
      } else if (field === "hierarchy") {
        return { ...prev, hierarchy: { ...prev.hierarchy, ...value } };
      } else if (field === "tags") {
        return { ...prev, tags: value }; // Make sure value has tagType and tags arrays
      }
      return { ...prev, [field]: value };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        switch (event.code) {
          case "Digit1":
            setActiveTab("details");

            break;
          case "Digit2":
            setActiveTab("values");

            break;
          case "Digit3":
            setActiveTab("tags");

            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div id="main-content" className="flex flex-col lg:flex-row gap-6 p-6">
        <div className="flex-1">
          <CreateItemTabs
            items={[
              { label: "Details", value: "details" },
              { label: "Values", value: "values" },
              { label: "Tags", value: "tags" },
            ]}
            defaultValue="details"
            activeTab={activeTab}
            onValueChange={setActiveTab}>
            <TabsContent value="details" id="details-tab" tabIndex={0} className="p-0 flex flex-col gap-6 pt-6">
              <StartDateSection
                value={{
                  startDate: formData.startDate,
                  productDescription: formData.productDescription,
                  receiptDescription: formData.receiptDescription,
                }}
                onChange={(value) => updateFormData("startDateSection", value)}
              />
              <HierarchySection
                value={{
                  psa: formData.hierarchy.psa || "",
                  category: formData.hierarchy.category || "",
                  subCategory: formData.hierarchy.subCategory || "",
                  vClass: formData.hierarchy.vClass || "",
                }}
                onChange={(value) => updateFormData("hierarchy", value)}
              />
            </TabsContent>

            <TabsContent value="values" id="values-tab" tabIndex={0} className="p-0 flex flex-col gap-6 pt-6">
              <div className="flex gap-6">
                <SizeSection
                  value={{
                    sizeUOM: formData.size.sizeUOM || "",
                    sizeLength: formData.size.sizeLength || "",
                    sizeWidth: formData.size.sizeWidth || "",
                    sizeHeight: formData.size.sizeHeight || "",
                  }}
                  onChange={(value) => updateFormData("size", value)}
                />
                <WeightSection
                  value={{
                    weightUOM: formData.weight.weightUOM || "",
                    totalWeight: formData.weight.totalWeight || "",
                    netWeight: formData.weight.netWeight || "",
                  }}
                  onChange={(value) => updateFormData("weight", value)}
                />
              </div>
              <div className="flex flex-col gap-6">
                <UPCSection value={formData.upc} onChange={(newUPC) => updateFormData("upc", newUPC)} />
                <AssociationSection value={formData.association} onChange={(newAssociation) => updateFormData("association", newAssociation)} />
              </div>
              <div className="flex gap-6">
                <UOMSection
                  value={{
                    preShelfLifeUOM: formData.uom.preShelfLifeUOM || "",
                    preShelfLife: formData.uom.preShelfLife || "",
                    shelfLifeUOM: formData.uom.shelfLifeUOM || "",
                    shelfLife: formData.uom.shelfLife || "",
                  }}
                  onChange={(value) => updateFormData("uom", value)}
                />
                <VolumeSection
                  value={{
                    volumeUOM: formData.volume.volumeUOM || "",
                    totalVolume: formData.volume.totalVolume || "",
                    netVolume: formData.volume.netVolume || "",
                  }}
                  onChange={(value) => updateFormData("volume", value)}
                />
              </div>
              <div className="flex flex-col gap-6">
                <AlcoholSection
                  value={{
                    alcoholUOM: formData.alcohol.alcoholUOM || "",
                    licenseType: formData.alcohol.licenseType || "",
                    aValue: formData.alcohol.aValue || "",
                  }}
                  onChange={(value) => updateFormData("alcohol", value)}
                />
              </div>
              <div className="flex flex-col gap-6">
                <ValuesSection
                  value={{
                    manufacturerCode: formData.values.manufacturerCode || "",
                    manufacturerCaseQuantity: formData.values.manufacturerCaseQuantity || "",
                    licenseSystemItemId: formData.values.licenseSystemItemId || "",
                    itemType: formData.values.itemType || "",
                    franchiseeSystemName: formData.values.franchiseeSystemName || "",
                    nutritionSystemItemId: formData.values.nutritionSystemItemId || "",
                    privateBrand: formData.values.privateBrand || "",
                    ipq: formData.values.ipq || "",
                  }}
                  onChange={(value) => updateFormData("values", value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="tags" id="tags-tab" tabIndex={0} className="p-0 flex flex-col gap-6 pt-6">
              <div className="flex flex-col gap-6">
                <TagsSection
                  value={{
                    tagType: formData.tags.tagType || [],
                    tags: formData.tags.tags || [],
                  }}
                  onChange={(value) => updateFormData("tags", value)}
                />
              </div>
            </TabsContent>
          </CreateItemTabs>
        </div>

        <div className="w-full lg:w-[400px] sm:w-[400px]">
          <DetailsComponent formData={formData} />
        </div>
      </div>
    </div>
  );
}
