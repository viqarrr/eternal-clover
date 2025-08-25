"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { SectionBase } from "@/types/types";
import Image from "next/image";
import { formatImage } from "@/utils/utils";

interface AboutProps {
  sectionData: SectionBase;
  buttonText?: string;
}

const About = ({
  sectionData,
  buttonText = "Download Company Profile",
}: AboutProps) => {
  let backgroundUrl;
  if (sectionData.backgroundImage)
    backgroundUrl = formatImage(sectionData.backgroundImage, 500, 300);

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-32">
      {backgroundUrl && (
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
      )}
      <div className="relative z-10 container mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <motion.h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {sectionData.heading}
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {sectionData.descriptionBlock && (
              <PortableText value={sectionData?.descriptionBlock} />
            )}
            <Button asChild size="sm" className="gap-1 pr-1.5 cursor-pointer">
              <a
                href={`${sectionData.companyProfile?.asset?.url}?dl`}
                download
                target="_blank"
                className="flex items-center"
              >
                <Download className="size-4" />
                {buttonText}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
