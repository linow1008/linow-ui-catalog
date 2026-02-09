import type { CSSProperties, ComponentType, ReactNode } from "react";

// ============================================
// Control Definitions
// ============================================

export type ControlDefinition =
  | ThemeControl
  | DropdownControl
  | InputControl
  | SwitchControl
  | DividerControl
  | SectionControl;

export interface ThemeControl {
  type: "theme";
  key: "theme";
}

export interface DropdownControl {
  type: "dropdown";
  key: string;
  label: string;
  options: readonly string[];
  defaultValue: string;
  visible?: (state: Record<string, unknown>) => boolean;
}

export interface InputControl {
  type: "input";
  key: string;
  label: string;
  defaultValue: string;
}

export interface SwitchControl {
  type: "switch";
  key: string;
  label: string;
  defaultValue: boolean;
}

export interface DividerControl {
  type: "divider";
}

export interface SectionControl {
  type: "section";
  title: string;
}

// ============================================
// Example Definitions
// ============================================

export interface ExampleDefinition {
  title: string;
  code: string;
  content?: ReactNode;
  component?: ComponentType;
}

export interface ExampleSectionDefinition {
  title: string;
  description?: string;
  examples: ExampleDefinition[];
}

// ============================================
// Page Configuration
// ============================================

export interface ComponentPageConfig<TState = Record<string, unknown>> {
  id: string;
  title: string;
  description: string;
  controls: ControlDefinition[];
  preview: {
    render: (state: TState, themeStyle: CSSProperties) => ReactNode;
    generateCode: (state: TState) => string;
  };
  examples: ExampleSectionDefinition | ExampleSectionDefinition[];
}

// ============================================
// State Types
// ============================================

export type ExtractStateFromControls<T extends readonly ControlDefinition[]> = {
  [K in Extract<T[number], { key: string }>["key"]]: Extract<
    T[number],
    { key: K }
  > extends { type: "switch" }
    ? boolean
    : string;
};
