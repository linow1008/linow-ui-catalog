"use client";

import { useState } from "react";

import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function ChipPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [chips, setChips] = useState(["React", "TypeScript", "Next.js"]);

  const previewCode = `<div className="flex flex-wrap gap-2">
  {chips.map((chip) => (
    <Badge key={chip} variant="secondary" className="gap-1">
      {chip}
      <button onClick={() => removeChip(chip)}>
        <X className="h-3 w-3" />
      </button>
    </Badge>
  ))}
</div>`;

  const removeChip = (chipToRemove: string) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  return (
    <ComponentPage
      title="Chip"
      description="선택 또는 필터링에 사용되는 칩 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <Badge key={chip} variant="secondary" className="gap-1 pr-1">
              {chip}
              <button
                onClick={() => removeChip(chip)}
                className="hover:bg-muted ml-1 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {chips.length === 0 && (
            <button
              onClick={() => setChips(["React", "TypeScript", "Next.js"])}
              className="text-muted-foreground text-sm underline"
            >
              Reset chips
            </button>
          )}
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click the X to remove chips from the preview.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Filter Chips"
            code={`<div className="flex gap-2">
  <Badge variant="default">All</Badge>
  <Badge variant="outline">Active</Badge>
  <Badge variant="outline">Completed</Badge>
</div>`}
          >
            <div className="flex gap-2">
              <Badge variant="default">All</Badge>
              <Badge variant="outline">Active</Badge>
              <Badge variant="outline">Completed</Badge>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Tag Input"
            code={`<div className="flex flex-wrap gap-2 rounded-md border p-2">
  {tags.map((tag) => (
    <Badge key={tag} variant="secondary">
      {tag}
      <X className="ml-1 h-3 w-3 cursor-pointer" />
    </Badge>
  ))}
  <input placeholder="Add tag..." className="flex-1 outline-none" />
</div>`}
          >
            <div className="flex w-80 flex-wrap gap-2 rounded-md border p-2">
              <Badge variant="secondary" className="gap-1">
                Design
                <X className="h-3 w-3 cursor-pointer" />
              </Badge>
              <Badge variant="secondary" className="gap-1">
                Development
                <X className="h-3 w-3 cursor-pointer" />
              </Badge>
              <input
                placeholder="Add tag..."
                className="min-w-20 flex-1 bg-transparent text-sm outline-none"
              />
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
