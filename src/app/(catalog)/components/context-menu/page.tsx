"use client";

import { useState } from "react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function ContextMenuPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<ContextMenu>
  <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`;

  return (
    <ComponentPage
      title="Context Menu"
      description="우클릭 시 나타나는 컨텍스트 메뉴 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <ContextMenu>
          <ContextMenuTrigger className="bg-muted/50 flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Edit</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-destructive">
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Right-click on the target area to show the context menu.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="File Actions"
            code={`<ContextMenu>
  <ContextMenuTrigger className="rounded-md border p-4">
    document.pdf
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Open</ContextMenuItem>
    <ContextMenuItem>Download</ContextMenuItem>
    <ContextMenuItem>Share</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Rename</ContextMenuItem>
    <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          >
            <ContextMenu>
              <ContextMenuTrigger className="rounded-md border p-4">
                document.pdf
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Open</ContextMenuItem>
                <ContextMenuItem>Download</ContextMenuItem>
                <ContextMenuItem>Share</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Rename</ContextMenuItem>
                <ContextMenuItem className="text-destructive">
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
