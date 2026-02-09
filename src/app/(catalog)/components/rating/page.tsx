"use client";

import { useState } from "react";

import { Star } from "lucide-react";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const maxStars = ["3", "5", "10"] as const;
type MaxStars = (typeof maxStars)[number];

export default function RatingPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [max, setMax] = useState<MaxStars>("5");
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);

  const previewCode = `<div className="flex gap-1">
  {[...Array(${max})].map((_, i) => (
    <Star
      key={i}
      className={cn("cursor-pointer", i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")}
      onClick={() => setRating(i + 1)}
    />
  ))}
</div>`;

  return (
    <ComponentPage
      title="Rating"
      description="별점을 표시하고 입력받는 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="flex gap-1">
          {[...Array(parseInt(max))].map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 cursor-pointer transition-colors ${
                i < (hover || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHover(i + 1)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <ControlDropdown
            label="Max Stars"
            value={max}
            options={[...maxStars]}
            onChange={setMax}
          />
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Product Rating"
            code={`<div className="flex items-center gap-2">
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
    ))}
  </div>
  <span className="text-sm text-muted-foreground">(128 reviews)</span>
</div>`}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">4.0</span>
              <span className="text-muted-foreground text-sm">
                (128 reviews)
              </span>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Review Form"
            code={`<div className="space-y-2">
  <Label>Your Rating</Label>
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-8 w-8 cursor-pointer hover:text-yellow-400" />
    ))}
  </div>
</div>`}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Rating</label>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-8 w-8 cursor-pointer text-gray-300 transition-colors hover:fill-yellow-400 hover:text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Read Only"
            code={`<div className="flex gap-1">
  {[...Array(5)].map((_, i) => (
    <Star key={i} className={i < 3.5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
  ))}
</div>`}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
