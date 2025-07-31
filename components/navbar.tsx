"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome && scrollTarget) {
      scrollToElement(scrollTarget);
      setScrollTarget(null);
    }
  }, [isHome, scrollTarget]);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (targetId: string) => {
    if (isHome) {
      scrollToElement(targetId);
    } else {
      setScrollTarget(targetId);
      router.push("/");
    }
  };


  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a
            href="https://www.shadcnblocks.com"
            className="flex items-center gap-2"
          >
            logo
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavClick("about")}
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavClick("games")}
                  className={navigationMenuTriggerStyle()}
                >
                  Games
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavClick("blogs")}
                  className={navigationMenuTriggerStyle()}
                >
                  Blogs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => handleNavClick("team")}
                  className={navigationMenuTriggerStyle()}
                >
                  Team
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Shadcnblocks.com
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <Link
                    href={"/"}
                    onClick={() => handleNavClick("about")}
                    className="font-medium"
                  >
                    Home
                  </Link>
                  <a
                    onClick={() => handleNavClick("about")}
                    className="font-medium"
                  >
                    Contact
                  </a>
                  <a
                    onClick={() => handleNavClick("games")}
                    className="font-medium"
                  >
                    Games
                  </a>
                  <a
                    onClick={() => handleNavClick("blogs")}
                    className="font-medium"
                  >
                    Blogs
                  </a>
                  <a
                    onClick={() => handleNavClick("team")}
                    className="font-medium"
                  >
                    Team
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
