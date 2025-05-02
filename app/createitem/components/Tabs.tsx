import React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabItem {
  label: string;
  value: string;
}

interface CreateItemTabsProps {
  items: TabItem[];
  defaultValue?: string;
  activeTab?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const CreateItemTabs: React.FC<CreateItemTabsProps> = ({
  items,
  defaultValue,
  activeTab,
  onValueChange,
  className,
  children,
}) => {
  return (
    <Tabs
      value={activeTab || defaultValue || items[0].value} // Use activeTab for controlled behavior
      onValueChange={onValueChange} // Update activeTab when a tab is clicked
      className={cn("flex flex-col", className)}
    >
      {/* Tabs header styled precisely to match Figma design */}

      <div className="relative w-full">
        <TabsList className="bg-transparent h-12 p-0 inline-flex rounded-none gap-8 border-b border-gray-200 w-full justify-start items-center">
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="inline-flex whitespace-nowrap relative h-12 rounded-none font-inter text-base text-black
                  data-[state=inactive]:font-normal data-[state=active]:font-bold
                  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                  after:absolute after:content-[''] after:bottom-0 after:left-0 after:right-0 
                  after:h-[3px] after:bg-black after:scale-x-0 after:transition-transform
                  data-[state=active]:after:scale-x-100"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Content area */}
      <div className="flex-1">{children}</div>
    </Tabs>
  );
};
