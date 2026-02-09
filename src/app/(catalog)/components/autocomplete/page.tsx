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

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function AutocompletePage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const previewCode = `<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-[200px] justify-between">
      {value ? frameworks.find((f) => f.value === value)?.label : "Select framework..."}
      <ChevronsUpDown className="opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup>
          {frameworks.map((framework) => (
            <CommandItem key={framework.value} onSelect={() => setValue(framework.value)}>
              {framework.label}
              <Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`;

  return (
    <ComponentPage
      title="Autocomplete"
      description="검색 가능한 자동완성 입력 컴포넌트"
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
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
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
            Type to filter the list of options.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Country Selector"
            code={`const countries = [
  { value: "kr", label: "🇰🇷 South Korea" },
  { value: "us", label: "🇺🇸 United States" },
  { value: "jp", label: "🇯🇵 Japan" },
];

<Command>
  <CommandInput placeholder="Search country..." />
  <CommandList>
    <CommandGroup>
      {countries.map((country) => (
        <CommandItem key={country.value}>
          {country.label}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <div className="w-64 rounded-md border">
              <Command>
                <CommandInput placeholder="Search country..." />
                <CommandList>
                  <CommandGroup>
                    <CommandItem>🇰🇷 South Korea</CommandItem>
                    <CommandItem>🇺🇸 United States</CommandItem>
                    <CommandItem>🇯🇵 Japan</CommandItem>
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
