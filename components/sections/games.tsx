"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GameCard from "@/components/ui/game-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ButtonType, GameSection, PageBase, SectionBase } from "@/types/types";

interface GamesProps {
  sectionData: SectionBase | PageBase;
  games: GameSection[];
  button?: ButtonType;
}

const Games = ({ sectionData, games, button }: GamesProps) => {
  return (
    <section id="games" className="py-32">
      <div className="container">
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
