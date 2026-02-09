"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import { Separator } from "@/components/ui/separator";

const orientations = ["horizontal", "vertical"] as const;

interface SeparatorState {
  theme: string;
  orientation: string;
}

export default createComponentPage<SeparatorState>({
  id: "separator",
  title: "Separator",
  description: "콘텐츠를 구분하는 구분선 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "orientation",
      label: "Orientation",
      options: orientations,
      defaultValue: "horizontal",
    },
  ],
  preview: {
    render: (state) =>
      state.orientation === "horizontal" ? (
        <div className="w-full max-w-xs">
          <p className="text-sm">Content above</p>
          <Separator className="my-4" />
          <p className="text-sm">Content below</p>
        </div>
      ) : (
        <div className="flex h-16 items-center gap-4">
          <p className="text-sm">Left</p>
          <Separator orientation="vertical" />
          <p className="text-sm">Right</p>
        </div>
      ),
    generateCode: (state) => {
      const builder = props().add(
        "orientation",
        state.orientation,
        "horizontal",
      );
      return `<Separator${builder.propsString()} />`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Settings Section",
        code: `<div className="space-y-4">
  <div>
    <h4 className="font-medium">Profile</h4>
    <p className="text-muted-foreground text-sm">Manage your profile settings</p>
  </div>
  <Separator />
  <div>
    <h4 className="font-medium">Notifications</h4>
    <p className="text-muted-foreground text-sm">Configure notification preferences</p>
  </div>
</div>`,
        content: (
          <div className="w-full max-w-sm space-y-4">
            <div>
              <h4 className="font-medium">Profile</h4>
              <p className="text-muted-foreground text-sm">
                Manage your profile settings
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-medium">Notifications</h4>
              <p className="text-muted-foreground text-sm">
                Configure notification preferences
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Inline Actions",
        code: `<div className="flex items-center gap-4 text-sm">
  <a href="#" className="text-primary hover:underline">Edit</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="#" className="text-primary hover:underline">Duplicate</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="#" className="text-destructive hover:underline">Delete</a>
</div>`,
        content: (
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-primary hover:underline">
              Edit
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-primary hover:underline">
              Duplicate
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-destructive hover:underline">
              Delete
            </a>
          </div>
        ),
      },
      {
        title: "With Label",
        code: `<div className="flex items-center gap-4">
  <Separator className="flex-1" />
  <span className="text-muted-foreground text-xs">OR</span>
  <Separator className="flex-1" />
</div>`,
        content: (
          <div className="flex w-full max-w-xs items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-muted-foreground text-xs">OR</span>
            <Separator className="flex-1" />
          </div>
        ),
      },
    ],
  },
});
