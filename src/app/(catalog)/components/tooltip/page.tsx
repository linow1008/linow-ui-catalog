"use client";

import { HelpCircleIcon, InfoIcon } from "lucide-react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sides = ["top", "right", "bottom", "left"] as const;

interface TooltipState {
  theme: string;
  text: string;
  side: string;
}

export default createComponentPage<TooltipState>({
  id: "tooltip",
  title: "Tooltip",
  description: "호버 시 추가 정보를 표시하는 툴팁 컴포넌트",
  controls: [
    { type: "theme", key: "theme" },
    { type: "divider" },
    {
      type: "input",
      key: "text",
      label: "Text",
      defaultValue: "Tooltip content",
    },
    {
      type: "dropdown",
      key: "side",
      label: "Side",
      options: sides,
      defaultValue: "top",
    },
  ],
  preview: {
    render: (state) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent
            side={state.side as "top" | "right" | "bottom" | "left"}
          >
            <p>{state.text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    generateCode: (state) => {
      const builder = props().add("side", state.side, "top");
      return `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent${builder.propsString()}>
      <p>${state.text}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Icon Button with Tooltip",
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <HelpCircleIcon className="size-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Help & Support</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
        content: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HelpCircleIcon className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Help & Support</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      },
      {
        title: "Info Tooltip",
        code: `<div className="flex items-center gap-1">
  <span className="text-sm">Storage</span>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <InfoIcon className="size-3.5 text-muted-foreground cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <p>You have 5GB of storage remaining</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</div>`,
        content: (
          <div className="flex items-center gap-1">
            <span className="text-sm">Storage</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="text-muted-foreground size-3.5 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>You have 5GB of storage remaining</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ),
      },
      {
        title: "Disabled Button Tooltip",
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <span>
        <Button disabled>Submit</Button>
      </span>
    </TooltipTrigger>
    <TooltipContent>
      <p>Please fill in all required fields</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
        content: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button disabled>Submit</Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Please fill in all required fields</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      },
    ],
  },
});
