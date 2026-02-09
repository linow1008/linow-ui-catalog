"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectState {
  theme: string;
  placeholder: string;
  disabled: boolean;
}

export default createComponentPage<SelectState>({
  id: "select",
  title: "Select",
  description: "드롭다운 형태의 선택 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "input",
      key: "placeholder",
      label: "Placeholder",
      defaultValue: "Select an option",
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
  ],
  preview: {
    render: (state) => (
      <Select disabled={state.disabled}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder={state.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    ),
    generateCode: (state) => {
      const builder = props().addFlag("disabled", state.disabled);
      return `<Select${builder.propsString()}>
  <SelectTrigger>
    <SelectValue placeholder="${state.placeholder}" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "With Label",
        code: `<div className="space-y-2">
  <label className="text-sm font-medium">Country</label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="kr">South Korea</SelectItem>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="jp">Japan</SelectItem>
    </SelectContent>
  </Select>
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-2">
            <label className="text-sm font-medium">Country</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kr">South Korea</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
      },
      {
        title: "With Disabled Items",
        code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select plan" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="free">Free</SelectItem>
    <SelectItem value="pro">Pro</SelectItem>
    <SelectItem value="enterprise" disabled>
      Enterprise (Coming soon)
    </SelectItem>
  </SelectContent>
</Select>`,
        content: (
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
              <SelectItem value="enterprise" disabled>
                Enterprise (Coming soon)
              </SelectItem>
            </SelectContent>
          </Select>
        ),
      },
      {
        title: "Form Row",
        code: `<div className="flex items-center gap-4">
  <Select>
    <SelectTrigger className="w-32">
      <SelectValue placeholder="Sort by" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="newest">Newest</SelectItem>
      <SelectItem value="oldest">Oldest</SelectItem>
      <SelectItem value="popular">Popular</SelectItem>
    </SelectContent>
  </Select>
  <Select>
    <SelectTrigger className="w-32">
      <SelectValue placeholder="Status" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">All</SelectItem>
      <SelectItem value="active">Active</SelectItem>
      <SelectItem value="archived">Archived</SelectItem>
    </SelectContent>
  </Select>
</div>`,
        content: (
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
      },
    ],
  },
});
