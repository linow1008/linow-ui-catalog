"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const sides = ["top", "right", "bottom", "left"] as const;
type Side = (typeof sides)[number];

export default function PopoverPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [side, setSide] = useState<Side>("bottom");

  const previewCode = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent side="${side}">
    <p>Popover content goes here.</p>
  </PopoverContent>
</Popover>`;

  return (
    <ComponentPage
      title="Popover"
      description="클릭 시 나타나는 팝오버 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent side={side} className="w-64">
            <p className="text-sm">Popover content goes here.</p>
          </PopoverContent>
        </Popover>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />

          <ControlDivider />

          <ControlDropdown
            label="Side"
            value={side}
            options={[...sides]}
            onChange={setSide}
          />
        </>
      }
    >
      {/* Real World Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Settings Popover"
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <h4 className="font-medium">Dimensions</h4>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="auto" className="col-span-2" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Settings</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Dimensions</h4>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        defaultValue="auto"
                        className="col-span-2"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ExampleCard>

          <ExampleCard
            title="User Menu"
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="sm">
      john@example.com
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-48" align="end">
    <div className="space-y-1">
      <Button variant="ghost" className="w-full justify-start" size="sm">
        Profile
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="sm">
        Settings
      </Button>
      <Button variant="ghost" className="w-full justify-start text-destructive" size="sm">
        Sign out
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                  john@example.com
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48" align="end">
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-destructive w-full justify-start"
                    size="sm"
                  >
                    Sign out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
