import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 개발 편의를 위해 일단 다 열어두거나, 특정 도메인만 지정
      },
    ],
  },
  webpack(config) {
    // 1. Webpack Rule의 타입을 구체적으로 정의 (any 제거)
    // Next.js 내부 로더의 구조를 따릅니다.
    interface WebpackRule {
      test?: RegExp;
      issuer?: { and?: RegExp[] } | RegExp;
      resourceQuery?: { not?: RegExp[] };
      exclude?: RegExp | RegExp[];
      use?: unknown;
    }

    // 2. 기존의 Next.js SVG 로더 규칙 찾기
    // (rule을 WebpackRule로 단언하여 내부 속성에 접근)
    const fileLoaderRule = config.module.rules.find(
      (rule: WebpackRule) =>
        rule.test instanceof RegExp && rule.test.test?.(".svg"),
    );

    // 3. 기존 로더에 새로운 규칙 추가
    config.module.rules.push(
      // A. *.svg?url (기존 Image 태그용)
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // B. *.svg (컴포넌트용 @svgr/webpack)
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        // resourceQuery.not이 배열인지 확인 후 안전하게 병합
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        },
        use: ["@svgr/webpack"],
      },
    );

    // 4. 기존 로더에서 SVG 제외
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
