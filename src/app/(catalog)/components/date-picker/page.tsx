"use client";

import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function DatePickerPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [date, setDate] = useState<Date>();

  const previewCode = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
  </PopoverContent>
</Popover>`;

  return (
    <ComponentPage
      title="Date Picker"
      description="날짜를 선택할 수 있는 캘린더 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click to open the calendar and select a date.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Date Range"
            code={`<div className="flex gap-2">
  <DatePicker placeholder="Start date" />
  <span className="self-center">to</span>
  <DatePicker placeholder="End date" />
</div>`}
          >
            <div className="flex items-center gap-2">
              <Button variant="outline" className="w-[140px] justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Start date
              </Button>
              <span className="text-muted-foreground">to</span>
              <Button variant="outline" className="w-[140px] justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                End date
              </Button>
            </div>
          </ExampleCard>

          <ExampleCard
            title="With Label"
            code={`<div className="space-y-2">
  <Label>Date of birth</Label>
  <DatePicker />
</div>`}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Date of birth</label>
              <Button
                variant="outline"
                className="text-muted-foreground w-[240px] justify-start"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Select date
              </Button>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
