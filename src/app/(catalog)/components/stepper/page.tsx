"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const steps = ["Account", "Profile", "Review"];

export default function StepperPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [currentStep, setCurrentStep] = useState(1);

  const previewCode = `<div className="flex items-center gap-2">
  {steps.map((step, i) => (
    <div key={step} className="flex items-center">
      <div className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full",
        i < currentStep ? "bg-primary text-white" : "bg-muted"
      )}>
        {i < currentStep ? <Check /> : i + 1}
      </div>
      <span className="ml-2">{step}</span>
      {i < steps.length - 1 && <div className="mx-4 h-px w-8 bg-border" />}
    </div>
  ))}
</div>`;

  return (
    <ComponentPage
      title="Stepper"
      description="단계별 진행 상태를 표시하는 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="space-y-4">
          <div className="flex items-center">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    i < currentStep
                      ? "bg-primary text-primary-foreground"
                      : i === currentStep
                        ? "border-primary text-primary border-2"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${i <= currentStep ? "font-medium" : "text-muted-foreground"}`}
                >
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-4 h-px w-12 ${i < currentStep ? "bg-primary" : "bg-border"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() =>
                setCurrentStep(Math.min(steps.length, currentStep + 1))
              }
              disabled={currentStep === steps.length}
            >
              Next
            </Button>
          </div>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click Next/Previous to navigate steps.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Checkout Steps"
            code={`<div className="flex justify-between">
  {["Cart", "Shipping", "Payment", "Confirm"].map((step, i) => (
    <div key={step} className="flex flex-col items-center">
      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
        {i + 1}
      </div>
      <span className="mt-1 text-xs">{step}</span>
    </div>
  ))}
</div>`}
          >
            <div className="flex w-full max-w-md justify-between">
              {["Cart", "Shipping", "Payment", "Confirm"].map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                      i < 2
                        ? "bg-primary text-white"
                        : i === 2
                          ? "border-primary text-primary border-2"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < 2 ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className="mt-1 text-xs">{step}</span>
                </div>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard
            title="Vertical Stepper"
            code={`<div className="space-y-4">
  {steps.map((step, i) => (
    <div key={step} className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="h-8 w-8 rounded-full bg-primary" />
        {i < steps.length - 1 && <div className="h-8 w-px bg-border" />}
      </div>
      <div>
        <div className="font-medium">{step.title}</div>
        <div className="text-sm text-muted-foreground">{step.description}</div>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="space-y-0">
              {[
                {
                  title: "Account Created",
                  desc: "Your account has been set up",
                },
                { title: "Profile Complete", desc: "Add your details" },
                { title: "Verification", desc: "Verify your email" },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        i === 0
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i === 0 ? <Check className="h-3 w-3" /> : i + 1}
                    </div>
                    {i < 2 && <div className="bg-border h-8 w-px" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-muted-foreground text-xs">
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
