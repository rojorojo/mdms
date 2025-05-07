"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ShortcutsList } from "@/app/createitem/components/ShortcutsList";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export interface Breadcrumb {
  title: string;
  href: string;
}

interface TopBarProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  children?: React.ReactNode;
}

export const TopBar: React.FC<TopBarProps> = ({
  breadcrumbs,
  title,
  children,
}) => {
  //const { toast } = useToast();
  const [isMac, setIsMac] = React.useState(false);

  useEffect(() => {
    // Detect if user is on a Mac
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsMac(userAgent.indexOf("mac") !== -1);

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Alt+S or Option+S (for Mac)
      if (
        (event.altKey || event.metaKey) &&
        (event.code === "KeyS" || event.key === "s")
      ) {
        event.preventDefault();
        handleSave();
      } else {
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSave = () => {
    toast("Item saved", {
      description: "Your item has been saved successfully.",
      duration: Infinity,
      action: {
        label: "Dismiss",
        onClick: () => console.log("Dismissed"),
      },
      className: "border-black",
    });
  };

  const modifierKey = isMac ? "Option" : "Alt";

  return (
    <div className="flex flex-col">
      {/* MDMS Header */}
      <div className="bg-black text-white h-12 flex items-center justify-between px-6">
        <h1 className="text-base font-bold">MDMS</h1>
      </div>

      {/* Breadcrumb and title area */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <nav
            aria-label="breadcrumb"
            className="flex items-center space-x-2 text-sm text-gray-500"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.href}>
                <Link href={crumb.href} className="hover:text-gray-700">
                  {crumb.title}
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            {children}
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="ml-4">
                Shortcuts
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-4 rounded-none shadow-none">
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-medium text-[#09090B]">
                  Keyboard shortcuts
                </h2>
                <ShortcutsList />
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="outline">Clear</Button>
          <Button variant="default">Create item</Button>
        </div>
      </div>
      <Toaster position="bottom-center" richColors />
    </div>
  );
};
