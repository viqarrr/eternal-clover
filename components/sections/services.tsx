"use client";

import type React from "react";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SanityImage, SectionBase, Service } from "@/types/types";
import { formatImage } from "@/utils/utils";

interface ServicesProps {
  sectionData: SectionBase;
  services: Service[];
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: SanityImage;
  index: number;
}

const Services = ({ sectionData, services }: ServicesProps) => {
  return (
    <section className="w-full py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const iconUrl = formatImage(icon, 42, 42);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform mouse position into rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Handle mouse move on card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (values from -0.5 to 0.5)
    const xPos = (e.clientX - rect.left) / width - 0.5;
    const yPos = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 20 }}
        className="h-full"
      >
        <Card className="h-full border-2 border-border/50 bg-primary backdrop-blur-sm overflow-hidden group">
          <CardHeader className="pb-2">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-3"
            >
              <Image src={iconUrl.full} alt="service-icon" width={42} height={42} />
            </div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </CardContent>

          {/* Shine effect */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.15) 0%, transparent 50%)",
              x: useMotionValue("50%"),
              y: useMotionValue("50%"),
              opacity: isHovered ? 1 : 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
            animate={
              {
                "--x": `${(mouseX.get() + 0.5) * 100}%`,
                "--y": `${(mouseY.get() + 0.5) * 100}%`,
              } as const
            }
            transition={{ type: "spring", damping: 20 }}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Services;
