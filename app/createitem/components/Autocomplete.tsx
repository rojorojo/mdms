"use client";

import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  useEffect,
} from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { set } from "react-hook-form";

export type Option = Record<"value" | "label", string> & Record<string, string>;

type AutoCompleteProps = {
  options: Option[];
  emptyMessage: string;
  value?: Option;
  onValueChange?: (value: Option) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  disabled,
  isLoading = false,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(value as Option);
  const [inputValue, setInputValue] = useState<string>(value?.label || "");
  const [isFocused, setIsFocused] = useState(false);
  const [shouldFilterOptions, setShouldFilterOptions] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    setInputValue(selected?.label || "");
  }, [selected]);

  const handleFocus = useCallback(() => {
    setOpen(true);
    setShouldFilterOptions(false); // Show all options when focused
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);

      setSelected(selectedOption);
      onValueChange?.(selectedOption);
    },
    [onValueChange]
  );

  // Update the input handling
  const handleInputChange = (value: string) => {
    setInputValue(value);
    setShouldFilterOptions(true); // Only filter when user is typing
  };

  const displayOptions = options;

  return (
    <CommandPrimitive
      onKeyDown={handleKeyDown}
      shouldFilter={shouldFilterOptions}
    >
      <div className="border border-black bg-white flex gap-2 items-center pr-2 h-9 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
        <CommandPrimitive.Input
          asChild
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
          className="text-base"
        >
          <Input
            placeholder="Select..."
            className="border-none h-7 rounded-none focus-visible:border-none focus-visible:ring-0"
          />
        </CommandPrimitive.Input>
        <ChevronsUpDown
          onMouseDown={(event) => {
            event.preventDefault();
            setShouldFilterOptions(false);
            setInputValue((inputValue) => inputValue);
            if (!isOpen) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-none bg-white outline-none",
            isOpen ? "block" : "hidden"
          )}
        >
          <CommandList className="rounded-none ring-1 ring-slate-200">
            {isLoading ? (
              <CommandPrimitive.Loading>
                <div className="p-1">
                  <Skeleton className="h-8 w-full" />
                </div>
              </CommandPrimitive.Loading>
            ) : displayOptions.length > 0 ? (
              <CommandGroup>
                {displayOptions.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        "flex w-full items-center gap-2",
                        isSelected ? "bg-neutral-100" : "pl-8"
                      )}
                    >
                      {isSelected ? <Check className="w-4" /> : null}
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : (
              <CommandPrimitive.Empty className="select-none rounded-none px-2 py-3 text-center text-sm">
                {emptyMessage}
              </CommandPrimitive.Empty>
            )}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
