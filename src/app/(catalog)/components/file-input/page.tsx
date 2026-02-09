"use client";

import { useState } from "react";

import { File, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function FileInputPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="file">Upload file</Label>
  <Input id="file" type="file" />
</div>`;

  return (
    <ComponentPage
      title="File Input"
      description="파일 업로드를 위한 입력 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="file" className="text-sm font-medium">
            Upload file
          </label>
          <Input id="file" type="file" />
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click to select or drag and drop files.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Dropzone"
            code={`<div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8">
  <Upload className="h-10 w-10 text-muted-foreground" />
  <p className="mt-2 text-sm text-muted-foreground">
    Drag and drop or click to upload
  </p>
</div>`}
          >
            <div className="flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors hover:border-gray-400">
              <Upload className="text-muted-foreground h-10 w-10" />
              <p className="text-muted-foreground mt-2 text-sm">
                Drag and drop or click to upload
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                PNG, JPG up to 10MB
              </p>
            </div>
          </ExampleCard>

          <ExampleCard
            title="File List"
            code={`<div className="space-y-2">
  <div className="flex items-center gap-2 rounded-md border p-2">
    <File className="h-4 w-4" />
    <span className="flex-1 text-sm">document.pdf</span>
    <Button size="icon" variant="ghost">
      <X className="h-4 w-4" />
    </Button>
  </div>
</div>`}
          >
            <div className="w-full max-w-md space-y-2">
              <div className="flex items-center gap-2 rounded-md border p-2">
                <File className="h-4 w-4" />
                <span className="flex-1 text-sm">document.pdf</span>
                <span className="text-muted-foreground text-xs">2.4 MB</span>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 rounded-md border p-2">
                <File className="h-4 w-4" />
                <span className="flex-1 text-sm">image.png</span>
                <span className="text-muted-foreground text-xs">1.2 MB</span>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Avatar Upload"
            code={`<div className="flex items-center gap-4">
  <div className="h-16 w-16 rounded-full bg-muted" />
  <Button variant="outline">Upload Photo</Button>
</div>`}
          >
            <div className="flex items-center gap-4">
              <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-full">
                <Upload className="text-muted-foreground h-6 w-6" />
              </div>
              <div className="space-y-1">
                <Button variant="outline" size="sm">
                  Upload Photo
                </Button>
                <p className="text-muted-foreground text-xs">
                  JPG, PNG. Max 2MB
                </p>
              </div>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
