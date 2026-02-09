"use client";

import { createComponentPage, props } from "@/lib/component-factory";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioGroupState {
  theme: string;
  disabled: boolean;
}

export default createComponentPage<RadioGroupState>({
  id: "radio-group",
  title: "Radio Group",
  description: "라디오 버튼 그룹 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
  ],
  preview: {
    render: (state) => (
      <RadioGroup defaultValue="option-1" disabled={state.disabled}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3">Option 3</Label>
        </div>
      </RadioGroup>
    ),
    generateCode: (state) => {
      const builder = props()
        .addRaw('defaultValue="option-1"')
        .addFlag("disabled", state.disabled);
      return `<RadioGroup${builder.propsString()}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="option-3" />
    <Label htmlFor="option-3">Option 3</Label>
  </div>
</RadioGroup>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Payment Method",
        code: `<RadioGroup defaultValue="card">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="card" id="card" />
    <Label htmlFor="card">Credit Card</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="paypal" id="paypal" />
    <Label htmlFor="paypal">PayPal</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="bank" id="bank" />
    <Label htmlFor="bank">Bank Transfer</Label>
  </div>
</RadioGroup>`,
        content: (
          <RadioGroup defaultValue="card">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit Card</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="bank" id="bank" />
              <Label htmlFor="bank">Bank Transfer</Label>
            </div>
          </RadioGroup>
        ),
      },
      {
        title: "With Description",
        code: `<RadioGroup defaultValue="standard">
  <div className="flex gap-2">
    <RadioGroupItem value="standard" id="standard" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="standard">Standard Shipping</Label>
      <p className="text-muted-foreground text-xs">5-7 business days</p>
    </div>
  </div>
  <div className="flex gap-2">
    <RadioGroupItem value="express" id="express" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="express">Express Shipping</Label>
      <p className="text-muted-foreground text-xs">2-3 business days</p>
    </div>
  </div>
</RadioGroup>`,
        content: (
          <RadioGroup defaultValue="standard">
            <div className="flex gap-2">
              <RadioGroupItem value="standard" id="standard" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="standard">Standard Shipping</Label>
                <p className="text-muted-foreground text-xs">
                  5-7 business days
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <RadioGroupItem value="express" id="express" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="express">Express Shipping</Label>
                <p className="text-muted-foreground text-xs">
                  2-3 business days
                </p>
              </div>
            </div>
          </RadioGroup>
        ),
      },
      {
        title: "Horizontal Layout",
        code: `<RadioGroup defaultValue="sm" className="flex gap-4">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sm" id="sm" />
    <Label htmlFor="sm">Small</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="md" id="md" />
    <Label htmlFor="md">Medium</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="lg" id="lg" />
    <Label htmlFor="lg">Large</Label>
  </div>
</RadioGroup>`,
        content: (
          <RadioGroup defaultValue="sm" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="sm" id="sm" />
              <Label htmlFor="sm">Small</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="md" id="md" />
              <Label htmlFor="md">Medium</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lg" id="lg" />
              <Label htmlFor="lg">Large</Label>
            </div>
          </RadioGroup>
        ),
      },
    ],
  },
});
