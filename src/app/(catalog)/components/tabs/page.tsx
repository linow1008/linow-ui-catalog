"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function TabsPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account content here.
  </TabsContent>
  <TabsContent value="password">
    Password content here.
  </TabsContent>
  <TabsContent value="settings">
    Settings content here.
  </TabsContent>
</Tabs>`;

  return (
    <ComponentPage
      title="Tabs"
      description="탭 형태의 네비게이션 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Manage your account settings and preferences.
            </p>
          </TabsContent>
          <TabsContent value="password" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Change your password and security settings.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Configure your application settings.
            </p>
          </TabsContent>
        </Tabs>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />

          <ControlDivider />

          <p className="text-muted-foreground text-xs">
            Click the tabs in the preview to switch content.
          </p>
        </>
      }
    >
      {/* Real World Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Full Width Tabs"
            code={`<Tabs defaultValue="overview" className="w-full">
  <TabsList className="w-full">
    <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
    <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
    <TabsTrigger value="reports" className="flex-1">Reports</TabsTrigger>
  </TabsList>
</Tabs>`}
          >
            <Tabs defaultValue="overview" className="w-full max-w-md">
              <TabsList className="w-full">
                <TabsTrigger value="overview" className="flex-1">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex-1">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex-1">
                  Reports
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </ExampleCard>

          <ExampleCard
            title="With Disabled Tab"
            code={`<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="pending">Pending</TabsTrigger>
    <TabsTrigger value="archived" disabled>Archived</TabsTrigger>
  </TabsList>
</Tabs>`}
          >
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="archived" disabled>
                  Archived
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </ExampleCard>

          <ExampleCard
            title="In Card"
            code={`<div className="rounded-lg border p-4">
  <Tabs defaultValue="code">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview" className="mt-4 rounded bg-muted p-4">
      Preview content
    </TabsContent>
    <TabsContent value="code" className="mt-4">
      <pre className="rounded bg-muted p-4 text-xs">
        {"<Button>Click me</Button>"}
      </pre>
    </TabsContent>
  </Tabs>
</div>`}
          >
            <div className="w-full max-w-md rounded-lg border p-4">
              <Tabs defaultValue="code">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="bg-muted mt-4 rounded p-4"
                >
                  <p className="text-sm">Preview content</p>
                </TabsContent>
                <TabsContent value="code" className="mt-4">
                  <pre className="bg-muted rounded p-4 text-xs">
                    {"<Button>Click me</Button>"}
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
