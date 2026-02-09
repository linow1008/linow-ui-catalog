"use client";

import { ChevronLeftIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

// 드롭다운 형식 선택 컨트롤 (카드 클릭 → 왼쪽 메뉴)
export function ControlDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: T[];
  onChange: (val: T) => void;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground text-xs font-medium uppercase">
        {label}
      </Label>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="bg-background hover:bg-muted/50 flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors"
          >
            <span>{value}</span>
            <ChevronLeftIcon className="text-muted-foreground size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="left"
          align="start"
          sideOffset={8}
          className="min-w-[140px]"
        >
          <DropdownMenuRadioGroup
            value={value}
            onValueChange={(v) => onChange(v as T)}
          >
            {options.map((opt) => (
              <DropdownMenuRadioItem key={opt} value={opt}>
                {opt}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// 색상 테마 정의 (OKLCH values for CSS custom properties)
export const themeColors = {
  zinc: {
    label: "Zinc",
    color: "#71717a",
    primary: "oklch(0.442 0.017 285.786)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  slate: {
    label: "Slate",
    color: "#64748b",
    primary: "oklch(0.554 0.046 257.417)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  blue: {
    label: "Blue",
    color: "#3b82f6",
    primary: "oklch(0.623 0.214 259.815)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  sky: {
    label: "Sky",
    color: "#0ea5e9",
    primary: "oklch(0.685 0.169 222.929)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  cyan: {
    label: "Cyan",
    color: "#06b6d4",
    primary: "oklch(0.715 0.143 211.534)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  teal: {
    label: "Teal",
    color: "#14b8a6",
    primary: "oklch(0.704 0.14 182.503)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  green: {
    label: "Green",
    color: "#22c55e",
    primary: "oklch(0.723 0.191 142.495)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  emerald: {
    label: "Emerald",
    color: "#10b981",
    primary: "oklch(0.696 0.17 162.48)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  lime: {
    label: "Lime",
    color: "#84cc16",
    primary: "oklch(0.768 0.189 108.854)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  yellow: {
    label: "Yellow",
    color: "#eab308",
    primary: "oklch(0.795 0.184 86.047)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  amber: {
    label: "Amber",
    color: "#f59e0b",
    primary: "oklch(0.769 0.188 70.08)",
    primaryForeground: "oklch(0.145 0 0)",
  },
  orange: {
    label: "Orange",
    color: "#f97316",
    primary: "oklch(0.705 0.213 47.604)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  red: {
    label: "Red",
    color: "#ef4444",
    primary: "oklch(0.637 0.237 25.331)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  rose: {
    label: "Rose",
    color: "#f43f5e",
    primary: "oklch(0.645 0.246 16.439)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  pink: {
    label: "Pink",
    color: "#ec4899",
    primary: "oklch(0.656 0.241 354.308)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  fuchsia: {
    label: "Fuchsia",
    color: "#d946ef",
    primary: "oklch(0.667 0.295 322.15)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  purple: {
    label: "Purple",
    color: "#a855f7",
    primary: "oklch(0.627 0.265 303.9)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  violet: {
    label: "Violet",
    color: "#8b5cf6",
    primary: "oklch(0.606 0.25 292.717)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  indigo: {
    label: "Indigo",
    color: "#6366f1",
    primary: "oklch(0.585 0.233 277.117)",
    primaryForeground: "oklch(0.985 0 0)",
  },
} as const;

export type ThemeColor = keyof typeof themeColors;

// 테마에 해당하는 CSS 변수 스타일 반환
export function getThemeStyle(theme: ThemeColor): React.CSSProperties {
  const t = themeColors[theme];
  return {
    "--primary": t.primary,
    "--primary-foreground": t.primaryForeground,
  } as React.CSSProperties;
}

// 테마 컨트롤
export function ControlTheme({
  value = "zinc",
  onChange,
}: {
  value?: ThemeColor;
  onChange?: (color: ThemeColor) => void;
}) {
  const current = themeColors[value];

  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground text-xs font-medium uppercase">
        Theme
      </Label>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="bg-background hover:bg-muted/50 flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors"
          >
            <span className="flex items-center gap-2">
              <span
                className="size-4 rounded-full border"
                style={{ backgroundColor: current.color }}
              />
              {current.label}
            </span>
            <ChevronLeftIcon className="text-muted-foreground size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="left"
          align="start"
          sideOffset={8}
          className="max-h-[300px] min-w-[160px] overflow-y-auto"
        >
          <DropdownMenuRadioGroup
            value={value}
            onValueChange={(v) => onChange?.(v as ThemeColor)}
          >
            {(Object.keys(themeColors) as ThemeColor[]).map((key) => (
              <DropdownMenuRadioItem key={key} value={key}>
                <span
                  className="size-4 rounded-full border"
                  style={{ backgroundColor: themeColors[key].color }}
                />
                {themeColors[key].label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// 스위치 컨트롤 (Disabled, Loading 등)
export function ControlSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <Label className="text-sm">{label}</Label>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

// 텍스트 입력 컨트롤 (Placeholder 등)
export function ControlInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground text-xs font-medium uppercase">
        {label}
      </Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9"
      />
    </div>
  );
}

// 그룹 구분선
export function ControlDivider() {
  return <div className="bg-border h-px" />;
}

// 섹션 헤더
export function ControlSection({ title }: { title: string }) {
  return (
    <div className="pt-2">
      <Label className="text-xs font-semibold">{title}</Label>
    </div>
  );
}
