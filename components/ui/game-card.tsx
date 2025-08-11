import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { GameSection } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";
import { formatImage } from "@/utils/utils";

interface GameCardProps {
  gameData: GameSection;
}

function formatPlatform(platforms: string[]) {
  return platforms
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(platforms.length > 1 ? " | " : "");
}

const GameCard = ({ gameData }: GameCardProps) => {
  const imageUrl = formatImage(gameData.thumbnail, 550, 300);

  return (
    <>
      <div className="w-[550px] relative mt-4 h-[300px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-full rounded-md  overflow-hidden">
          <Image
            src={imageUrl.full}
            alt={gameData.slug.current}
            width={550}
            height={300}
            placeholder="blur"
            blurDataURL={imageUrl.blur}
            className="h-full w-full scale-98 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
          />
        </figure>
        <div className="absolute top-0 left-0 w-full h-full scale-98 group-hover:scale-100 transition-all duration-300 bg-gradient-to-b from-transparent to-primary"></div>
        <article className="p-4 space-y-2 absolute bottom-0 md:-bottom-10 group-hover:bottom-0 transition-all duration-300 ">
          <h1 className="text-2xl font-semibold capitalize">
            {gameData.title}
          </h1>
          <p className="text-medium">{formatPlatform(gameData.platform)}</p>
          <Link
            href={`/games/${gameData.slug.current}`}
            className="text-base dark:text-white text-blue-600 font-normal pt-2 flex gap-1 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:underline transition-all duration-300"
          >
            Learn More
            <span>
              <ChevronsRight />
            </span>
          </Link>
        </article>
      </div>
    </>
  );
};

export default GameCard;
