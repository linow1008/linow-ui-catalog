"use client";

import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const statuses = [
  { value: "backlog", label: "Backlog" },
  { value: "todo", label: "Todo" },
  { value: "in-progress", label: "In Progress" },
  { value: "done", label: "Done" },
  { value: "cancelled", label: "Cancelled" },
];

export default function ComboboxPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const previewCode = `<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-[200px] justify-between">
      {value ? statuses.find((s) => s.value === value)?.label : "Select status..."}
      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search status..." />
      <CommandList>
        <CommandEmpty>No status found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem key={status.value} onSelect={() => setValue(status.value)}>
              <Check className={cn("mr-2 h-4 w-4", value === status.value ? "opacity-100" : "opacity-0")} />
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`;

  return (
    <ComponentPage
      title="Combobox"
      description="드롭다운과 검색을 결합한 콤보박스 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? statuses.find((status) => status.value === value)?.label
                : "Select status..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search status..." />
              <CommandList>
                <CommandEmpty>No status found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === status.value ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {status.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Combines a dropdown with search functionality.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Assignee Selector"
            code={`<Command className="rounded-lg border">
  <CommandInput placeholder="Search team member..." />
  <CommandList>
    <CommandGroup heading="Team">
      <CommandItem>
        <Avatar className="mr-2 h-6 w-6" />
        John Doe
      </CommandItem>
      <CommandItem>
        <Avatar className="mr-2 h-6 w-6" />
        Jane Smith
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <div className="w-64 rounded-lg border">
              <Command>
                <CommandInput placeholder="Search team member..." />
                <CommandList>
                  <CommandGroup heading="Team">
                    <CommandItem>
                      <div className="bg-primary mr-2 flex h-6 w-6 items-center justify-center rounded-full text-xs text-white">
                        J
                      </div>
                      John Doe
                    </CommandItem>
                    <CommandItem>
                      <div className="bg-primary mr-2 flex h-6 w-6 items-center justify-center rounded-full text-xs text-white">
                        J
                      </div>
                      Jane Smith
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
