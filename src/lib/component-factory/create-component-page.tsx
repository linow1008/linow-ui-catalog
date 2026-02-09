"use client";

import { useMemo, useState } from "react";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlInput,
  ControlSection,
  ControlSwitch,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

import type {
  ComponentPageConfig,
  ControlDefinition,
  ExampleDefinition,
  ExampleSectionDefinition,
} from "./types";

// ============================================
// State Builder
// ============================================

function buildInitialState(
  controls: ControlDefinition[],
): Record<string, unknown> {
  const state: Record<string, unknown> = {};

  for (const control of controls) {
    if ("key" in control && "defaultValue" in control) {
      state[control.key] = control.defaultValue;
    } else if (control.type === "theme") {
      state.theme = "zinc";
    }
  }

  return state;
}

// ============================================
// Control Renderer
// ============================================

interface ControlRendererProps {
  controls: ControlDefinition[];
  state: Record<string, unknown>;
  setState: (
    updater: (prev: Record<string, unknown>) => Record<string, unknown>,
  ) => void;
}

function ControlRenderer({ controls, state, setState }: ControlRendererProps) {
  const updateState = (key: string, value: unknown) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {controls.map((control, index) => {
        // 가시성 체크
        if (
          "visible" in control &&
          control.visible &&
          !control.visible(state)
        ) {
          return null;
        }

        switch (control.type) {
          case "theme":
            return (
              <ControlTheme
                key={`theme-${index}`}
                value={state.theme as ThemeColor}
                onChange={(v) => updateState("theme", v)}
              />
            );

          case "dropdown":
            return (
              <ControlDropdown
                key={control.key}
                label={control.label}
                value={state[control.key] as string}
                options={[...control.options]}
                onChange={(v) => updateState(control.key, v)}
              />
            );

          case "input":
            return (
              <ControlInput
                key={control.key}
                label={control.label}
                value={state[control.key] as string}
                onChange={(v) => updateState(control.key, v)}
              />
            );

          case "switch":
            return (
              <ControlSwitch
                key={control.key}
                label={control.label}
                checked={state[control.key] as boolean}
                onChange={(v) => updateState(control.key, v)}
              />
            );

          case "divider":
            return <ControlDivider key={`divider-${index}`} />;

          case "section":
            return (
              <ControlSection key={`section-${index}`} title={control.title} />
            );

          default:
            return null;
        }
      })}
    </>
  );
}

// ============================================
// Example Section Renderer
// ============================================

interface ExampleSectionRendererProps {
  section: ExampleSectionDefinition;
}

function ExampleSectionRenderer({ section }: ExampleSectionRendererProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium">{section.title}</h2>
      {section.description && (
        <p className="text-muted-foreground text-xs">{section.description}</p>
      )}
      <div className="space-y-3">
        {section.examples.map((example, index) => (
          <ExampleRenderer key={index} example={example} />
        ))}
      </div>
    </section>
  );
}

interface ExampleRendererProps {
  example: ExampleDefinition;
}

function ExampleRenderer({ example }: ExampleRendererProps) {
  const content = useMemo(() => {
    if (example.component) {
      const Component = example.component;
      return <Component />;
    }
    return example.content;
  }, [example.component, example.content]);

  return (
    <ExampleCard title={example.title} code={example.code}>
      {content}
    </ExampleCard>
  );
}

// ============================================
// Factory Function
// ============================================

export function createComponentPage<TState>(
  config: ComponentPageConfig<TState>,
) {
  return function GeneratedComponentPage() {
    const [state, setState] = useState<Record<string, unknown>>(() =>
      buildInitialState(config.controls),
    );

    const themeStyle = getThemeStyle((state.theme as ThemeColor) || "zinc");
    const previewCode = config.preview.generateCode(state as TState);

    const exampleSections = Array.isArray(config.examples)
      ? config.examples
      : [config.examples];

    return (
      <ComponentPage
        title={config.title}
        description={config.description}
        themeStyle={themeStyle}
        previewCode={previewCode}
        preview={config.preview.render(state as TState, themeStyle)}
        controls={
          <ControlRenderer
            controls={config.controls}
            state={state}
            setState={setState}
          />
        }
      >
        {exampleSections.map((section, index) => (
          <ExampleSectionRenderer key={index} section={section} />
        ))}
      </ComponentPage>
    );
  };
}
