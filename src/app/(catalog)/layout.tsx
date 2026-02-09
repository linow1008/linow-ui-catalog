import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { siteConfig } from "@/config/site";

import { CatalogLayout } from "@/components/layout";

import "../globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // 필요에 따라 조절 (접근성 위해 생략 가능)
};

// 2. 메타데이터 설정 (SEO 핵심)
export const metadata: Metadata = {
  // 상대 경로 이미지(../og.jpg)를 절대 경로로 바꿔주는 기준 URL
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    // ✨ 마법의 템플릿: 하위 페이지에서 title: "소개"라고 하면 -> "소개 - Next.js Boilerplate"가 됨
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Boilerplate",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://your-portfolio.com",
    },
  ],
  creator: "Your Name",

  // 오픈 그래프 (카톡, 페북 공유 시 뜨는 카드)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // 트위터 카드
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@your_twitter_id",
  },

  // 파비콘 설정
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // 로봇 크롤링 허용 여부
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKr.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <NuqsAdapter>
              <CatalogLayout>{children}</CatalogLayout>
            </NuqsAdapter>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
