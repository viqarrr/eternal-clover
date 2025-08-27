"use client"

import { scrollToElement } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Services",
    href: "services",
  },
  {
    title: "Games",
    href: "games",
  },
  {
    title: "Blogs",
    href: "blogs",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const Footer = () => {
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
    <footer className="pt-16 md:pt-32 pb-8">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Image
            src={"/logo-no-bg.svg"}
            alt={"logo"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-fit max-h-8"
          />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(link.href)}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </div>
          ))}
        </div>
        <div className="text-muted-foreground block text-center text-sm">
          <span>
          {" "}
          © {new Date().getFullYear()} Eternal Clover Studio, All rights
          reserved | 
          </span>
          <Link href={"/privacy-policy"} className="hover:underline"> Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
