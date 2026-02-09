"use client";

import * as React from "react";

import { CheckIcon, CodeIcon, CopyIcon } from "lucide-react";

import { SettingsPanel } from "./settings-panel";

interface ComponentPageProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  previewCode?: string;
  controls?: React.ReactNode;
  children: React.ReactNode;
  themeStyle?: React.CSSProperties;
}

export function ComponentPage({
  title,
  description,
  preview,
  previewCode,
  controls,
  children,
  themeStyle,
}: ComponentPageProps) {
  const [copied, setCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);

  const handleCopy = async () => {
    if (!previewCode) return;
    await navigator.clipboard.writeText(previewCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="space-y-8">
        {/* 헤더 */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        {/* Preview */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium">Preview</h2>
          <div className="overflow-hidden rounded-lg border">
            <div
              className="flex min-h-32 items-center justify-center border-dashed p-8"
              style={themeStyle}
            >
              {preview}
            </div>

            {/* Actions */}
            {previewCode && (
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
            )}

            {/* Code */}
            {showCode && previewCode && (
              <div className="border-t">
                <pre className="bg-muted/50 overflow-x-auto p-4 text-xs leading-relaxed">
                  <code>{previewCode}</code>
                </pre>
              </div>
            )}
          </div>
        </section>

        {/* 컴포넌트별 콘텐츠 */}
        {children}
      </div>

      {/* 오른쪽 설정 패널 */}
      {controls && <SettingsPanel>{controls}</SettingsPanel>}
    </>
  );
}
