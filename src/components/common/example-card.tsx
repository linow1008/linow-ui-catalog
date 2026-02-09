"use client";

import * as React from "react";

import { CheckIcon, CodeIcon, CopyIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExampleCardProps {
  title?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function ExampleCard({
  title,
  code,
  children,
  className,
}: ExampleCardProps) {
  const [copied, setCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border", className)}>
      {/* Header */}
      {title && (
        <div className="border-b px-4 py-2">
          <p className="text-muted-foreground text-xs font-medium">{title}</p>
        </div>
      )}

      {/* Preview */}
      <div className="flex flex-wrap items-center gap-3 p-4">{children}</div>

      {/* Actions */}
      <div className="bg-muted/30 flex items-center justify-end gap-1 border-t px-2 py-1">
        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-1 rounded px-2 py-1 text-xs transition-colors"
        >
          <CodeIcon className="size-3" />
          {showCode ? "Hide" : "Code"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-1 rounded px-2 py-1 text-xs transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="size-3 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="size-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      {showCode && (
        <div className="border-t">
          <pre className="bg-muted/50 overflow-x-auto p-4 text-xs leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
