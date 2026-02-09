"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxState {
  theme: string;
  label: string;
  checked: boolean;
  disabled: boolean;
}

export default createComponentPage<CheckboxState>({
  id: "checkbox",
  title: "Checkbox",
  description: "체크박스 선택 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "input",
      key: "label",
      label: "Label",
      defaultValue: "Accept terms and conditions",
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "checked", label: "Checked", defaultValue: false },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
  ],
  preview: {
    render: (state) => (
      <div className="flex items-center gap-2">
        <Checkbox
          id="terms"
          checked={state.checked}
          disabled={state.disabled}
        />
        <Label htmlFor="terms">{state.label}</Label>
      </div>
    ),
    generateCode: (state) => {
      const builder = props()
        .addRaw('id="terms"')
        .addFlag("checked", state.checked)
        .addFlag("disabled", state.disabled);

      return `<div className="flex items-center gap-2">
  <Checkbox${builder.propsString()} />
  <Label htmlFor="terms">${state.label}</Label>
</div>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Checkbox Group",
        code: `<div className="space-y-3">
  <div className="flex items-center gap-2">
    <Checkbox id="email" />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="push" />
    <Label htmlFor="push">Push notifications</Label>
  </div>
</div>`,
        content: (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="email" />
              <Label htmlFor="email">Email notifications</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="sms" />
              <Label htmlFor="sms">SMS notifications</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="push" />
              <Label htmlFor="push">Push notifications</Label>
            </div>
          </div>
        ),
      },
      {
        title: "With Description",
        code: `<div className="flex gap-2">
  <Checkbox id="marketing" className="mt-1" />
  <div className="space-y-1">
    <Label htmlFor="marketing">Marketing emails</Label>
    <p className="text-muted-foreground text-xs">
      Receive emails about new products and features.
    </p>
  </div>
</div>`,
        content: (
          <div className="flex gap-2">
            <Checkbox id="marketing" className="mt-1" />
            <div className="space-y-1">
              <Label htmlFor="marketing">Marketing emails</Label>
              <p className="text-muted-foreground text-xs">
                Receive emails about new products and features.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Terms Agreement",
        code: `<div className="flex items-start gap-2">
  <Checkbox id="agree" className="mt-1" />
  <Label htmlFor="agree" className="text-sm leading-relaxed">
    I agree to the{" "}
    <a href="#" className="text-primary underline">
      Terms of Service
    </a>{" "}
    and{" "}
    <a href="#" className="text-primary underline">
      Privacy Policy
    </a>
  </Label>
</div>`,
        content: (
          <div className="flex items-start gap-2">
            <Checkbox id="agree" className="mt-1" />
            <Label htmlFor="agree" className="text-sm leading-relaxed">
              I agree to the{" "}
              <a href="#" className="text-primary underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>
            </Label>
          </div>
        ),
      },
    ],
  },
});
