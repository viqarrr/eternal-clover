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

const Games = async ({
  sectionData,
  games,
  button
}: GamesProps) => {
  return (
    <section id="games" className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            {"subheading" in sectionData && (
              <Badge variant="secondary" className="mb-6">
                {sectionData.subheading}
              </Badge>
            )}
            <h2 className="text-3xl font-medium md:text-5xl">
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
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-5xl flex-wrap justify-center gap-6">
          {games.map((gameData, idx) => (
            <GameCard key={idx} gameData={gameData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
