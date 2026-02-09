"use client";

import { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const directions = ["horizontal", "vertical"] as const;
type Direction = (typeof directions)[number];

export default function ResizablePage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [direction, setDirection] = useState<Direction>("horizontal");

  const previewCode = `<ResizablePanelGroup direction="${direction}">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Panel One
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Panel Two
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`;

  return (
    <ComponentPage
      title="Resizable"
      description="드래그로 크기를 조절할 수 있는 패널 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div
          className={`w-full max-w-md ${direction === "vertical" ? "h-64" : "h-32"} rounded-lg border`}
        >
          <ResizablePanelGroup direction={direction}>
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-medium">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-medium">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <ControlDropdown
            label="Direction"
            value={direction}
            options={[...directions]}
            onChange={setDirection}
          />
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Three Panels"
            code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25}>Sidebar</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Content</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={25}>Details</ResizablePanel>
</ResizablePanelGroup>`}
          >
            <div className="h-32 w-full max-w-md rounded-lg border">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={25}>
                  <div className="bg-muted/50 flex h-full items-center justify-center text-xs">
                    Sidebar
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center text-xs">
                    Content
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                  <div className="bg-muted/50 flex h-full items-center justify-center text-xs">
                    Details
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
