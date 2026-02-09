"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default function SheetPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [side, setSide] = useState<Side>("right");

  const previewCode = `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="${side}">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description goes here.</SheetDescription>
    </SheetHeader>
    <div className="py-4">Content</div>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Save</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`;

  return (
    <ComponentPage
      title="Sheet"
      description="화면 가장자리에서 슬라이드되는 패널 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is the sheet description.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-muted-foreground text-sm">
                Sheet content goes here.
              </p>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
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
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Mobile Menu"
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
      <MenuIcon />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <nav className="space-y-2">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
    </nav>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 space-y-2">
                  <a href="#" className="block py-2 hover:underline">
                    Home
                  </a>
                  <a href="#" className="block py-2 hover:underline">
                    Products
                  </a>
                  <a href="#" className="block py-2 hover:underline">
                    About
                  </a>
                  <a href="#" className="block py-2 hover:underline">
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </ExampleCard>

          <ExampleCard
            title="Edit Form"
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button>Edit Profile</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
    </SheetHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input defaultValue="John Doe" />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input defaultValue="john@example.com" />
      </div>
    </div>
    <SheetFooter>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button>Edit Profile</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="john@example.com" />
                  </div>
                </div>
                <SheetFooter>
                  <Button>Save</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
