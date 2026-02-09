"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function ToastPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `import { toast } from "sonner";

// Success
toast.success("Changes saved successfully");

// Error
toast.error("Something went wrong");

// Info
toast("Event has been created");

// With description
toast("Event Created", {
  description: "Your event has been scheduled for tomorrow",
});`;

  return (
    <ComponentPage
      title="Toast"
      description="알림 메시지를 표시하는 토스트 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created")}
          >
            Show Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Changes saved")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Something went wrong")}
          >
            Error
          </Button>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click buttons in the preview to show different toast types.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Toast Types"
            code={`// Default
toast("Message sent");

// Success
toast.success("Profile updated");

// Error
toast.error("Failed to save");

// Warning
toast.warning("Please verify your email");

// Info
toast.info("New features available");`}
          >
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast("Message sent")}
              >
                Default
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast.success("Profile updated")}
              >
                Success
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast.error("Failed to save")}
              >
                Error
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast.warning("Please verify your email")}
              >
                Warning
              </Button>
            </div>
          </ExampleCard>

          <ExampleCard
            title="With Description"
            code={`toast("Event Created", {
  description: "Your event has been scheduled for tomorrow at 10:00 AM",
});`}
          >
            <Button
              variant="outline"
              onClick={() =>
                toast("Event Created", {
                  description:
                    "Your event has been scheduled for tomorrow at 10:00 AM",
                })
              }
            >
              With Description
            </Button>
          </ExampleCard>

          <ExampleCard
            title="With Action"
            code={`toast("File deleted", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
});`}
          >
            <Button
              variant="outline"
              onClick={() =>
                toast("File deleted", {
                  action: {
                    label: "Undo",
                    onClick: () => toast("Restored!"),
                  },
                })
              }
            >
              With Action
            </Button>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
