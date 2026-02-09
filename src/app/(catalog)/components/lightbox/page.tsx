"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function LightboxPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [open, setOpen] = useState(false);

  const previewCode = `<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <img src="/image.jpg" className="cursor-pointer rounded-lg" />
  </DialogTrigger>
  <DialogContent className="max-w-4xl p-0">
    <img src="/image.jpg" className="w-full" />
    <DialogClose className="absolute right-4 top-4">
      <X className="h-6 w-6" />
    </DialogClose>
  </DialogContent>
</Dialog>`;

  return (
    <ComponentPage
      title="Lightbox"
      description="이미지를 확대하여 보는 라이트박스 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <>
          <div
            className="bg-muted flex h-32 w-48 cursor-pointer items-center justify-center rounded-lg transition-opacity hover:opacity-80"
            onClick={() => setOpen(true)}
          >
            <span className="text-muted-foreground text-sm">Click to open</span>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-2xl p-0">
              <div className="bg-muted flex h-80 w-full items-center justify-center">
                <span className="text-muted-foreground">Full size image</span>
              </div>
              <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 p-1 text-white">
                <X className="h-5 w-5" />
              </DialogClose>
            </DialogContent>
          </Dialog>
        </>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click the image to open the lightbox.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Image Gallery"
            code={`<div className="grid grid-cols-3 gap-2">
  {images.map((src, i) => (
    <img
      key={i}
      src={src}
      className="cursor-pointer rounded-lg hover:opacity-80"
      onClick={() => openLightbox(i)}
    />
  ))}
</div>`}
          >
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-muted flex aspect-square cursor-pointer items-center justify-center rounded-lg transition-opacity hover:opacity-80"
                >
                  <span className="text-muted-foreground text-xs">{i}</span>
                </div>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard
            title="With Navigation"
            code={`<DialogContent>
  <Button className="absolute left-4 top-1/2" variant="ghost">
    <ChevronLeft />
  </Button>
  <img src={currentImage} />
  <Button className="absolute right-4 top-1/2" variant="ghost">
    <ChevronRight />
  </Button>
</DialogContent>`}
          >
            <div className="bg-muted relative flex h-48 w-full max-w-md items-center justify-center rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <span className="text-muted-foreground text-sm">
                Image 1 of 6
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
