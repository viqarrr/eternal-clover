"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { SectionBase } from "@/types/types";

interface AboutProps {
  sectionData: SectionBase;
  buttonText?: string;
}

const About = ({
  sectionData,
  buttonText = "Download Company Profile",
}: AboutProps) => {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
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
