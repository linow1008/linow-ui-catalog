"use client";

import { useState } from "react";

import { MessageCircle, Pencil, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const sizes = ["default", "lg"] as const;
type Size = (typeof sizes)[number];

const sizeClasses = {
  default: "h-12 w-12",
  lg: "h-14 w-14",
};

export default function FabPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [size, setSize] = useState<Size>("default");

  const previewCode = `<Button className="fixed bottom-4 right-4 ${sizeClasses[size]} rounded-full shadow-lg">
  <Plus className="h-6 w-6" />
</Button>`;

  return (
    <ComponentPage
      title="Floating Action Button"
      description="화면에 떠있는 주요 액션 버튼 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Button className={`${sizeClasses[size]} rounded-full shadow-lg`}>
          <Plus className="h-6 w-6" />
        </Button>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <ControlDropdown
            label="Size"
            value={size}
            options={[...sizes]}
            onChange={setSize}
          />
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Compose Button"
            code={`<Button className="fixed bottom-4 right-4 h-14 gap-2 rounded-full px-6 shadow-lg">
  <Pencil className="h-5 w-5" />
  Compose
</Button>`}
          >
            <Button className="h-14 gap-2 rounded-full px-6 shadow-lg">
              <Pencil className="h-5 w-5" />
              Compose
            </Button>
          </ExampleCard>

          <ExampleCard
            title="Chat FAB"
            code={`<Button className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg">
  <MessageCircle className="h-6 w-6" />
</Button>`}
          >
            <Button className="h-14 w-14 rounded-full shadow-lg">
              <MessageCircle className="h-6 w-6" />
            </Button>
          </ExampleCard>

          <ExampleCard
            title="Bottom Right Position"
            code={`<div className="relative h-32 border rounded-lg">
  <Button className="absolute bottom-4 right-4 h-12 w-12 rounded-full shadow-lg">
    <Plus className="h-6 w-6" />
  </Button>
</div>`}
          >
            <div className="relative h-32 w-full max-w-md rounded-lg border">
              <Button className="absolute right-4 bottom-4 h-12 w-12 rounded-full shadow-lg">
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
