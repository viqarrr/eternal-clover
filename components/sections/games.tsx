"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GameCard from "@/components/ui/game-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ButtonType, GameSection, PageBase, SectionBase } from "@/types/types";
import Image from "next/image";
import { formatImage } from "@/utils/utils";

interface GamesProps {
  sectionData: SectionBase | PageBase;
  games: GameSection[];
  button?: ButtonType;
}

const Games = ({ sectionData, games, button }: GamesProps) => {
  let backgroundUrl;
  if ("backgroundImage" in sectionData && sectionData.backgroundImage)
    backgroundUrl = formatImage(sectionData.backgroundImage, 500, 300);

  return (
    <section id="games" className="relative overflow-hidden py-16 md:py-32">
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
        <div className="flex w-full flex-col items-center">
          <motion.div
            className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {"subheading" in sectionData && (
              <Badge variant="secondary" className="mb-6">
                {sectionData.subheading}
              </Badge>
            )}
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
              {sectionData.heading}
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              {sectionData.description}
            </p>
            {button && button.url && (
              <Button variant="default" className="w-full sm:w-auto" asChild>
                <Link href={button.url} target="_blank">
                  {button.text}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
        <div className="mx-auto mt-20 flex max-w-5xl flex-wrap justify-center gap-6">
          {games.map((gameData, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <GameCard gameData={gameData} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
