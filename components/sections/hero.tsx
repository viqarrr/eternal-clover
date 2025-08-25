"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { formatImage, scrollToElement } from "@/utils/utils";
import { SectionBase } from "@/types/types";
import Image from "next/image";

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
  let backgroundUrl;
  if (sectionData.backgroundImage)
    backgroundUrl = formatImage(sectionData.backgroundImage, 500, 300);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <Image
          alt="background"
          src={backgroundUrl?.full as string}
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={backgroundUrl?.blur as string}
          className="absolute inset-0 h-full w-full object-cover [mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container ">
        <div className="flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
          <motion.div
            className="flex flex-col gap-7 lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-5xl font-bold text-foreground md:text-5xl lg:text-8xl">
              <div>{sectionData.heading}</div>
              <div className="text-subheading">{sectionData?.subheading}</div>
            </h2>
            <div className="text-base text-muted-foreground md:text-lg lg:text-xl">
              {Array.isArray(sectionData.description) && (
                <PortableText value={sectionData?.description} />
              )}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
