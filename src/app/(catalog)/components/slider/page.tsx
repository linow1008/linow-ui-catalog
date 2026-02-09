"use client";

import { useState } from "react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const stepOptions = ["1", "5", "10", "25"] as const;

interface SliderState {
  theme: string;
  step: string;
  disabled: boolean;
}

function VolumeSlider() {
  const [volume, setVolume] = useState([75]);
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex justify-between">
        <Label>Volume</Label>
        <span className="text-muted-foreground text-sm">{volume}%</span>
      </div>
      <Slider value={volume} onValueChange={setVolume} max={100} />
    </div>
  );
}

function PriceRangeSlider() {
  const [range, setRange] = useState([20, 80]);
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label>Price Range</Label>
      <Slider value={range} onValueChange={setRange} max={100} step={5} />
      <div className="text-muted-foreground flex justify-between text-sm">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
}

function InteractiveSlider({
  step,
  disabled,
}: {
  step: number;
  disabled: boolean;
}) {
  const [value, setValue] = useState([50]);
  return (
    <div className="w-full max-w-xs space-y-2">
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={step}
        disabled={disabled}
      />
      <p className="text-muted-foreground text-center text-sm">{value[0]}%</p>
    </div>
  );
}

export default createComponentPage<SliderState>({
  id: "slider",
  title: "Slider",
  description: "범위 선택을 위한 슬라이더 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "dropdown",
      key: "step",
      label: "Step",
      options: stepOptions,
      defaultValue: "1",
    },
    { type: "divider" },
    { type: "section", title: "States" },
    { type: "switch", key: "disabled", label: "Disabled", defaultValue: false },
  ],
  preview: {
    render: (state) => (
      <InteractiveSlider step={Number(state.step)} disabled={state.disabled} />
    ),
    generateCode: (state) => {
      const builder = props()
        .addRaw("value={[50]}")
        .addRaw("max={100}")
        .add("step", `{${state.step}}`, "{1}")
        .addFlag("disabled", state.disabled);
      return `<Slider${builder.propsString()} />`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Volume Control",
        code: `const [volume, setVolume] = useState([75]);

<div className="space-y-2">
  <div className="flex justify-between">
    <Label>Volume</Label>
    <span className="text-muted-foreground text-sm">{volume}%</span>
  </div>
  <Slider value={volume} onValueChange={setVolume} max={100} />
</div>`,
        component: VolumeSlider,
      },
      {
        title: "Price Range",
        code: `const [range, setRange] = useState([20, 80]);

<div className="space-y-2">
  <Label>Price Range</Label>
  <Slider value={range} onValueChange={setRange} max={100} step={5} />
  <div className="flex justify-between text-sm text-muted-foreground">
    <span>$\{range[0]}</span>
    <span>$\{range[1]}</span>
  </div>
</div>`,
        component: PriceRangeSlider,
      },
      {
        title: "With Steps",
        code: `<div className="space-y-4">
  <Slider defaultValue={[50]} max={100} step={25} />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>0</span>
    <span>25</span>
    <span>50</span>
    <span>75</span>
    <span>100</span>
  </div>
</div>`,
        content: (
          <div className="w-full max-w-xs space-y-4">
            <Slider defaultValue={[50]} max={100} step={25} />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        ),
      },
    ],
  },
});
