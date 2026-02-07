import Link from "next/link";

import { FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <div className="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
        <FileQuestion className="text-muted-foreground h-10 w-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-muted-foreground text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </p>
      </div>
      <Button asChild className="mt-4">
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  );
}
