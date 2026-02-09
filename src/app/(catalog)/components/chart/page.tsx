"use client";

import { useState } from "react";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function ChartPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `// Using recharts or similar library
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
];

<BarChart width={400} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="value" fill="hsl(var(--primary))" />
</BarChart>`;

  return (
    <ComponentPage
      title="Chart"
      description="데이터 시각화를 위한 차트 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="flex h-48 w-full max-w-md items-end justify-around gap-2 rounded-lg border p-4">
          {[40, 70, 45, 90, 60, 80, 55].map((height, i) => (
            <div
              key={i}
              className="bg-primary w-8 rounded-t transition-all hover:opacity-80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Install recharts or similar library for full chart functionality.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Simple Bar Chart"
            code={`<div className="flex items-end gap-2 h-32">
  {data.map((item, i) => (
    <div
      key={i}
      className="bg-primary w-8 rounded-t"
      style={{ height: \`\${item.value / 10}%\` }}
    />
  ))}
</div>`}
          >
            <div className="flex h-32 w-full max-w-sm items-end justify-around gap-2">
              {[60, 80, 40, 90, 70].map((height, i) => (
                <div
                  key={i}
                  className="bg-primary w-10 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </ExampleCard>

          <ExampleCard
            title="Stats Card"
            code={`<div className="rounded-lg border p-4">
  <div className="text-sm text-muted-foreground">Total Revenue</div>
  <div className="text-2xl font-bold">$45,231.89</div>
  <div className="text-xs text-green-500">+20.1% from last month</div>
</div>`}
          >
            <div className="w-64 rounded-lg border p-4">
              <div className="text-muted-foreground text-sm">Total Revenue</div>
              <div className="text-2xl font-bold">$45,231.89</div>
              <div className="text-xs text-green-500">
                +20.1% from last month
              </div>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
