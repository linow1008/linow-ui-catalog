"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SwitchState {
  theme: string;
  label: string;
  checked: boolean;
  disabled: boolean;
}

export default createComponentPage<SwitchState>({
  id: "switch",
  title: "Switch",
  description: "토글 스위치 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "input",
      key: "label",
      label: "Label",
      defaultValue: "Airplane Mode",
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "checked", label: "On", defaultValue: false },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
  ],
  preview: {
    render: (state) => (
      <div className="flex items-center gap-2">
        <Switch id="mode" checked={state.checked} disabled={state.disabled} />
        <Label htmlFor="mode">{state.label}</Label>
      </div>
    ),
    generateCode: (state) => {
      const builder = props()
        .addRaw('id="mode"')
        .addFlag("checked", state.checked)
        .addFlag("disabled", state.disabled);

      return `<div className="flex items-center gap-2">
  <Switch${builder.propsString()} />
  <Label htmlFor="mode">${state.label}</Label>
</div>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Settings List",
        code: `<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="notifications">Push Notifications</Label>
    <Switch id="notifications" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="marketing">Marketing Emails</Label>
    <Switch id="marketing" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="updates">Product Updates</Label>
    <Switch id="updates" defaultChecked />
  </div>
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Push Notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing">Marketing Emails</Label>
              <Switch id="marketing" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="updates">Product Updates</Label>
              <Switch id="updates" defaultChecked />
            </div>
          </div>
        ),
      },
      {
        title: "With Description",
        code: `<div className="flex items-center justify-between gap-4">
  <div className="space-y-0.5">
    <Label htmlFor="darkmode">Dark Mode</Label>
    <p className="text-muted-foreground text-xs">
      Enable dark mode for better night viewing
    </p>
  </div>
  <Switch id="darkmode" />
</div>`,
        content: (
          <div className="flex w-full max-w-sm items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="darkmode">Dark Mode</Label>
              <p className="text-muted-foreground text-xs">
                Enable dark mode for better night viewing
              </p>
            </div>
            <Switch id="darkmode" />
          </div>
        ),
      },
      {
        title: "Card Setting",
        code: `<div className="rounded-lg border p-4">
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <p className="font-medium">Auto-save</p>
      <p className="text-muted-foreground text-sm">
        Automatically save changes as you edit
      </p>
    </div>
    <Switch defaultChecked />
  </div>
</div>`,
        content: (
          <div className="w-full max-w-sm rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium">Auto-save</p>
                <p className="text-muted-foreground text-sm">
                  Automatically save changes as you edit
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        ),
      },
    ],
  },
});
