"use client";

import { useState } from "react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Textarea } from "@/components/ui/textarea";

const resizeOptions = ["none", "vertical", "horizontal", "both"] as const;
const rowOptions = ["3", "4", "5", "6"] as const;

interface TextareaState {
  theme: string;
  placeholder: string;
  rows: string;
  resize: string;
  disabled: boolean;
  readOnly: boolean;
}

function CharacterCountTextarea() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="w-full max-w-sm space-y-1.5">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Write your bio..."
      />
      <p className="text-muted-foreground text-right text-xs">
        {value.length}/{maxLength}
      </p>
    </div>
  );
}

export default createComponentPage<TextareaState>({
  id: "textarea",
  title: "Textarea",
  description: "여러 줄의 텍스트 입력을 위한 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "input",
      key: "placeholder",
      label: "Placeholder",
      defaultValue: "Enter your message...",
    },
    {
      type: "dropdown",
      key: "rows",
      label: "Rows",
      options: rowOptions,
      defaultValue: "4",
    },
    {
      type: "dropdown",
      key: "resize",
      label: "Resize",
      options: resizeOptions,
      defaultValue: "vertical",
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
    {
      type: "switch",
      key: "readOnly",
      label: "Read Only",
      defaultValue: false,
    },
  ],
  preview: {
    render: (state) => {
      const resizeClass =
        state.resize === "none"
          ? "resize-none"
          : state.resize === "horizontal"
            ? "resize-x"
            : state.resize === "both"
              ? "resize"
              : "";
      return (
        <Textarea
          placeholder={state.placeholder}
          rows={Number(state.rows)}
          disabled={state.disabled}
          readOnly={state.readOnly}
          className={`max-w-sm ${resizeClass}`}
        />
      );
    },
    generateCode: (state) => {
      const builder = props()
        .addRaw(`placeholder="${state.placeholder}"`)
        .add("rows", `{${state.rows}}`, "{4}")
        .addFlag("disabled", state.disabled)
        .addFlag("readOnly", state.readOnly);

      if (state.resize !== "vertical") {
        builder.addClassName(`resize-${state.resize}`);
      }

      return `<Textarea${builder.propsString()} />`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "With Character Count",
        code: `const [value, setValue] = useState("");
const maxLength = 200;

<div className="space-y-1.5">
  <Textarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxLength}
    placeholder="Write your bio..."
  />
  <p className="text-muted-foreground text-xs text-right">
    {value.length}/{maxLength}
  </p>
</div>`,
        component: CharacterCountTextarea,
      },
      {
        title: "With Label",
        code: `<div className="space-y-2">
  <label className="text-sm font-medium">
    Message
  </label>
  <Textarea placeholder="Type your message here..." />
  <p className="text-muted-foreground text-xs">
    Your message will be sent to the support team.
  </p>
</div>`,
        content: (
          <div className="w-full max-w-sm space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea placeholder="Type your message here..." />
            <p className="text-muted-foreground text-xs">
              Your message will be sent to the support team.
            </p>
          </div>
        ),
      },
      {
        title: "Error State",
        code: `<div className="space-y-1.5">
  <Textarea
    placeholder="Description"
    className="border-destructive focus-visible:ring-destructive"
  />
  <p className="text-destructive text-xs">
    Description is required
  </p>
</div>`,
        content: (
          <div className="w-full max-w-sm space-y-1.5">
            <Textarea
              placeholder="Description"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-destructive text-xs">Description is required</p>
          </div>
        ),
      },
    ],
  },
});
