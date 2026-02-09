"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function CarouselPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<Carousel>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            {item}
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  return (
    <ComponentPage
      title="Carousel"
      description="슬라이드 형태로 콘텐츠를 보여주는 캐러셀 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="w-full max-w-xs">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <CarouselItem key={num}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{num}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Use arrow buttons or swipe to navigate.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Multiple Items"
            code={`<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card>...</Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>`}
          >
            <div className="w-full max-w-md">
              <Carousel>
                <CarouselContent className="-ml-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <CarouselItem key={num} className="basis-1/3 pl-2">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <span className="text-xl font-semibold">{num}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
