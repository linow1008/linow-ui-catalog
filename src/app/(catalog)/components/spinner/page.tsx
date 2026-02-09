"use client";

import { Loader2Icon } from "lucide-react";

import { createComponentPage } from "@/lib/component-factory";

import { Button } from "@/components/ui/button";

const sizes = ["sm", "default", "lg"] as const;

const sizeClasses = {
  sm: "size-4",
  default: "size-6",
  lg: "size-8",
};

interface SpinnerState {
  theme: string;
  size: string;
}

export default createComponentPage<SpinnerState>({
  id: "spinner",
  title: "Spinner",
  description: "로딩 상태를 표시하는 스피너 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "size",
      label: "Size",
      options: sizes,
      defaultValue: "default",
    },
  ],
  preview: {
    render: (state) => (
      <Loader2Icon
        className={`animate-spin ${sizeClasses[state.size as keyof typeof sizeClasses]}`}
      />
    ),
    generateCode: (state) =>
      `<Loader2Icon className="animate-spin ${sizeClasses[state.size as keyof typeof sizeClasses]}" />`,
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Loading Button",
        code: `<Button disabled>
  <Loader2Icon className="animate-spin" />
  Loading...
</Button>`,
        content: (
          <Button disabled>
            <Loader2Icon className="animate-spin" />
            Loading...
          </Button>
        ),
      },
      {
        title: "Page Loading",
        code: `<div className="flex flex-col items-center gap-2">
  <Loader2Icon className="size-8 animate-spin" />
  <p className="text-sm text-muted-foreground">Loading...</p>
</div>`,
        content: (
          <div className="flex flex-col items-center gap-2">
            <Loader2Icon className="size-8 animate-spin" />
            <p className="text-muted-foreground text-sm">Loading...</p>
          </div>
        ),
      },
      {
        title: "Inline Loading",
        code: `<div className="flex items-center gap-2">
  <Loader2Icon className="size-4 animate-spin" />
  <span className="text-sm">Saving changes...</span>
</div>`,
        content: (
          <div className="flex items-center gap-2">
            <Loader2Icon className="size-4 animate-spin" />
            <span className="text-sm">Saving changes...</span>
          </div>
        ),
      },
    ],
  },
});
