"use client";

import { useEffect } from "react";

import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 발생 시 로그 서비스(Sentry 등)로 전송하는 로직을 여기에 추가할 수 있습니다.
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <div className="bg-destructive/10 flex h-20 w-20 items-center justify-center rounded-full">
        <AlertTriangle className="text-destructive h-10 w-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          문제가 발생했습니다
        </h1>
        <p className="text-muted-foreground md:text-xl/relaxed">
          시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
        {/* 개발 환경에서만 에러 내용 보여주기 (선택 사항) */}
        {process.env.NODE_ENV === "development" && (
          <p className="text-destructive bg-muted rounded p-2 font-mono text-sm">
            {error.message}
          </p>
        )}
      </div>
      <div className="mt-4 flex gap-2">
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          홈으로 이동
        </Button>
        <Button onClick={() => reset()} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          다시 시도
        </Button>
      </div>
    </div>
  );
}
