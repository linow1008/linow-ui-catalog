"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Toggle } from "@/components/ui/toggle";

const variants = ["default", "outline"] as const;
const sizes = ["sm", "default", "lg"] as const;

interface ToggleState {
  theme: string;
  variant: string;
  size: string;
  pressed: boolean;
  disabled: boolean;
}

export default createComponentPage<ToggleState>({
  id: "toggle",
  title: "Toggle",
  description: "토글 버튼 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "variant",
      label: "Variant",
      options: variants,
      defaultValue: "default",
    },
    {
      type: "dropdown",
      key: "size",
      label: "Size",
      options: sizes,
      defaultValue: "default",
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "pressed", label: "Pressed", defaultValue: false },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
  ],
  preview: {
    render: (state) => (
      <Toggle
        variant={state.variant as "default" | "outline"}
        size={state.size as "sm" | "default" | "lg"}
        pressed={state.pressed}
        disabled={state.disabled}
      >
        <BoldIcon className="size-4" />
      </Toggle>
    ),
    generateCode: (state) => {
      const builder = props()
        .add("variant", state.variant, "default")
        .add("size", state.size, "default")
        .addFlag("pressed", state.pressed)
        .addFlag("disabled", state.disabled);
      return `<Toggle${builder.propsString()}>
  <BoldIcon className="size-4" />
</Toggle>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Text Formatting",
        code: `<div className="flex gap-1">
  <Toggle aria-label="Bold">
    <BoldIcon className="size-4" />
  </Toggle>
  <Toggle aria-label="Italic">
    <ItalicIcon className="size-4" />
  </Toggle>
  <Toggle aria-label="Underline">
    <UnderlineIcon className="size-4" />
  </Toggle>
</div>`,
        content: (
          <div className="flex gap-1">
            <Toggle aria-label="Bold">
              <BoldIcon className="size-4" />
            </Toggle>
            <Toggle aria-label="Italic">
              <ItalicIcon className="size-4" />
            </Toggle>
            <Toggle aria-label="Underline">
              <UnderlineIcon className="size-4" />
            </Toggle>
          </div>
        ),
      },
      {
        title: "Outline Variant",
        code: `<div className="flex gap-1">
  <Toggle variant="outline" aria-label="Bold">
    <BoldIcon className="size-4" />
  </Toggle>
  <Toggle variant="outline" aria-label="Italic">
    <ItalicIcon className="size-4" />
  </Toggle>
  <Toggle variant="outline" aria-label="Underline">
    <UnderlineIcon className="size-4" />
  </Toggle>
</div>`,
        content: (
          <div className="flex gap-1">
            <Toggle variant="outline" aria-label="Bold">
              <BoldIcon className="size-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Italic">
              <ItalicIcon className="size-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Underline">
              <UnderlineIcon className="size-4" />
            </Toggle>
          </div>
        ),
      },
      {
        title: "With Text",
        code: `<Toggle>
  <BoldIcon className="size-4" />
  Bold
</Toggle>`,
        content: (
          <Toggle>
            <BoldIcon className="size-4" />
            Bold
          </Toggle>
        ),
      },
    ],
  },
});
