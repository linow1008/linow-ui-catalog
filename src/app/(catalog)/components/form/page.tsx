"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function FormPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" />
  </div>
  <Button type="submit" className="w-full">Submit</Button>
</form>`;

  return (
    <ComponentPage
      title="Form"
      description="사용자 입력을 받는 폼 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <form className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter password" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Use react-hook-form for validation and state management.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Login Form"
            code={`<form className="space-y-4">
  <div className="space-y-2">
    <Label>Email</Label>
    <Input type="email" />
    <p className="text-sm text-destructive">Invalid email address</p>
  </div>
  <Button className="w-full">Sign In</Button>
</form>`}
          >
            <form className="w-full max-w-sm space-y-4 rounded-lg border p-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Sign In</h3>
                <p className="text-muted-foreground text-sm">
                  Enter your credentials to continue
                </p>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input type="password" />
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
          </ExampleCard>

          <ExampleCard
            title="With Validation Error"
            code={`<div className="space-y-2">
  <Label>Email</Label>
  <Input type="email" className="border-destructive" />
  <p className="text-sm text-destructive">Please enter a valid email</p>
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                className="border-destructive"
                defaultValue="invalid-email"
              />
              <p className="text-destructive text-sm">
                Please enter a valid email address
              </p>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
