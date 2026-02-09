"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sizes = ["sm", "default", "lg"] as const;

const sizeClasses = {
  sm: "size-8",
  default: "size-10",
  lg: "size-14",
};

interface AvatarState {
  theme: string;
  size: string;
  fallback: string;
}

export default createComponentPage<AvatarState>({
  id: "avatar",
  title: "Avatar",
  description: "사용자 프로필 이미지를 표시하는 컴포넌트",
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
    { type: "input", key: "fallback", label: "Fallback", defaultValue: "JD" },
  ],
  preview: {
    render: (state) => (
      <Avatar className={sizeClasses[state.size as keyof typeof sizeClasses]}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>{state.fallback}</AvatarFallback>
      </Avatar>
    ),
    generateCode: (state) => {
      const builder = props();
      if (state.size !== "default") {
        builder.addClassName(
          sizeClasses[state.size as keyof typeof sizeClasses],
        );
      }
      return `<Avatar${builder.propsString()}>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>${state.fallback}</AvatarFallback>
</Avatar>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "User List",
        code: `<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="/user1.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="font-medium">John Doe</p>
    <p className="text-muted-foreground text-sm">john@example.com</p>
  </div>
</div>`,
        content: (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-muted-foreground text-sm">john@example.com</p>
            </div>
          </div>
        ),
      },
      {
        title: "Avatar Stack",
        code: `<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>C</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`,
        content: (
          <div className="flex -space-x-3">
            <Avatar className="border-background border-2">
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
              <AvatarFallback className="text-xs">+3</AvatarFallback>
            </Avatar>
          </div>
        ),
      },
      {
        title: "With Status",
        code: `<div className="relative">
  <Avatar>
    <AvatarImage src="/user.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-green-500" />
</div>`,
        content: (
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="border-background absolute right-0 bottom-0 size-3 rounded-full border-2 bg-green-500" />
          </div>
        ),
      },
      {
        title: "Sizes",
        code: `<Avatar className="size-8">
  <AvatarFallback>SM</AvatarFallback>
</Avatar>
<Avatar className="size-10">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar className="size-14">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>`,
        content: (
          <>
            <Avatar className="size-8">
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar className="size-10">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="size-14">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </>
        ),
      },
    ],
  },
});
