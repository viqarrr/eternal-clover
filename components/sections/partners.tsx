"use client";

import { motion} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Partner as PartnerType, SectionBase } from "@/types/types";
import { formatImage } from "@/utils/utils";

interface PartnerProps {
  sectionData: SectionBase;
  partners: PartnerType[];
  className?: string;
}

const Partner = ({ sectionData, partners }: PartnerProps) => {
  return (
    <section className="py-64">
      <div className="container flex flex-col items-center text-center">
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
    </section>
  );
};

export { Partner };
