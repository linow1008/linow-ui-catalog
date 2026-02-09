"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  ComponentPage,
  ControlDivider,
  ControlInput,
  ControlSection,
  ControlSwitch,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function CardPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [title, setTitle] = useState("Card Title");
  const [description, setDescription] = useState("Card description goes here.");
  const [showFooter, setShowFooter] = useState(true);

  const previewCode = `<Card>
  <CardHeader>
    <CardTitle>${title}</CardTitle>
    <CardDescription>${description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  ${
    showFooter
      ? `<CardFooter>
    <Button>Action</Button>
  </CardFooter>`
      : ""
  }
</Card>`;

  return (
    <ComponentPage
      title="Card"
      description="콘텐츠를 그룹화하는 카드 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Card content goes here.
            </p>
          </CardContent>
          {showFooter && (
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          )}
        </Card>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />

          <ControlDivider />

          <ControlInput label="Title" value={title} onChange={setTitle} />
          <ControlInput
            label="Description"
            value={description}
            onChange={setDescription}
          />

          <ControlDivider />

          <ControlSection title="Options" />
          <ControlSwitch
            label="Show Footer"
            checked={showFooter}
            onChange={setShowFooter}
          />
        </>
      }
    >
      {/* Real World Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Login Form"
            code={`<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign in</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Sign in</Button>
              </CardFooter>
            </Card>
          </ExampleCard>

          <ExampleCard
            title="Pricing Card"
            code={`<Card>
  <CardHeader>
    <CardTitle>Pro Plan</CardTitle>
    <CardDescription>Best for growing teams</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/month</span></div>
    <ul className="mt-4 space-y-2 text-sm">
      <li>✓ Unlimited projects</li>
      <li>✓ Advanced analytics</li>
      <li>✓ Priority support</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Get Started</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>Best for growing teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  $29
                  <span className="text-muted-foreground text-sm font-normal">
                    /month
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>✓ Unlimited projects</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Priority support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </ExampleCard>

          <ExampleCard
            title="Stats Card"
            code={`<Card>
  <CardHeader className="pb-2">
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-3xl">$45,231.89</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">
      +20.1% from last month
    </p>
  </CardContent>
</Card>`}
          >
            <Card className="w-full max-w-xs">
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
