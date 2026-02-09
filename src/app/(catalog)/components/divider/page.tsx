"use client";

import { useState } from "react";

import { Separator } from "@/components/ui/separator";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const orientations = ["horizontal", "vertical"] as const;
type Orientation = (typeof orientations)[number];

export default function DividerPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [orientation, setOrientation] = useState<Orientation>("horizontal");

  const previewCode = `<Separator orientation="${orientation}" />`;

  return (
    <ComponentPage
      title="Divider"
      description="콘텐츠를 구분하는 구분선 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div
          className={orientation === "horizontal" ? "w-full max-w-md" : "h-24"}
        >
          <Separator orientation={orientation} />
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <ControlDropdown
            label="Orientation"
            value={orientation}
            options={[...orientations]}
            onChange={setOrientation}
          />
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="List Divider"
            code={`<div>
  <div className="py-2">Item 1</div>
  <Separator />
  <div className="py-2">Item 2</div>
  <Separator />
  <div className="py-2">Item 3</div>
</div>`}
          >
            <div className="w-48 rounded-md border p-2">
              <div className="py-2 text-sm">Item 1</div>
              <Separator />
              <div className="py-2 text-sm">Item 2</div>
              <Separator />
              <div className="py-2 text-sm">Item 3</div>
            </div>
          </ExampleCard>

          <ExampleCard
            title="With Text"
            code={`<div className="flex items-center gap-4">
  <Separator className="flex-1" />
  <span className="text-muted-foreground text-sm">OR</span>
  <Separator className="flex-1" />
</div>`}
          >
            <div className="flex w-64 items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground text-sm">OR</span>
              <Separator className="flex-1" />
            </div>
          </ExampleCard>

          <ExampleCard
            title="Vertical in Toolbar"
            code={`<div className="flex items-center gap-2">
  <Button size="icon" variant="ghost">Bold</Button>
  <Button size="icon" variant="ghost">Italic</Button>
  <Separator orientation="vertical" className="h-6" />
  <Button size="icon" variant="ghost">Link</Button>
</div>`}
          >
            <div className="flex items-center gap-2 rounded-md border p-2">
              <button className="rounded p-2 text-sm hover:bg-gray-100">
                B
              </button>
              <button className="rounded p-2 text-sm italic hover:bg-gray-100">
                I
              </button>
              <Separator orientation="vertical" className="h-6" />
              <button className="rounded p-2 text-sm underline hover:bg-gray-100">
                Link
              </button>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
