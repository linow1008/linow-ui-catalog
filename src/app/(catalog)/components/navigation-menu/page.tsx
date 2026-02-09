"use client";

import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  ComponentPage,
  ControlDivider,
  ControlTheme,
  ExampleCard,
  type ThemeColor,
  getThemeStyle,
} from "@/components/layout";

export default function NavigationMenuPage() {
  const [theme, setTheme] = useState<ThemeColor>("zinc");

  const previewCode = `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 w-[400px]">
          <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
          <NavigationMenuLink href="/docs/installation">Installation</NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 w-[400px]">
          <NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
          <NavigationMenuLink href="/components/card">Card</NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`;

  return (
    <ComponentPage
      title="Navigation Menu"
      description="드롭다운이 있는 내비게이션 메뉴 컴포넌트"
      themeStyle={getThemeStyle(theme)}
      previewCode={previewCode}
      preview={
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <NavigationMenuLink
                    href="#"
                    className="hover:bg-muted block rounded-md p-2"
                  >
                    <div className="font-medium">Documentation</div>
                    <p className="text-muted-foreground text-sm">
                      Learn how to use the components
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#"
                    className="hover:bg-muted block rounded-md p-2"
                  >
                    <div className="font-medium">Installation</div>
                    <p className="text-muted-foreground text-sm">
                      Get started with the setup
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <NavigationMenuLink
                    href="#"
                    className="hover:bg-muted block rounded-md p-2"
                  >
                    <div className="font-medium">Button</div>
                    <p className="text-muted-foreground text-sm">
                      Clickable button component
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#"
                    className="hover:bg-muted block rounded-md p-2"
                  >
                    <div className="font-medium">Card</div>
                    <p className="text-muted-foreground text-sm">
                      Container for content
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
      controls={
        <>
          <ControlTheme value={theme} onChange={setTheme} />
          <ControlDivider />
          <p className="text-muted-foreground text-xs">
            Hover over items to see dropdown content.
          </p>
        </>
      }
    >
      <section className="space-y-3">
        <h2 className="text-sm font-medium">Real World Examples</h2>
        <div className="space-y-3">
          <ExampleCard
            title="Site Navigation"
            code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Engagement</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Integrations</a></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] grid-cols-2 gap-3 p-4">
                      <li>
                        <a
                          href="#"
                          className="hover:bg-muted block rounded p-2 text-sm"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:bg-muted block rounded p-2 text-sm"
                        >
                          Engagement
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:bg-muted block rounded p-2 text-sm"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:bg-muted block rounded p-2 text-sm"
                        >
                          Integrations
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ExampleCard>
        </div>
      </section>
    </ComponentPage>
  );
}
