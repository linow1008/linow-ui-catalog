"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import { Badge } from "@/components/ui/badge";

const badgeVariants = [
  "default",
  "secondary",
  "outline",
  "destructive",
] as const;

interface BadgeState {
  theme: string;
  variant: string;
  text: string;
}

export default createComponentPage<BadgeState>({
  id: "badge",
  title: "Badge",
  description: "상태나 카테고리를 표시하는 뱃지 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "variant",
      label: "Variant",
      options: badgeVariants,
      defaultValue: "default",
    },
    { type: "input", key: "text", label: "Text", defaultValue: "Badge" },
  ],
  preview: {
    render: (state) => (
      <Badge
        variant={
          state.variant as "default" | "secondary" | "outline" | "destructive"
        }
      >
        {state.text}
      </Badge>
    ),
    generateCode: (state) => {
      const builder = props().add("variant", state.variant, "default");
      return `<Badge${builder.propsString()}>${state.text}</Badge>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Status Badges",
        code: `<Badge className="bg-green-500 hover:bg-green-500/80">Active</Badge>
<Badge className="bg-yellow-500 hover:bg-yellow-500/80">Pending</Badge>
<Badge className="bg-red-500 hover:bg-red-500/80">Inactive</Badge>
<Badge variant="outline">Draft</Badge>`,
        content: (
          <>
            <Badge className="bg-green-500 hover:bg-green-500/80">Active</Badge>
            <Badge className="bg-yellow-500 hover:bg-yellow-500/80">
              Pending
            </Badge>
            <Badge className="bg-red-500 hover:bg-red-500/80">Inactive</Badge>
            <Badge variant="outline">Draft</Badge>
          </>
        ),
      },
      {
        title: "Category Tags",
        code: `<div className="flex flex-wrap gap-2">
  <Badge variant="secondary">React</Badge>
  <Badge variant="secondary">TypeScript</Badge>
  <Badge variant="secondary">Tailwind CSS</Badge>
  <Badge variant="secondary">Next.js</Badge>
</div>`,
        content: (
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Next.js</Badge>
          </div>
        ),
      },
      {
        title: "With Count",
        code: `<Badge>12 new</Badge>
<Badge variant="destructive">3 errors</Badge>
<Badge variant="outline">99+ notifications</Badge>`,
        content: (
          <>
            <Badge>12 new</Badge>
            <Badge variant="destructive">3 errors</Badge>
            <Badge variant="outline">99+ notifications</Badge>
          </>
        ),
      },
      {
        title: "In Card Header",
        code: `<div className="rounded-lg border p-4">
  <div className="flex items-center justify-between">
    <h3 className="font-medium">Project Alpha</h3>
    <Badge variant="secondary">In Progress</Badge>
  </div>
  <p className="text-muted-foreground mt-1 text-sm">
    Last updated 2 hours ago
  </p>
</div>`,
        content: (
          <div className="w-full max-w-sm rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Project Alpha</h3>
              <Badge variant="secondary">In Progress</Badge>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              Last updated 2 hours ago
            </p>
          </div>
        ),
      },
      {
        title: "Priority Levels",
        code: `<Badge variant="destructive">High</Badge>
<Badge className="bg-orange-500 hover:bg-orange-500/80">Medium</Badge>
<Badge variant="secondary">Low</Badge>`,
        content: (
          <>
            <Badge variant="destructive">High</Badge>
            <Badge className="bg-orange-500 hover:bg-orange-500/80">
              Medium
            </Badge>
            <Badge variant="secondary">Low</Badge>
          </>
        ),
      },
    ],
  },
});
