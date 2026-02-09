"use client";

import { useState } from "react";

import { EyeIcon, EyeOffIcon, MailIcon, SearchIcon } from "lucide-react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Input } from "@/components/ui/input";

const inputTypes = [
  "text",
  "email",
  "password",
  "number",
  "search",
  "tel",
  "url",
] as const;

interface InputState {
  theme: string;
  type: string;
  placeholder: string;
  disabled: boolean;
  readOnly: boolean;
}

// 상태가 필요한 예제 컴포넌트
function PasswordInput() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative w-full max-w-xs">
      <Input
        type={show ? "text" : "password"}
        placeholder="Password"
        className="pr-9"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
      >
        {show ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
      </button>
    </div>
  );
}

export default createComponentPage<InputState>({
  id: "input",
  title: "Input",
  description: "텍스트 입력을 위한 기본 입력 필드",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "type",
      label: "Type",
      options: inputTypes,
      defaultValue: "text",
    },
    {
      type: "input",
      key: "placeholder",
      label: "Placeholder",
      defaultValue: "Enter text...",
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
    render: (state) => (
      <Input
        type={state.type}
        placeholder={state.placeholder}
        disabled={state.disabled}
        readOnly={state.readOnly}
        className="max-w-xs"
      />
    ),
    generateCode: (state) => {
      const builder = props()
        .add("type", state.type, "text")
        .addRaw(`placeholder="${state.placeholder}"`)
        .addFlag("disabled", state.disabled)
        .addFlag("readOnly", state.readOnly);
      return `<Input${builder.propsString()} />`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "With Icon (Search)",
        code: `<div className="relative">
  <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-9" />
</div>`,
        content: (
          <div className="relative w-full max-w-xs">
            <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input placeholder="Search..." className="pl-9" />
          </div>
        ),
      },
      {
        title: "With Icon (Email)",
        code: `<div className="relative">
  <MailIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
  <Input type="email" placeholder="Email" className="pl-9" />
</div>`,
        content: (
          <div className="relative w-full max-w-xs">
            <MailIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input type="email" placeholder="Email" className="pl-9" />
          </div>
        ),
      },
      {
        title: "Password with Toggle",
        code: `const [show, setShow] = useState(false);

<div className="relative">
  <Input
    type={show ? "text" : "password"}
    placeholder="Password"
    className="pr-9"
  />
  <button
    type="button"
    onClick={() => setShow(!show)}
    className="absolute right-3 top-1/2 -translate-y-1/2"
  >
    {show ? <EyeOffIcon /> : <EyeIcon />}
  </button>
</div>`,
        component: PasswordInput,
      },
      {
        title: "With Error State",
        code: `<div className="space-y-1.5">
  <Input
    placeholder="Email"
    className="border-destructive focus-visible:ring-destructive"
  />
  <p className="text-destructive text-xs">
    Please enter a valid email address
  </p>
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-1.5">
            <Input
              placeholder="Email"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-destructive text-xs">
              Please enter a valid email address
            </p>
          </div>
        ),
      },
    ],
  },
});
