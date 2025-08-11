"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionBase, Service } from "@/types/types";import Image from "next/image";
import { formatImage } from "@/utils/utils";

interface ServicesProps {
  sectionData: SectionBase;
  services: Service[];
}

const Services = ({ sectionData, services }: ServicesProps) => {
  return (
    <section id="services" className="relative w-full overflow-hidden px-4 py-32">

      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          

          <motion.div
            className="md:w-1/2 grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {services.map((feature, index) => {
              const iconUrl = formatImage(feature.icon, 42, 42);

              return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-secondary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative h-full border-0 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      <Image src={iconUrl.full} alt="feature-icon" width={42} height={42}/>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )})}
          </motion.div>
          <motion.div
            className="md:w-1/2 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Badge className="mb-4 px-3 py-1 text-sm" variant="secondary">
              {sectionData.subheading}
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
              {sectionData.heading}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground max-w-lg">
              {sectionData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;