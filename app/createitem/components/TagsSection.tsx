"use client";

import React, { useState, useMemo } from "react";
import { AutoComplete, type Option } from "./Autocomplete";
import { TagGroup } from "./TagGroup";

interface TagsSectionProps {
  value?: {
    tagType?: string[];
    tags?: string[];
  };
  onChange?: (value: { tagType?: string[]; tags?: string[] }) => void;
}

export const TagsSection: React.FC<TagsSectionProps> = ({
  value = { tagType: [], tags: [] },
  onChange,
}) => {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);
  const [secondDropdownOptions, setSecondDropdownOptions] = React.useState<
    { value: string; label: string }[]
  >([]);
  const [secondDropdownKey, setSecondDropdownKey] = useState(0);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const tagTypeOptions = [
    { value: "platform", label: "Platform" },
    { value: "nationality", label: "Nationality" },
    { value: "age", label: "Age" },
    { value: "gender", label: "Gender" },
    { value: "location", label: "Location" },
    { value: "storeServices", label: "Store Services" },
  ];

  const tagsOptions = {
    platform: [
      { value: "web", label: "Web" },
      { value: "mobile", label: "Mobile" },
      { value: "desktop", label: "Desktop" },
    ],
    nationality: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "uk", label: "United Kingdom" },
    ],
    age: [
      { value: "child", label: "Child" },
      { value: "teen", label: "Teen" },
      { value: "adult", label: "Adult" },
    ],
    gender: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    location: [
      { value: "north", label: "North" },
      { value: "south", label: "South" },
      { value: "east", label: "East" },
      { value: "west", label: "West" },
    ],
    storeServices: [
      { value: "pickup", label: "Pickup" },
      { value: "delivery", label: "Delivery" },
      { value: "in-store", label: "In-Store" },
    ],
  };

  // Convert parent format to display format when rendering
  const tagGroups = useMemo(() => {
    // Create record from arrays for rendering only
    const groups: Record<string, string[]> = {};
    (value.tagType ?? []).forEach((type, i) => {
      if (!groups[type]) groups[type] = [];
      if (value.tags?.[i]) groups[type].push(value.tags[i]);
    });
    return groups;
  }, [value]);

  const handleFirstDropdownChange = (option: Option | null) => {
    setSelectedTag(option?.label || null);
    setSecondDropdownOptions(
      tagsOptions[option?.value as keyof typeof tagsOptions] || []
    );
    setSelectedValue(null);
    setSecondDropdownKey((prev) => prev + 1); // Force re-render of the second dropdown
  };

  const handleSecondDropdownChange = (option: Option | null) => {
    setSelectedValue(option?.value || null);
    if (selectedTag && option) {
      handleAddTag(selectedTag, option.value);
    }
  };

  const handleAddTag = (tagType: string, tagValue: string) => {
    if (onChange) {
      onChange({
        tagType: [...(value.tagType ?? []), tagType],
        tags: [...(value.tags ?? []), tagValue],
      });
    }
  };

  const handleRemoveTag = (tagType: string, tagValue: string) => {
    if (onChange) {
      // Find all pairs of tagType and tags
      const filteredPairs = (value.tagType || []).reduce<{
        tagType: string[];
        tags: string[];
      }>(
        (acc, type, index) => {
          // Skip this pair if it matches what we want to remove
          if (type === tagType && value.tags?.[index] === tagValue) {
            return acc;
          }
          // Keep all other pairs
          acc.tagType.push(type);
          if (value.tags?.[index]) acc.tags.push(value.tags[index]);
          return acc;
        },
        { tagType: [], tags: [] }
      );

      onChange(filteredPairs);
    }
  };

  return (
    <div className="bg-[#f5f5f5] p-6 w-full">
      <h2 className="text-xl font-medium text-black mb-6">Tags</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tag-type"
            className="text-sm font-medium text-[#09090B]"
          >
            Tag type
          </label>
          <AutoComplete
            options={tagTypeOptions}
            placeholder="Choose an item"
            value={
              selectedTag
                ? { value: selectedTag, label: selectedTag }
                : undefined
            }
            emptyMessage="No results."
            onValueChange={handleFirstDropdownChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tag" className="text-sm font-medium text-[#09090B]">
            Tag
          </label>
          <AutoComplete
            key={secondDropdownKey} // Key to force re-render
            options={secondDropdownOptions}
            placeholder="Choose an item"
            value={undefined}
            emptyMessage="No results."
            onValueChange={handleSecondDropdownChange}
          />
        </div>

        {/* Columns 3 and 4 are intentionally left empty */}
      </div>
      <div
        id="tagRegion"
        className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4"
      >
        {Object.entries(tagGroups).map(([tagType, tags]) => (
          <TagGroup
            key={tagType}
            tagType={tagType}
            tags={tags}
            onRemoveTag={(tag) => handleRemoveTag(tagType, tag)}
          />
        ))}
      </div>
    </div>
  );
};
