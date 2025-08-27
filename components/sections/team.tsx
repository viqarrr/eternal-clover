"use client";
import Link from "next/link";
import { motion, spring } from "framer-motion";
import { SectionBase, Team } from "@/types/types";
import { formatImage } from "@/utils/utils";
import { Instagram } from "lucide-react";
import Image from "next/image";

interface TeamProps {
  sectionData: SectionBase;
  teamData: Team[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: spring,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Teams = ({ sectionData, teamData }: TeamProps) => {
  let backgroundUrl;
  if (sectionData.backgroundImage)
    backgroundUrl = formatImage(sectionData.backgroundImage, 500, 300);

  return (
    <section
      id="team"
      className="py-16 md:py-32 w-full flex justify-center"
    >
      <div className="relative overflow-hidden max-w-5xl py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
        />
        
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
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              {sectionData.subheading}
            </div>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {sectionData.heading}
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {sectionData.description}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-card">
                  <motion.img
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    src={formatImage(member.photo, 800, 1200).full}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.position}
                    </p>
                  </div>
                  <Link
                    href={member.instagramUrl}
                    className="text-muted-foreground inline-block translate-y-0 md:translate-y-8 text-sm tracking-wide opacity-100 md:opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    {" "}
                    <Instagram className="size-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
