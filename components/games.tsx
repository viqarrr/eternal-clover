import {
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GameCard from "./ui/game-card";
import { Button } from "./ui/button";
import Link from "next/link";

interface Content {
  id?: string;
  title: string;
  description: string;
  url: string;
  image?: string;
}

interface GamesSectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  contents?: Content[];
}

const GamesSection = ({
  tagline = "What We've Made",
  heading = "The Games We've Built So Far",
  description = "These are the games we’ve actually finished. From jam sessions to serious builds, this is our growing legacy.",
  buttonText,
  buttonUrl,
  contents = [
    {
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      url: "/games/test",
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      url: "/games/test",
    },
    {
      title: "Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      url: "/games/test",
    },
    {
      title: "Reliability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      url: "/games/test",
    },
    {
      title: "Reliability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      url: "/games/test",
    },
  ],
}: GamesSectionProps) => {
  return (
    <section id="games" className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <Badge variant="secondary" className="mb-6">
              {tagline}
            </Badge>
            <h2 className="text-3xl font-medium md:text-5xl">{heading}</h2>

            <p className="text-muted-foreground md:max-w-2xl">{description}</p>
            {buttonUrl && (
              <Button variant="link" className="w-full sm:w-auto" asChild>
                <Link href={buttonUrl} target="_blank">
                  {buttonText}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-5xl flex-wrap justify-center gap-6">
          {contents.map((content, idx) => (
            <GameCard key={idx} url={content.url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
