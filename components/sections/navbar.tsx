"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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
import { scrollToElement } from "@/utils/utils";

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
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/logo-no-bg.svg"}
              alt={"logo"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-fit max-h-8"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Eternal Clover
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block cursor-pointer">
            <NavigationMenuList>
              <NavigationMenuItem>
                <div
                  className="mx-4 text-sm font-medium relative group"
                  onClick={() => handleNavClick("about")}
                >
                  About
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div
                  className="mx-4 text-sm font-medium relative group"
                  onClick={() => handleNavClick("services")}
                >
                  Services
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </div>
              </NavigationMenuItem>              
              <NavigationMenuItem>
                <div
                  className="mx-4 text-sm font-medium relative group"
                  onClick={() => handleNavClick("games")}
                >
                  Games
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div
                  className="mx-4 text-sm font-medium relative group"
                  onClick={() => handleNavClick("blogs")}
                >
                  Blogs
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div
                  className="mx-4 text-sm font-medium relative group"
                  onClick={() => handleNavClick("contact")}
                >
                  Contact
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </div>
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
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src={"/logo-no-bg.svg"}
                      alt={"logo"}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-fit max-h-8"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Eternal Clover
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <div
                    onClick={() => handleNavClick("about")}
                    className="font-medium"
                  >
                    About
                  </div>
                  <div
                    onClick={() => handleNavClick("services")}
                    className="font-medium"
                  >
                    Services
                  </div>                  
                  <div
                    onClick={() => handleNavClick("games")}
                    className="font-medium"
                  >
                    Games
                  </div>
                  <div
                    onClick={() => handleNavClick("blogs")}
                    className="font-medium"
                  >
                    Blogs
                  </div>
                  <div
                    onClick={() => handleNavClick("contact")}
                    className="font-medium"
                  >
                    Contact
                  </div>
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
