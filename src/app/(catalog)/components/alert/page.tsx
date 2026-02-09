"use client";

import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
} from "lucide-react";

import { createComponentPage, props } from "@/lib/component-factory";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const variants = ["default", "destructive"] as const;

interface AlertState {
  theme: string;
  variant: string;
  title: string;
  description: string;
}

export default createComponentPage<AlertState>({
  id: "alert",
  title: "Alert",
  description: "중요한 메시지를 표시하는 알림 컴포넌트",
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
    { type: "input", key: "title", label: "Title", defaultValue: "Heads up!" },
    {
      type: "input",
      key: "description",
      label: "Description",
      defaultValue: "You can add components to your app using the CLI.",
    },
  ],
  preview: {
    render: (state) => (
      <Alert
        variant={state.variant as "default" | "destructive"}
        className="max-w-md"
      >
        <InfoIcon className="size-4" />
        <AlertTitle>{state.title}</AlertTitle>
        <AlertDescription>{state.description}</AlertDescription>
      </Alert>
    ),
    generateCode: (state) => {
      const builder = props().add("variant", state.variant, "default");
      return `<Alert${builder.propsString()}>
  <InfoIcon className="size-4" />
  <AlertTitle>${state.title}</AlertTitle>
  <AlertDescription>${state.description}</AlertDescription>
</Alert>`;
    },
  },
  examples: {
    title: "Real World Examples",
    examples: [
      {
        title: "Success Alert",
        code: `<Alert className="border-green-500 text-green-500 [&>svg]:text-green-500">
  <CheckCircleIcon className="size-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`,
        content: (
          <Alert className="max-w-md border-green-500 text-green-600 [&>svg]:text-green-500">
            <CheckCircleIcon className="size-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
        ),
      },
      {
        title: "Warning Alert",
        code: `<Alert className="border-yellow-500 text-yellow-600 [&>svg]:text-yellow-500">
  <AlertTriangleIcon className="size-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your session will expire in 5 minutes.
  </AlertDescription>
</Alert>`,
        content: (
          <Alert className="max-w-md border-yellow-500 text-yellow-600 [&>svg]:text-yellow-500">
            <AlertTriangleIcon className="size-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your session will expire in 5 minutes.
            </AlertDescription>
          </Alert>
        ),
      },
      {
        title: "Error Alert",
        code: `<Alert variant="destructive">
  <AlertCircleIcon className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again later.
  </AlertDescription>
</Alert>`,
        content: (
          <Alert variant="destructive" className="max-w-md">
            <AlertCircleIcon className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        ),
      },
      {
        title: "Info Alert",
        code: `<Alert>
  <InfoIcon className="size-4" />
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>
    This feature is currently in beta.
  </AlertDescription>
</Alert>`,
        content: (
          <Alert className="max-w-md">
            <InfoIcon className="size-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              This feature is currently in beta.
            </AlertDescription>
          </Alert>
        ),
      },
    ],
  },
});
