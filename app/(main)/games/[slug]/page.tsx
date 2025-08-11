import Image from "next/image";
import StoreButton from "@/components/ui/store-button";
import { ContentCarousel } from "@/components/ui/content-carousel";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";
import { formatImage } from "@/utils/utils";
import { Game } from "@/types/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const GAME_QUERY = `*[_type == "game" && slug.current == $slug][0]`;
const options = { next: { revalidate: 30 } };

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const game = await client.fetch<Game>(
    GAME_QUERY,
    await params
  );

  if (!game) {
    return { title: "Game Not Found | Eternal Clover Studio" };
  }

  return {
    title: `${game.title} | Eternal Clover Studio`,
    openGraph: {
      title: game.title,
    },
  };
}

const GameDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const game = await client.fetch<Game>(
    GAME_QUERY,
    await params,
    options
  );

  if (!game) notFound();

  const thumbnailUrl = formatImage(game.thumbnail, 500, 300);
  const screenshotsUrl = game.screenshots.map((screenshot) =>
    formatImage(screenshot, 550, 300)
  );
  
  return (
    <>
      <div className="relative w-full h-svh overflow-hidden">
        <Image
          src={thumbnailUrl.full}
          alt="Game banner"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={thumbnailUrl.blur}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,theme(colors.background),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-6 text-white">
          <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
            {game.title}
          </h1>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2 md:gap-5">
            {game.releasedOn.map((store, index) => {
              const storeLinks = {
                playstore: game?.playstoreLink,
                appstore: game?.appstoreLink,
                itch: game?.itchioLink,
              };

              return (
                <StoreButton key={index} store={store} url={storeLinks[store] ?? "/"} />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="prose dark:prose-invert mx-auto max-w-3xl">
          <ContentCarousel items={screenshotsUrl} />
          <PortableText value={game.description} />
        </div>
      </div>
    </>
  );
};

export default GameDetail;
