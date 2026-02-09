"use client";

import { useState } from "react";

import { CheckCircle, Circle } from "lucide-react";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

const events = [
  { title: "Order placed", time: "10:00 AM", completed: true },
  { title: "Processing", time: "10:30 AM", completed: true },
  { title: "Shipped", time: "2:00 PM", completed: false },
  { title: "Delivered", time: "Pending", completed: false },
];

export default function TimelinePage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<div className="space-y-4">
  {events.map((event, i) => (
    <div key={i} className="flex gap-3">
      <div className="flex flex-col items-center">
        {event.completed ? (
          <CheckCircle className="h-5 w-5 text-primary" />
        ) : (
          <Circle className="h-5 w-5 text-muted-foreground" />
        )}
        {i < events.length - 1 && <div className="h-full w-px bg-border" />}
      </div>
      <div>
        <div className="font-medium">{event.title}</div>
        <div className="text-sm text-muted-foreground">{event.time}</div>
      </div>
    </div>
  ))}
</div>`;

  return (
    <ComponentPage
      title="Timeline"
      description="시간순으로 이벤트를 표시하는 타임라인 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="space-y-0">
          {events.map((event, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                {event.completed ? (
                  <CheckCircle className="text-primary h-5 w-5" />
                ) : (
                  <Circle className="text-muted-foreground h-5 w-5" />
                )}
                {i < events.length - 1 && (
                  <div className="bg-border my-1 h-8 w-px" />
                )}
              </div>
              <div className="pb-4">
                <div
                  className={`text-sm font-medium ${!event.completed && "text-muted-foreground"}`}
                >
                  {event.title}
                </div>
                <div className="text-muted-foreground text-xs">
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Shows events in chronological order.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Activity Feed"
            code={`<div className="space-y-4">
  {activities.map((activity) => (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8" />
      <div>
        <p><strong>{activity.user}</strong> {activity.action}</p>
        <p className="text-xs text-muted-foreground">{activity.time}</p>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="w-full max-w-md space-y-4">
              {[
                {
                  user: "John",
                  action: "created a new task",
                  time: "2 hours ago",
                },
                {
                  user: "Jane",
                  action: "completed the review",
                  time: "4 hours ago",
                },
                { user: "Mike", action: "left a comment", time: "Yesterday" },
              ].map((activity, i) => (
                <div key={i} className="flex gap-3">
                  <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-xs text-white">
                    {activity.user[0]}
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard
            title="Order Tracking"
            code={`<div className="flex justify-between">
  {["Ordered", "Shipped", "Out for Delivery", "Delivered"].map((step, i) => (
    <div className="flex flex-col items-center">
      <div className={cn("h-4 w-4 rounded-full", i <= current ? "bg-primary" : "bg-muted")} />
      <span className="text-xs mt-1">{step}</span>
    </div>
  ))}
</div>`}
          >
            <div className="w-full max-w-md">
              <div className="relative flex justify-between">
                <div className="bg-muted absolute top-2 left-0 h-0.5 w-full" />
                <div className="bg-primary absolute top-2 left-0 h-0.5 w-1/2" />
                {["Ordered", "Shipped", "Out for Delivery", "Delivered"].map(
                  (step, i) => (
                    <div
                      key={step}
                      className="relative flex flex-col items-center"
                    >
                      <div
                        className={`h-4 w-4 rounded-full ${i <= 1 ? "bg-primary" : "bg-muted"}`}
                      />
                      <span className="mt-2 text-center text-xs">{step}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
