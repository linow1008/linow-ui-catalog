import Link from "next/link";

import { BoxIcon, ComponentIcon, LayoutTemplateIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    title: "Components",
    description: "재사용 가능한 UI 컴포넌트 모음",
    icon: BoxIcon,
    href: "/components/button",
    count: 10,
  },
  {
    title: "Sections",
    description: "페이지를 구성하는 섹션 블록",
    icon: LayoutTemplateIcon,
    href: "/sections/hero",
    count: 7,
  },
  {
    title: "Pages",
    description: "완성된 페이지 템플릿",
    icon: ComponentIcon,
    href: "/pages/login",
    count: 6,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">UI Catalog</h1>
        <p className="text-muted-foreground">
          컴포넌트를 테스트하고, 극한의 상황을 점검하는 내부 작업용 워크스페이스
        </p>
      </div>

      {/* 카테고리 카드 */}
      <div className="grid gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.title} href={category.href}>
            <Card className="hover:border-primary/50 h-full transition-colors">
              <CardHeader>
                <div className="bg-primary/10 text-primary mb-3 flex size-10 items-center justify-center rounded-lg">
                  <category.icon className="size-5" />
                </div>
                <CardTitle className="text-base">{category.title}</CardTitle>
                <CardDescription className="text-sm">
                  {category.description}
                </CardDescription>
                <div className="text-muted-foreground pt-2 text-xs">
                  {category.count}개 항목
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* 퀵 스타트 */}
      <div className="rounded-lg border p-6">
        <h2 className="mb-4 text-lg font-semibold">Quick Start</h2>
        <div className="text-muted-foreground space-y-2 text-sm">
          <p>
            <kbd className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">
              Ctrl + B
            </kbd>{" "}
            사이드바 토글
          </p>
          <p>
            왼쪽에서 컴포넌트를 선택하면 오른쪽 패널에서 설정을 변경할 수
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
