"use client";

import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`);

export default function ScrollAreaPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">{tag}</div>
    ))}
  </div>
</ScrollArea>`;

  return (
    <ComponentPage
      title="Scroll Area"
      description="커스텀 스크롤바를 가진 스크롤 영역 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Scroll inside the area to see the custom scrollbar.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Horizontal Scroll"
            code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((src) => (
      <div key={src} className="shrink-0">
        <img src={src} className="h-32 w-48 rounded-md" />
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          >
            <ScrollArea className="w-80 rounded-md border whitespace-nowrap">
              <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-muted flex h-24 w-32 shrink-0 items-center justify-center rounded-md"
                  >
                    <span className="text-muted-foreground text-xs">
                      Image {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
