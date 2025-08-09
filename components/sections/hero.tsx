"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/utils/utils";
import { PortableText } from "next-sanity";
import { SectionBase } from "@/types/types";

interface HeroProps {
  sectionData: SectionBase;
  button?: {
    text: string;
    targetElement: string;
  };
}

const Hero = ({
  sectionData,
  button = {
    text: "Explore Our Games",
    targetElement: "games",
  },
}: HeroProps) => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-5xl font-bold text-foreground md:text-5xl lg:text-8xl">
            <div>{sectionData.heading}</div>
            <div className="text-subheading">{sectionData?.subheading}</div>
          </h2>
          <div className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {Array.isArray(sectionData.description) && <PortableText value={sectionData?.description} />}
          </div>
          <div className="flex items-start">
            <Button
              asChild
              className="cursor-pointer"
              onClick={() => scrollToElement(button.targetElement)}
            >
              <span>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {button.text}
                </span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
