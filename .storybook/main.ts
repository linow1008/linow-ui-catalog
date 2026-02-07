import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // 1. 스토리 파일 위치
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // 2. 필수 애드온 추가 (순서 중요)
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials", // 👈 이게 있어야 색상/크기 조절 패널이 나옵니다.
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y", // 웹 접근성 검사 도구
    "@storybook/addon-themes", // 👈 다크모드 적용을 위해 필수!
  ],

  // 3. 프레임워크 설정
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  // 4. 정적 파일 경로 (윈도우 역슬래시(\) 대신 슬래시(/) 권장)
  staticDirs: ["../public"],
};

export default config;
