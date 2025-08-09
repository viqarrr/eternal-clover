import GamesSection from "@/components/sections/games";
import { client } from "@/sanity/client";
import { GameSection, PageBase } from "@/types/types";
import { Metadata } from "next";

const PAGE_QUERY = `*[
  _type == "page" && title == "Games"
][0]`;


const GAMES_QUERY = `*[
  _type == "game" 
  && defined(slug.current)
][0...4]{_id, title, thumbnail, platform, slug}`;

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Games | Eternal Clover Studio",
};

const Games = async () => {
  const pageData = await client.fetch<PageBase>(
        PAGE_QUERY,
        {},
        options
      );
    const gamesData = await client.fetch<GameSection[]>(
        GAMES_QUERY,
        {},
        options
      );

  return (
    <div>
      <GamesSection
        sectionData={pageData}
        games={gamesData}
      />
    </div>
  );
};

export default Games;
