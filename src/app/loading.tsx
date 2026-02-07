import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-2">
      <Loader2 className="primary text-primary h-10 w-10 animate-spin" />
      <p className="text-muted-foreground animate-pulse text-sm">
        잠시만 기다려주세요...
      </p>
    </div>
  );
}
