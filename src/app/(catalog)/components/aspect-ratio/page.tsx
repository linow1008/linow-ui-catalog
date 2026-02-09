"use client";

import { useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const ratios = ["16/9", "4/3", "1/1", "21/9"] as const;
type Ratio = (typeof ratios)[number];

export default function AspectRatioPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [ratio, setRatio] = useState<Ratio>("16/9");

  const ratioValue =
    ratio === "16/9"
      ? 16 / 9
      : ratio === "4/3"
        ? 4 / 3
        : ratio === "1/1"
          ? 1
          : 21 / 9;

  const previewCode = `<AspectRatio ratio={${ratioValue.toFixed(2)}}>
  <img src="/image.jpg" alt="Image" className="object-cover" />
</AspectRatio>`;

  return (
    <ComponentPage
      title="Aspect Ratio"
      description="이미지나 비디오의 비율을 유지하는 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="w-full max-w-sm">
          <AspectRatio ratio={ratioValue} className="bg-muted rounded-lg">
            <div className="flex h-full items-center justify-center">
              <span className="text-muted-foreground text-sm">{ratio}</span>
            </div>
          </AspectRatio>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <ControlDropdown
            label="Ratio"
            value={ratio}
            options={[...ratios]}
            onChange={setRatio}
          />
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Video Thumbnail"
            code={`<AspectRatio ratio={16/9}>
  <img src="/thumbnail.jpg" className="rounded-lg object-cover" />
</AspectRatio>`}
          >
            <div className="w-full max-w-xs">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground text-xs">
                    16:9 Video
                  </span>
                </div>
              </AspectRatio>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Profile Picture"
            code={`<AspectRatio ratio={1}>
  <img src="/avatar.jpg" className="rounded-full object-cover" />
</AspectRatio>`}
          >
            <div className="w-24">
              <AspectRatio ratio={1} className="bg-muted rounded-full">
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground text-xs">1:1</span>
                </div>
              </AspectRatio>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
