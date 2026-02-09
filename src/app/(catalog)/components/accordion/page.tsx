"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const types = ["single", "multiple"] as const;
type AccordionType = (typeof types)[number];

export default function AccordionPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [type, setType] = useState<AccordionType>("single");

  const previewCode = `<Accordion type="${type}"${type === "single" ? " collapsible" : ""}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Content for section 1
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Content for section 2
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

  return (
    <ComponentPage
      title="Accordion"
      description="접을 수 있는 콘텐츠 섹션 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        type === "single" ? (
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Section 1</AccordionTrigger>
              <AccordionContent>
                Content for section 1. This is the expanded content area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Section 2</AccordionTrigger>
              <AccordionContent>
                Content for section 2. This is the expanded content area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Section 3</AccordionTrigger>
              <AccordionContent>
                Content for section 3. This is the expanded content area.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Accordion type="multiple" className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Section 1</AccordionTrigger>
              <AccordionContent>
                Content for section 1. This is the expanded content area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Section 2</AccordionTrigger>
              <AccordionContent>
                Content for section 2. This is the expanded content area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Section 3</AccordionTrigger>
              <AccordionContent>
                Content for section 3. This is the expanded content area.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />

          <ControlDivider />

          <ControlDropdown
            label="Type"
            value={type}
            options={[...types]}
            onChange={setType}
          />
        </>
      }
    >
      {/* Real World Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="FAQ"
            code={`<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
    <AccordionContent>
      You can cancel your subscription at any time from your account settings.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
    <AccordionContent>
      Yes, we offer a 30-day money-back guarantee on all plans.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  How do I cancel my subscription?
                </AccordionTrigger>
                <AccordionContent>
                  You can cancel your subscription at any time from your account
                  settings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee on all plans.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ExampleCard>

          <ExampleCard
            title="Settings Sections"
            code={`<Accordion type="multiple" defaultValue={["general"]}>
  <AccordionItem value="general">
    <AccordionTrigger>General Settings</AccordionTrigger>
    <AccordionContent>
      Configure your general preferences here.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="notifications">
    <AccordionTrigger>Notifications</AccordionTrigger>
    <AccordionContent>
      Manage your notification preferences.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="privacy">
    <AccordionTrigger>Privacy & Security</AccordionTrigger>
    <AccordionContent>
      Update your privacy and security settings.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion
              type="multiple"
              defaultValue={["general"]}
              className="w-full max-w-md"
            >
              <AccordionItem value="general">
                <AccordionTrigger>General Settings</AccordionTrigger>
                <AccordionContent>
                  Configure your general preferences here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="notifications">
                <AccordionTrigger>Notifications</AccordionTrigger>
                <AccordionContent>
                  Manage your notification preferences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="privacy">
                <AccordionTrigger>Privacy & Security</AccordionTrigger>
                <AccordionContent>
                  Update your privacy and security settings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
