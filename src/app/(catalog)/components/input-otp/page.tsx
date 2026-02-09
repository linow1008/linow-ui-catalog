"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";

import {
  ComponentPage,
  ControlDivider,
  ControlDropdown,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const lengths = ["4", "6"] as const;
type Length = (typeof lengths)[number];

export default function InputOtpPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [length, setLength] = useState<Length>("6");

  const previewCode = `<div className="flex gap-2">
  {Array.from({ length: ${length} }).map((_, i) => (
    <Input key={i} className="h-12 w-12 text-center text-lg" maxLength={1} />
  ))}
</div>`;

  return (
    <ComponentPage
      title="Input OTP"
      description="일회용 비밀번호 입력 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="flex gap-2">
          {Array.from({ length: parseInt(length) }).map((_, i) => (
            <Input
              key={i}
              className="h-12 w-12 text-center text-lg"
              maxLength={1}
            />
          ))}
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <ControlDropdown
            label="Length"
            value={length}
            options={[...lengths]}
            onChange={setLength}
          />
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Verification Code"
            code={`<div className="space-y-4 text-center">
  <p className="text-sm text-muted-foreground">
    Enter the 6-digit code sent to your phone
  </p>
  <div className="flex justify-center gap-2">
    {[...Array(6)].map((_, i) => (
      <Input key={i} className="h-12 w-12 text-center" maxLength={1} />
    ))}
  </div>
</div>`}
          >
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground text-sm">
                Enter the 6-digit code sent to your phone
              </p>
              <div className="flex justify-center gap-2">
                {[...Array(6)].map((_, i) => (
                  <Input
                    key={i}
                    className="h-12 w-12 text-center text-lg"
                    maxLength={1}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-xs">
                Didn&apos;t receive code?{" "}
                <button className="text-primary underline">Resend</button>
              </p>
            </div>
          </ExampleCard>

          <ExampleCard
            title="With Separator"
            code={`<div className="flex items-center gap-2">
  <Input className="h-12 w-12 text-center" />
  <Input className="h-12 w-12 text-center" />
  <Input className="h-12 w-12 text-center" />
  <span className="text-2xl">-</span>
  <Input className="h-12 w-12 text-center" />
  <Input className="h-12 w-12 text-center" />
  <Input className="h-12 w-12 text-center" />
</div>`}
          >
            <div className="flex items-center gap-2">
              <Input className="h-12 w-12 text-center text-lg" maxLength={1} />
              <Input className="h-12 w-12 text-center text-lg" maxLength={1} />
              <Input className="h-12 w-12 text-center text-lg" maxLength={1} />
              <span className="text-muted-foreground text-2xl">-</span>
              <Input className="h-12 w-12 text-center text-lg" maxLength={1} />
              <Input className="h-12 w-12 text-center text-lg" maxLength={1} />
              <Input className="h-12 w-12 text-center text-lg" maxLength={1} />
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
