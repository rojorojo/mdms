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
import { DetailsComponent } from "@/app/createitem/components/DetailsComponent";
import { Tag } from "lucide-react";
import { TagsSection } from "./components/TagsSection";

const breadcrumbs: Breadcrumb[] = [
  { title: "MDMS", href: "/" },
  { title: "Data Entry", href: "/createitem" },
];
const tabs = ["details", "values", "tags"];

export default function CreateItemPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [formData, setFormData] = useState({
    startDate: "",
    receiptDescription: "",
    productDescription: "",
    hierarchy: {
      psa: "",
      category: "",
      subCategory: "",
      vClass: "",
    },
  });

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = tabs.indexOf(activeTab);

      if (event.altKey && event.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
        console.log("Next tab:", tabs[nextIndex]);
      } else if (event.altKey && event.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex]);
        console.log("Next tab:", tabs[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab, setActiveTab]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Skip Links for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-black focus:text-white focus:p-2 focus:rounded"
      >
        Skip to Content
      </a>

      <TopBar breadcrumbs={breadcrumbs} title="Data Entry" />

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
            onValueChange={setActiveTab}
          >
            <TabsContent
              value="details"
              id="details-tab"
              tabIndex={0}
              className="p-0 flex flex-col gap-6 pt-6"
            >
              <StartDateSection
                value={formData.startDate}
                onChange={(value) => updateFormData("startDate", value)}
              />
              <HierarchySection
                value={formData.hierarchy}
                onChange={(value) => updateFormData("hierarchy", value)}
              />
            </TabsContent>

            <TabsContent
              value="values"
              id="values-tab"
              tabIndex={0}
              className="p-0 flex flex-col gap-6 pt-6"
            >
              <div className="flex gap-6">
                <SizeSection />
                <WeightSection />
              </div>
              <div className="flex flex-col gap-6">
                <UPCSection />
                <AssociationSection />
              </div>
              <div className="flex gap-6">
                <UOMSection />
                <VolumeSection />
              </div>
              <div className="flex flex-col gap-6">
                <ValuesSection />
              </div>
            </TabsContent>

            <TabsContent
              value="tags"
              id="tags-tab"
              tabIndex={0}
              className="p-0 flex flex-col gap-6 pt-6"
            >
              <div className="flex flex-col gap-6">
                <TagsSection />
              </div>
            </TabsContent>
          </CreateItemTabs>
        </div>

        <div className="w-full lg:w-[560px]">
          <DetailsComponent formData={formData} />
        </div>
      </div>
    </div>
  );
}
