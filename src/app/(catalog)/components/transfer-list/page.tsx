"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function TransferListPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [leftItems, setLeftItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [rightItems, setRightItems] = useState(["Item 5", "Item 6"]);
  const [leftSelected, setLeftSelected] = useState<string[]>([]);
  const [rightSelected, setRightSelected] = useState<string[]>([]);

  const moveRight = () => {
    setRightItems([...rightItems, ...leftSelected]);
    setLeftItems(leftItems.filter((item) => !leftSelected.includes(item)));
    setLeftSelected([]);
  };

  const moveLeft = () => {
    setLeftItems([...leftItems, ...rightSelected]);
    setRightItems(rightItems.filter((item) => !rightSelected.includes(item)));
    setRightSelected([]);
  };

  const previewCode = `<div className="flex items-center gap-4">
  <div className="w-48 rounded-md border">
    <div className="border-b p-2 font-medium">Available</div>
    <ScrollArea className="h-48">
      {leftItems.map((item) => (
        <div key={item} className="flex items-center gap-2 p-2">
          <Checkbox checked={leftSelected.includes(item)} />
          <span>{item}</span>
        </div>
      ))}
    </ScrollArea>
  </div>
  <div className="flex flex-col gap-2">
    <Button size="icon" onClick={moveRight}><ChevronRight /></Button>
    <Button size="icon" onClick={moveLeft}><ChevronLeft /></Button>
  </div>
  <div className="w-48 rounded-md border">
    <div className="border-b p-2 font-medium">Selected</div>
    <ScrollArea className="h-48">
      {rightItems.map((item) => (...))}
    </ScrollArea>
  </div>
</div>`;

  return (
    <ComponentPage
      title="Transfer List"
      description="항목을 이동시킬 수 있는 전송 리스트 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="flex items-center gap-4">
          <div className="w-40 rounded-md border">
            <div className="border-b p-2 text-sm font-medium">Available</div>
            <ScrollArea className="h-40">
              {leftItems.map((item) => (
                <div key={item} className="flex items-center gap-2 p-2">
                  <Checkbox
                    checked={leftSelected.includes(item)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setLeftSelected([...leftSelected, item]);
                      } else {
                        setLeftSelected(leftSelected.filter((i) => i !== item));
                      }
                    }}
                  />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={moveRight}
              disabled={leftSelected.length === 0}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={moveLeft}
              disabled={rightSelected.length === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-40 rounded-md border">
            <div className="border-b p-2 text-sm font-medium">Selected</div>
            <ScrollArea className="h-40">
              {rightItems.map((item) => (
                <div key={item} className="flex items-center gap-2 p-2">
                  <Checkbox
                    checked={rightSelected.includes(item)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setRightSelected([...rightSelected, item]);
                      } else {
                        setRightSelected(
                          rightSelected.filter((i) => i !== item),
                        );
                      }
                    }}
                  />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Select items and use arrows to transfer between lists.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Permission Selector"
            code={`<div className="flex gap-4">
  <div className="rounded-md border">
    <div className="p-2 font-medium">Available Permissions</div>
    {permissions.map((p) => (
      <div className="flex items-center gap-2 p-2">
        <Checkbox />
        <span>{p.label}</span>
      </div>
    ))}
  </div>
  <Button size="icon"><ChevronRight /></Button>
  <div className="rounded-md border">
    <div className="p-2 font-medium">Granted Permissions</div>
    ...
  </div>
</div>`}
          >
            <div className="flex items-start gap-4">
              <div className="w-48 rounded-md border">
                <div className="border-b p-2 text-sm font-medium">
                  Available Permissions
                </div>
                <div className="p-1">
                  {["Read", "Write", "Delete"].map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap-2 rounded p-2 hover:bg-gray-50"
                    >
                      <Checkbox />
                      <span className="text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-8">
                <Button size="icon" variant="outline">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="w-48 rounded-md border">
                <div className="border-b p-2 text-sm font-medium">
                  Granted Permissions
                </div>
                <div className="p-1">
                  {["Admin", "Execute"].map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap-2 rounded p-2 hover:bg-gray-50"
                    >
                      <Checkbox />
                      <span className="text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
