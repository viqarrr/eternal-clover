"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Partner as PartnerType, SectionBase } from "@/types/types";
import { formatImage } from "@/utils/utils";
import Image from "next/image";

interface PartnerProps {
  sectionData: SectionBase;
  partners: PartnerType[];
  className?: string;
}

const Partner = ({ sectionData, partners }: PartnerProps) => {
  let backgroundUrl;
  if (sectionData.backgroundImage)
    backgroundUrl = formatImage(sectionData.backgroundImage, 500, 300);

  return (
    <section className="relative overflow-hidden py-16 md:py-32">
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
      <div className="relative z-10 container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4" variant="secondary">
              {sectionData.subheading}
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {sectionData.heading}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 md:text-xl">
              {sectionData.description}
            </p>
          </motion.div>
        </div>
        <div className="pt-10 md:pt-16 lg:pt-20">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={formatImage(partner.logo, 500, 530).full}
                alt={`${partner.name} logo`}
                width={109}
                height={48}
                className="h-auto w-auto object-contain max-h-18"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Partner };
