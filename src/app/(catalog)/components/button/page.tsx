"use client";

import {
  ArrowRightIcon,
  BellIcon,
  CheckIcon,
  CopyIcon,
  EditIcon,
  Loader2Icon,
  MailIcon,
  MessageSquareIcon,
  PlusIcon,
  SendIcon,
  ShoppingCartIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Button } from "@/components/ui/button";

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

const buttonSizes = [
  "xs",
  "sm",
  "default",
  "lg",
  "icon-xs",
  "icon-sm",
  "icon",
  "icon-lg",
] as const;

interface ButtonState {
  theme: string;
  variant: string;
  size: string;
  text: string;
  showIcon: boolean;
  iconPosition: string;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
}

export default createComponentPage<ButtonState>({
  id: "button",
  title: "Button",
  description: "다양한 스타일과 상태를 가진 버튼 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "variant",
      label: "Variant",
      options: buttonVariants,
      defaultValue: "default",
    },
    {
      type: "dropdown",
      key: "size",
      label: "Size",
      options: buttonSizes,
      defaultValue: "default",
    },
    { type: "divider" },
    { type: "section", title: "Content" },
    { type: "input", key: "text", label: "Text", defaultValue: "Button" },
    {
      type: "switch",
      key: "showIcon",
      label: "Show Icon",
      defaultValue: false,
    },
    {
      type: "dropdown",
      key: "iconPosition",
      label: "Icon Position",
      options: ["left", "right"] as const,
      defaultValue: "left",
      visible: (state) => state.showIcon === true,
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
    { type: "switch", key: "loading", label: "Loading", defaultValue: false },
    {
      type: "switch",
      key: "fullWidth",
      label: "Full Width",
      defaultValue: false,
    },
  ],
  preview: {
    render: (state) => {
      const isIconSize = state.size.startsWith("icon");
      return (
        <Button
          variant={state.variant as (typeof buttonVariants)[number]}
          size={state.size as (typeof buttonSizes)[number]}
          disabled={state.disabled || state.loading}
          className={state.fullWidth ? "w-full max-w-xs" : ""}
        >
          {state.loading && <Loader2Icon className="animate-spin" />}
          {!state.loading &&
            state.showIcon &&
            state.iconPosition === "left" &&
            !isIconSize && <MailIcon />}
          {isIconSize ? state.loading ? null : <PlusIcon /> : state.text}
          {!state.loading &&
            state.showIcon &&
            state.iconPosition === "right" &&
            !isIconSize && <ArrowRightIcon />}
        </Button>
      );
    },
    generateCode: (state) => {
      const isIconSize = state.size.startsWith("icon");
      const builder = props()
        .add("variant", state.variant, "default")
        .add("size", state.size, "default")
        .addFlag("disabled", state.disabled || state.loading)
        .addClassName("w-full", state.fullWidth);

      let children = "";
      if (state.loading) {
        children = `\n  <Loader2Icon className="animate-spin" />\n  ${isIconSize ? "" : state.text}`;
      } else if (isIconSize) {
        children = "\n  <PlusIcon />";
      } else if (state.showIcon && state.iconPosition === "left") {
        children = `\n  <MailIcon />\n  ${state.text}`;
      } else if (state.showIcon && state.iconPosition === "right") {
        children = `\n  ${state.text}\n  <ArrowRightIcon />`;
      } else {
        children = state.text;
      }

      return `<Button${builder.propsString()}>${children.includes("\n") ? children + "\n" : children}</Button>`;
    },
  },
  examples: [
    {
      title: "Real World Examples",
      examples: [
        {
          title: "Dialog Footer",
          code: `<div className="flex justify-end gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Confirm</Button>
</div>`,
          content: (
            <div className="bg-muted/30 flex w-full justify-end gap-2 rounded-md border p-4">
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </div>
          ),
        },
        {
          title: "Form Actions",
          code: `<div className="flex items-center justify-between">
  <Button variant="ghost" size="sm">
    <ArrowLeftIcon />
    Back
  </Button>
  <div className="flex gap-2">
    <Button variant="outline">Save as Draft</Button>
    <Button>
      <SendIcon />
      Submit
    </Button>
  </div>
</div>`,
          content: (
            <div className="bg-muted/30 flex w-full items-center justify-between rounded-md border p-4">
              <Button variant="ghost" size="sm">
                <ArrowRightIcon className="rotate-180" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>
                  <SendIcon />
                  Submit
                </Button>
              </div>
            </div>
          ),
        },
        {
          title: "Card Actions",
          code: `<div className="flex gap-2">
  <Button variant="outline" size="sm">
    <EditIcon />
    Edit
  </Button>
  <Button variant="outline" size="sm">
    <CopyIcon />
    Duplicate
  </Button>
  <Button variant="ghost" size="sm" className="ml-auto">
    <TrashIcon />
  </Button>
</div>`,
          content: (
            <div className="bg-muted/30 w-full rounded-md border p-4">
              <div className="mb-3">
                <h4 className="font-medium">Project Alpha</h4>
                <p className="text-muted-foreground text-sm">
                  Last updated 2 hours ago
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <EditIcon />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <CopyIcon />
                  Duplicate
                </Button>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <TrashIcon />
                </Button>
              </div>
            </div>
          ),
        },
        {
          title: "Empty State CTA",
          code: `<div className="flex flex-col items-center justify-center gap-4 p-8">
  <div className="text-center">
    <h4 className="font-medium">No projects yet</h4>
    <p className="text-muted-foreground text-sm">
      Get started by creating your first project
    </p>
  </div>
  <Button size="lg">
    <PlusIcon />
    Create Project
  </Button>
</div>`,
          content: (
            <div className="bg-muted/30 flex w-full flex-col items-center justify-center gap-4 rounded-md border p-8">
              <div className="text-center">
                <h4 className="font-medium">No projects yet</h4>
                <p className="text-muted-foreground text-sm">
                  Get started by creating your first project
                </p>
              </div>
              <Button size="lg">
                <PlusIcon />
                Create Project
              </Button>
            </div>
          ),
        },
        {
          title: "Success Actions",
          code: `<Button className="bg-green-600 hover:bg-green-600/90">
  <CheckIcon />
  Approved
</Button>

<Button
  variant="outline"
  className="border-green-600 text-green-600 hover:bg-green-50"
>
  <CheckIcon />
  Complete
</Button>`,
          content: (
            <>
              <Button className="bg-green-600 hover:bg-green-600/90">
                <CheckIcon />
                Approved
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <CheckIcon />
                Complete
              </Button>
            </>
          ),
        },
        {
          title: "Destructive Actions",
          code: `<Button variant="destructive">
  <TrashIcon />
  Delete Account
</Button>

<Button
  variant="outline"
  className="border-destructive text-destructive hover:bg-destructive/10"
>
  <XIcon />
  Remove
</Button>

<Button
  variant="ghost"
  className="text-destructive hover:bg-destructive/10 hover:text-destructive"
>
  <TrashIcon />
  Delete
</Button>`,
          content: (
            <>
              <Button variant="destructive">
                <TrashIcon />
                Delete Account
              </Button>
              <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive/10"
              >
                <XIcon />
                Remove
              </Button>
              <Button
                variant="ghost"
                className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <TrashIcon />
                Delete
              </Button>
            </>
          ),
        },
      ],
    },
    {
      title: "Badge / Counter",
      examples: [
        {
          title: "Counter Badge",
          code: `<Button>
  <ShoppingCartIcon />
  장바구니
  <span className="bg-primary-foreground text-primary ml-1 flex size-5 items-center justify-center rounded-full text-xs font-semibold">
    3
  </span>
</Button>

<Button variant="outline">
  <ShoppingCartIcon />
  Cart
  <span className="bg-primary text-primary-foreground ml-1 flex size-5 items-center justify-center rounded-full text-xs font-semibold">
    12
  </span>
</Button>

<Button variant="secondary">
  <BellIcon />
  알림
  <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
    5
  </span>
</Button>`,
          content: (
            <>
              <Button>
                <ShoppingCartIcon />
                장바구니
                <span className="bg-primary-foreground text-primary ml-1 flex size-5 items-center justify-center rounded-full text-xs font-semibold">
                  3
                </span>
              </Button>
              <Button variant="outline">
                <ShoppingCartIcon />
                Cart
                <span className="bg-primary text-primary-foreground ml-1 flex size-5 items-center justify-center rounded-full text-xs font-semibold">
                  12
                </span>
              </Button>
              <Button variant="secondary">
                <BellIcon />
                알림
                <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                  5
                </span>
              </Button>
            </>
          ),
        },
        {
          title: "Dot & Text Badge",
          code: `<Button variant="ghost">
  <MessageSquareIcon />
  메시지
  <span className="ml-1 size-2 rounded-full bg-red-500" />
</Button>

<Button variant="outline">
  <MailIcon />
  Inbox
  <span className="text-muted-foreground ml-1 text-xs">(99+)</span>
</Button>

<Button size="sm" variant="secondary">
  <BellIcon />
  Notifications
  <span className="ml-1 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
    NEW
  </span>
</Button>`,
          content: (
            <>
              <Button variant="ghost">
                <MessageSquareIcon />
                메시지
                <span className="ml-1 size-2 rounded-full bg-red-500" />
              </Button>
              <Button variant="outline">
                <MailIcon />
                Inbox
                <span className="text-muted-foreground ml-1 text-xs">
                  (99+)
                </span>
              </Button>
              <Button size="sm" variant="secondary">
                <BellIcon />
                Notifications
                <span className="ml-1 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  NEW
                </span>
              </Button>
            </>
          ),
        },
      ],
    },
    {
      title: "Bottom Sticky (Mobile)",
      description: "모바일 뷰포트 하단에 고정되는 Full Width 버튼",
      examples: [
        {
          title: "Single CTA",
          code: `{/* Bottom Sticky Container */}
<div className="fixed bottom-0 left-0 right-0 border-t bg-background p-4">
  <Button className="w-full" size="lg">
    다음 단계로
    <ArrowRightIcon />
  </Button>
</div>`,
          content: (
            <div className="bg-muted/30 w-full max-w-sm rounded-lg border p-4">
              <Button className="w-full" size="lg">
                다음 단계로
                <ArrowRightIcon />
              </Button>
            </div>
          ),
        },
        {
          title: "Dual CTA",
          code: `{/* Bottom Sticky Container */}
<div className="fixed bottom-0 left-0 right-0 flex gap-3 border-t bg-background p-4">
  <Button variant="outline" className="flex-1">
    이전
  </Button>
  <Button className="flex-1">다음</Button>
</div>`,
          content: (
            <div className="bg-muted/30 flex w-full max-w-sm gap-3 rounded-lg border p-4">
              <Button variant="outline" className="flex-1">
                이전
              </Button>
              <Button className="flex-1">다음</Button>
            </div>
          ),
        },
      ],
    },
    {
      title: "Safe Area (iOS)",
      description: "아이폰 Home Indicator 영역을 고려한 하단 패딩",
      examples: [
        {
          title: "Safe Area Bottom",
          code: `{/* CSS in globals.css */}
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

{/* Usage */}
<div className="fixed bottom-0 left-0 right-0 border-t bg-background p-4 pb-safe">
  <Button className="w-full" size="lg">
    구매하기
  </Button>
</div>`,
          content: (
            <div className="bg-muted/30 w-full max-w-sm rounded-lg border p-4 pb-8">
              <Button className="w-full">확인</Button>
              <p className="text-muted-foreground mt-4 text-center text-[10px]">
                padding-bottom: env(safe-area-inset-bottom)
              </p>
            </div>
          ),
        },
      ],
    },
  ],
});
