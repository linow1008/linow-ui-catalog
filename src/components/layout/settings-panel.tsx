"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

export function SettingsPanel({ children }: { children: React.ReactNode }) {
  return (
    <aside className="bg-background fixed top-0 right-0 z-40 h-screen w-64 border-l">
      <div className="flex h-14 items-center border-b px-4">
        <span className="text-sm font-semibold">Controls</span>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-4 p-4">{children}</div>
      </ScrollArea>
    </aside>
  );
}
