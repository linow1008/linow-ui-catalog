export const siteConfig = {
  name: "Next.js Boilerplate",
  description:
    "Next.js 16, Tailwind CSS v4, Shadcn UI가 적용된 완벽한 스타터 팩",
  url: "https://your-domain.com", // 실제 배포할 도메인 입력 (나중에 수정 필수)
  ogImage: "https://your-domain.com/og-image.jpg", // 대표 썸네일 이미지 주소
  links: {
    github: "https://github.com/your-username/repo",
    twitter: "https://twitter.com/your-username",
  },
};

export type SiteConfig = typeof siteConfig;
