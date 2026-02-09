"use client";

import { useState } from "react";

import { AlignLeft, Bold, Italic, Link, List, Underline } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function RichTextEditorPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `// Using TipTap or similar
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const editor = useEditor({
  extensions: [StarterKit],
  content: '<p>Hello World!</p>',
});

<div className="rounded-md border">
  <div className="flex gap-1 border-b p-2">
    <Button size="icon" variant="ghost" onClick={() => editor.chain().toggleBold().run()}>
      <Bold className="h-4 w-4" />
    </Button>
    <Button size="icon" variant="ghost" onClick={() => editor.chain().toggleItalic().run()}>
      <Italic className="h-4 w-4" />
    </Button>
  </div>
  <EditorContent editor={editor} className="p-4" />
</div>`;

  return (
    <ComponentPage
      title="Rich Text Editor"
      description="서식 있는 텍스트 편집기 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="w-full max-w-md rounded-md border">
          <div className="flex gap-1 border-b p-2">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Bold className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Italic className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Underline className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="mx-1 h-8" />
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Link className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <List className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <AlignLeft className="h-4 w-4" />
            </Button>
          </div>
          <div
            className="min-h-32 p-4 focus:outline-none"
            contentEditable
            suppressContentEditableWarning
          >
            <p>Start typing here...</p>
          </div>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Install TipTap or similar for full rich text editing.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Simple Toolbar"
            code={`<div className="flex gap-1 border rounded-md p-1">
  <Button size="icon" variant="ghost"><Bold /></Button>
  <Button size="icon" variant="ghost"><Italic /></Button>
  <Button size="icon" variant="ghost"><Underline /></Button>
</div>`}
          >
            <div className="flex gap-1 rounded-md border p-1">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Bold className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Italic className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Underline className="h-4 w-4" />
              </Button>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Comment Box"
            code={`<div className="space-y-2">
  <div className="min-h-24 rounded-md border p-3" contentEditable>
    Write your comment...
  </div>
  <div className="flex justify-between">
    <div className="flex gap-1">
      <Button size="icon" variant="ghost"><Bold /></Button>
      <Button size="icon" variant="ghost"><Italic /></Button>
    </div>
    <Button>Post</Button>
  </div>
</div>`}
          >
            <div className="w-full max-w-md space-y-2">
              <div
                className="text-muted-foreground min-h-24 rounded-md border p-3 text-sm focus:outline-none"
                contentEditable
                suppressContentEditableWarning
              >
                Write your comment...
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm">Post</Button>
              </div>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
