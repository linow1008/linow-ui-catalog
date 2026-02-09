"use client";

import * as React from "react";

import { CheckIcon, CopyIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative", className)}>
      <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="bg-background hover:bg-muted absolute top-2 right-2 rounded-md border p-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <CheckIcon className="size-4 text-green-500" />
        ) : (
          <CopyIcon className="text-muted-foreground size-4" />
        )}
      </button>
    </div>
  );
}

interface CodePreviewProps {
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function CodePreview({ code, children, className }: CodePreviewProps) {
  const [copied, setCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border", className)}>
      {/* Preview */}
      <div className="flex items-center justify-center p-6">{children}</div>

      {/* Actions */}
      <div className="bg-muted/50 flex items-center justify-end gap-1 border-t px-2 py-1.5">
        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="text-muted-foreground hover:text-foreground rounded px-2 py-1 text-xs transition-colors"
        >
          {showCode ? "Hide" : "Code"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded px-2 py-1 text-xs transition-colors"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
            <>
              <CheckIcon className="size-3 text-green-500" />
              Copied
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
          <pre className="bg-muted/30 overflow-x-auto p-4 text-xs">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
