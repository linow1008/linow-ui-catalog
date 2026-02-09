"use client";

import { createComponentPage } from "@/lib/component-factory";

import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonState {
  theme: string;
}

export default createComponentPage<SkeletonState>({
  id: "skeleton",
  title: "Skeleton",
  description: "로딩 상태를 표시하는 스켈레톤 컴포넌트",
  controls: [{ type: "theme", key: "theme" }, { type: "divider" }],
  preview: {
    render: () => (
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    ),
    generateCode: () => `<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>`,
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Card Loading",
        code: `<div className="rounded-lg border p-4 space-y-4">
  <Skeleton className="h-32 w-full rounded-lg" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
  <Skeleton className="h-9 w-24" />
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-4 rounded-lg border p-4">
            <Skeleton className="h-32 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-9 w-24" />
          </div>
        ),
      },
      {
        title: "User List Loading",
        code: `<div className="space-y-4">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="space-y-1.5">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  ))}
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Table Row Loading",
        code: `<div className="space-y-3">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-4">
      <Skeleton className="h-4 w-8" />
      <Skeleton className="h-4 flex-1" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-16" />
    </div>
  ))}
</div>`,
        content: (
          <div className="w-full max-w-md space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Article Loading",
        code: `<div className="space-y-4">
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-4 w-1/4" />
  <div className="space-y-2 pt-4">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>`,
        content: (
          <div className="w-full max-w-sm space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ),
      },
    ],
  },
});
