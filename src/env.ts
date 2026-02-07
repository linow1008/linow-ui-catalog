import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /*
   * 서버 사이드 환경변수 (DB 키, API Secret 등)
   * 브라우저에 노출되면 안 되는 값들입니다.
   */
  server: {
    // 예시: DATABASE_URL: z.string().url(),
    // NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /*
   * 클라이언트 사이드 환경변수
   * 반드시 `NEXT_PUBLIC_`으로 시작해야 합니다.
   */
  client: {
    // 예시: NEXT_PUBLIC_API_URL: z.string().min(1),
  },

  /*
   * 런타임 환경변수 매핑 (Next.js App Router 필수 설정)
   * 위에서 정의한 변수들을 여기서 process.env 값과 매핑해줘야 합니다.
   */
  runtimeEnv: {
    // DATABASE_URL: process.env.DATABASE_URL,
    // NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
