"use client";

import React from "react";
import { Pill } from "./Pill";
import { XCircle } from "lucide-react";

interface TagGroupProps {
  tags: string[];
  tagType: string;
  onRemoveTag: (tag: string) => void;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  tags,
  onRemoveTag,
  tagType,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg text-black mb-2">{tagType}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Pill key={tag} value={tag} onRemove={() => onRemoveTag(tag)} />
        ))}
      </div>
      {/*<button
        type="button"
        onClick={onRemoveGroup}
        className="text-black hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-black rounded-full"
        aria-label={`Remove ${tagType}`}
      >
        <XCircle className="w-6 h-6" />
      </button>*/}
    </div>
  );
};
