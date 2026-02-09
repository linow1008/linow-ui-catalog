"use client";

import { useState } from "react";

import {
  Maximize,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function VideoPlayerPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");
  const [isPlaying, setIsPlaying] = useState(false);

  const previewCode = `<div className="relative aspect-video w-full max-w-lg rounded-lg bg-black">
  <video src="/video.mp4" className="h-full w-full" />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
    <Slider value={[30]} max={100} className="mb-4" />
    <div className="flex items-center gap-2">
      <Button size="icon" variant="ghost">
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <span className="text-white text-sm">1:30 / 5:00</span>
      <div className="flex-1" />
      <Button size="icon" variant="ghost"><Volume2 /></Button>
      <Button size="icon" variant="ghost"><Maximize /></Button>
    </div>
  </div>
</div>`;

  return (
    <ComponentPage
      title="Video Player"
      description="비디오 재생을 위한 플레이어 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-lg bg-black">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-white/50">Video Content</span>
          </div>
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <Slider defaultValue={[30]} max={100} className="mb-4" />
            <div className="flex items-center gap-2 text-white">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20 hover:text-white"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              <span className="text-sm">1:30 / 5:00</span>
              <div className="flex-1" />
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20 hover:text-white"
              >
                <Volume2 className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20 hover:text-white"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Click play button to toggle playback state.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Simple Controls"
            code={`<div className="flex items-center gap-2 rounded-md border p-2">
  <Button size="icon" variant="ghost"><SkipBack /></Button>
  <Button size="icon"><Play /></Button>
  <Button size="icon" variant="ghost"><SkipForward /></Button>
  <Slider className="flex-1" />
  <span className="text-sm">3:45</span>
</div>`}
          >
            <div className="flex w-full max-w-md items-center gap-2 rounded-md border p-2">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-8 w-8">
                <Play className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Slider defaultValue={[45]} className="flex-1" />
              <span className="text-muted-foreground text-sm">3:45</span>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Video Thumbnail"
            code={`<div className="group relative aspect-video cursor-pointer rounded-lg bg-muted">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="rounded-full bg-black/50 p-4 group-hover:bg-black/70">
      <Play className="h-8 w-8 text-white" />
    </div>
  </div>
  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1 text-xs text-white">
    5:30
  </div>
</div>`}
          >
            <div className="bg-muted group relative aspect-video w-full max-w-sm cursor-pointer rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/50 p-4 transition-colors group-hover:bg-black/70">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
                5:30
              </div>
            </div>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
