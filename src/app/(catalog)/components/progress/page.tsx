"use client";

import { createComponentPage } from "@/lib/component-factory";

import { Progress } from "@/components/ui/progress";

const valueOptions = ["0", "25", "50", "75", "100"] as const;

interface ProgressState {
  theme: string;
  value: string;
}

export default createComponentPage<ProgressState>({
  id: "progress",
  title: "Progress",
  description: "진행 상태를 표시하는 프로그레스 바 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "value",
      label: "Value",
      options: valueOptions,
      defaultValue: "50",
    },
  ],
  preview: {
    render: (state) => (
      <Progress value={Number(state.value)} className="w-full max-w-xs" />
    ),
    generateCode: (state) => `<Progress value={${state.value}} />`,
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "With Label",
        code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span>75%</span>
  </div>
  <Progress value={75} />
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
        ),
      },
      {
        title: "Upload Progress",
        code: `<div className="space-y-2">
  <div className="flex items-center justify-between text-sm">
    <span>Uploading file.pdf</span>
    <span className="text-muted-foreground">45%</span>
  </div>
  <Progress value={45} />
  <p className="text-muted-foreground text-xs">2.3 MB of 5.1 MB</p>
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Uploading file.pdf</span>
              <span className="text-muted-foreground">45%</span>
            </div>
            <Progress value={45} />
            <p className="text-muted-foreground text-xs">2.3 MB of 5.1 MB</p>
          </div>
        ),
      },
      {
        title: "Step Progress",
        code: `<div className="space-y-2">
  <p className="text-sm font-medium">Step 2 of 4</p>
  <Progress value={50} />
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-2">
            <p className="text-sm font-medium">Step 2 of 4</p>
            <Progress value={50} />
          </div>
        ),
      },
      {
        title: "Storage Usage",
        code: `<div className="rounded-lg border p-4 space-y-3">
  <div className="flex justify-between">
    <span className="font-medium">Storage</span>
    <span className="text-sm text-muted-foreground">8.2 GB / 15 GB</span>
  </div>
  <Progress value={55} />
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-3 rounded-lg border p-4">
            <div className="flex justify-between">
              <span className="font-medium">Storage</span>
              <span className="text-muted-foreground text-sm">
                8.2 GB / 15 GB
              </span>
            </div>
            <Progress value={55} />
          </div>
        ),
      },
    ],
  },
});
