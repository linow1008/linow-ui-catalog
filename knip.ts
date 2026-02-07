import type { KnipConfig } from "knip";

const config: KnipConfig = {
  // 1. 여기서부터 시작해서 코드를 추적합니다. (진입점)
  entry: [
    "next.config.ts",
    "tailwind.config.ts",
    "postcss.config.mjs",
    "plopfile.js",
    "src/middleware.ts",
    // Next.js App Router 필수 파일들
    "src/app/**/{page,layout,loading,error,not-found,global-error,route,template,default}.{ts,tsx}",
  ],

  // 2. 이 파일들을 대상으로 검사합니다.
  project: ["src/**/*.{ts,tsx}!", "plopfile.js", "knip.ts"],

  // 3. 검사에서 제외할 파일들
  ignore: [
    "src/components/ui/**", // shadcn/ui 컴포넌트는 안 쓰는 변수(Variants)가 많아서 제외하는 게 정신 건강에 좋습니다.
    "**/*.d.ts", // 타입 정의 파일 제외
  ],

  // 4. 안 쓴다고 오해하기 쉬운 패키지들 (플러그인, 설정 도구 등)
  ignoreDependencies: [
    "autoprefixer",
    "postcss",
    "knip",
    "husky",
    "lint-staged",
    "@types/node",
    "@types/react",
    "@types/react-dom",
    "sharp", // Next/Image 최적화용
  ],

  ignoreExportsUsedInFile: true,
};

export default config;
