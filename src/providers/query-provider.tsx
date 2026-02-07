"use client";

import * as React from "react";

import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR에서는 클라이언트에서 즉시 재요청하는 것을 방지하기 위해
        // staleTime을 0보다 크게 설정하는 것이 좋습니다. (보통 60초)
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // 서버: 항상 새로운 QueryClient를 만듭니다. (유저 간 데이터 공유 방지)
    return makeQueryClient();
  } else {
    // 브라우저: 클라이언트를 아직 안 만들었다면 만들고, 이미 있다면 재사용합니다.
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  // useState를 쓰지 않고 Singleton 패턴 함수를 사용하여 초기화합니다.
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 개발 모드일 때만 DevTools가 보입니다. (우측 하단 아이콘) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
