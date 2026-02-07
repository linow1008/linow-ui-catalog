/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000", // 배포할 도메인 주소
  generateRobotsTxt: true, // robots.txt 자동 생성
  sitemapSize: 7000, // 사이트맵 하나당 최대 URL 개수
  changefreq: "daily", // 페이지 변경 빈도 (검색엔진에 힌트 제공)
  priority: 0.7, // 페이지 우선순위 기본값
  exclude: ["/server-sitemap.xml"], // 제외할 경로 (예: 관리자 페이지, 동적 사이트맵 등)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      /* 크롤링을 막고 싶은 경로가 있다면 주석 해제
      {
        userAgent: '*',
        disallow: ['/admin', '/private'],
      },
      */
    ],
  },
};
