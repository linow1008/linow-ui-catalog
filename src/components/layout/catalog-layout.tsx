"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BoxIcon,
  ComponentIcon,
  LayoutTemplateIcon,
  SearchIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// 카탈로그 메뉴 구조 정의
const catalogMenu = [
  {
    id: "components",
    label: "Components",
    icon: BoxIcon,
    items: [
      { label: "Accordion", href: "/components/accordion" },
      { label: "Alert", href: "/components/alert" },
      { label: "Aspect Ratio", href: "/components/aspect-ratio" },
      { label: "Autocomplete", href: "/components/autocomplete" },
      { label: "Avatar", href: "/components/avatar" },
      { label: "Badge", href: "/components/badge" },
      { label: "Breadcrumb", href: "/components/breadcrumb" },
      { label: "Button", href: "/components/button" },
      { label: "Card", href: "/components/card" },
      { label: "Carousel", href: "/components/carousel" },
      { label: "Chart", href: "/components/chart" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Chip", href: "/components/chip" },
      { label: "Combobox", href: "/components/combobox" },
      { label: "Context Menu", href: "/components/context-menu" },
      { label: "Date Picker", href: "/components/date-picker" },
      { label: "Dialog", href: "/components/dialog" },
      { label: "Divider", href: "/components/divider" },
      { label: "Dropdown Menu", href: "/components/dropdown-menu" },
      { label: "FAB", href: "/components/fab" },
      { label: "File Input", href: "/components/file-input" },
      { label: "Form", href: "/components/form" },
      { label: "Input", href: "/components/input" },
      { label: "Input OTP", href: "/components/input-otp" },
      { label: "Lightbox", href: "/components/lightbox" },
      { label: "Menubar", href: "/components/menubar" },
      { label: "Navigation Menu", href: "/components/navigation-menu" },
      { label: "Pagination", href: "/components/pagination" },
      { label: "Popover", href: "/components/popover" },
      { label: "Progress", href: "/components/progress" },
      { label: "Radio Group", href: "/components/radio-group" },
      { label: "Rating", href: "/components/rating" },
      { label: "Resizable", href: "/components/resizable" },
      { label: "Rich Text Editor", href: "/components/rich-text-editor" },
      { label: "Scroll Area", href: "/components/scroll-area" },
      { label: "Select", href: "/components/select" },
      { label: "Separator", href: "/components/separator" },
      { label: "Sheet", href: "/components/sheet" },
      { label: "Skeleton", href: "/components/skeleton" },
      { label: "Slider", href: "/components/slider" },
      { label: "Spinner", href: "/components/spinner" },
      { label: "Stepper", href: "/components/stepper" },
      { label: "Switch", href: "/components/switch" },
      { label: "Table", href: "/components/table" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Textarea", href: "/components/textarea" },
      { label: "Timeline", href: "/components/timeline" },
      { label: "Toast", href: "/components/toast" },
      { label: "Toggle", href: "/components/toggle" },
      { label: "Tooltip", href: "/components/tooltip" },
      { label: "Transfer List", href: "/components/transfer-list" },
      { label: "Video Player", href: "/components/video-player" },
    ],
  },
  {
    id: "sections",
    label: "Sections",
    icon: LayoutTemplateIcon,
    items: [
      { label: "Hero", href: "/sections/hero" },
      { label: "Features", href: "/sections/features" },
      { label: "Pricing", href: "/sections/pricing" },
      { label: "Testimonials", href: "/sections/testimonials" },
      { label: "FAQ", href: "/sections/faq" },
      { label: "CTA", href: "/sections/cta" },
      { label: "Footer", href: "/sections/footer" },
    ],
  },
  {
    id: "pages",
    label: "Pages",
    icon: ComponentIcon,
    items: [
      { label: "Login", href: "/pages/login" },
      { label: "Register", href: "/pages/register" },
      { label: "Dashboard", href: "/pages/dashboard" },
      { label: "Profile", href: "/pages/profile" },
      { label: "Settings", href: "/pages/settings" },
      { label: "404", href: "/pages/404" },
    ],
  },
];

interface CatalogLayoutProps {
  children: React.ReactNode;
}

export function CatalogLayout({ children }: CatalogLayoutProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = React.useState("");

  // 홈페이지인지 확인 (오른쪽 패널 공간 조정)
  const isHomePage = pathname === "/";

  // 검색 필터링
  const filteredMenu = React.useMemo(() => {
    if (!searchQuery.trim()) return catalogMenu;

    const query = searchQuery.toLowerCase();
    return catalogMenu
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.label.toLowerCase().includes(query),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [searchQuery]);

  // 현재 경로에 해당하는 섹션들을 기본으로 열어둠
  const defaultOpenSections = React.useMemo(() => {
    const matched = catalogMenu
      .filter((section) =>
        section.items.some((item) => pathname.startsWith(item.href)),
      )
      .map((section) => section.id);
    return matched.length > 0 ? matched : ["components"];
  }, [pathname]);

  return (
    <SidebarProvider>
      {/* 왼쪽 사이드바 */}
      <Sidebar className="h-screen border-r">
        <SidebarHeader className="border-b p-4">
          <Link href="/" className="flex items-center gap-2">
            <BoxIcon className="text-primary size-5" />
            <span className="text-sm font-semibold">UI Catalog</span>
          </Link>
        </SidebarHeader>

        <div className="p-3">
          <div className="relative">
            <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8 text-sm"
            />
          </div>
        </div>

        <SidebarContent>
          <ScrollArea className="h-full">
            <div className="p-3 pt-0">
              <Accordion type="multiple" defaultValue={defaultOpenSections}>
                {filteredMenu.map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border-b-0"
                  >
                    <AccordionTrigger className="hover:bg-accent rounded-md px-2 py-2 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <section.icon className="text-muted-foreground size-4" />
                        <span className="text-sm font-medium">
                          {section.label}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <SidebarMenu className="ml-4 border-l pl-4">
                        {section.items.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <SidebarMenuItem key={item.href}>
                              <SidebarMenuButton
                                asChild
                                isActive={isActive}
                                size="sm"
                              >
                                <Link href={item.href}>{item.label}</Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredMenu.length === 0 && (
                <div className="text-muted-foreground py-8 text-center text-sm">
                  No results found
                </div>
              )}
            </div>
          </ScrollArea>
        </SidebarContent>

        <SidebarFooter className="border-t p-3">
          <div className="text-muted-foreground text-xs">
            Component Factory v0.1.0
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* 메인 콘텐츠 */}
      <main className="flex min-h-screen flex-1 flex-col">
        {/* 모바일 헤더 */}
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 flex h-14 items-center gap-4 border-b px-4 backdrop-blur md:hidden">
          <SidebarTrigger />
          <span className="text-sm font-semibold">UI Catalog</span>
        </header>

        {/* 페이지 콘텐츠 */}
        <div className={`flex-1 p-6 ${isHomePage ? "" : "pr-72"}`}>
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
