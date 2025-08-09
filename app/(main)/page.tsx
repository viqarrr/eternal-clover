import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Games from "@/components/sections/games";
import Blogs from "@/components/sections/blog";
import Teams from "@/components/sections/team";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { BlogSection, GameSection, SectionBase } from "@/types/types";
import Contacts from "@/components/sections/contact";

type SectionKeys = "hero" | "about" | "games" | "blogs" | "team" | "contact";

type Sections = {
  [K in SectionKeys]: SectionBase;
};

const SECTIONS_QUERY = `*[
  _type == "section"
]{...}`;

const BLOGS_QUERY = `*[
  _type == "blog" 
  && defined(slug.current)
]| order(publishedAt desc)[0...3]{_id, title, subtitle, slug, image, body}`;

const GAMES_QUERY = `*[
  _type == "game" 
  && defined(slug.current)
][0...4]{_id, title, thumbnail, platform, slug}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const sectionsData = await client.fetch<SanityDocument[]>(
    SECTIONS_QUERY,
    {},
    options
  );

  const blogsData = await client.fetch<BlogSection[]>(BLOGS_QUERY, {}, options);

  const gamesData = await client.fetch<GameSection[]>(GAMES_QUERY, {}, options);

  const sections: Sections = Object.fromEntries(
    sectionsData.map((section) => [
      section.title.toLowerCase(),
      {
        _id: section._id,
        heading: section.heading,
        subheading: section.subheading,
        description: section.description,
        descriptionBlock: section.descriptionBlock,
      },
    ])
  );

  return (
    <>
      <Hero sectionData={sections["hero"]} />
      <About sectionData={sections["about"]} />
      <Games
        sectionData={sections["games"]}
        games={gamesData}
        button={{
          text: "View All Games",
          url: "/games",
        }}
      />
      <Blogs
        sectionData={sections["blogs"]}
        blogs={blogsData}
        button={{
          text: "View All Articles",
          url: "/blogs",
        }}
      />
      <Teams sectionData={sections["team"]} />
      <Contacts sectionData={sections["contact"]} />
    </>
  );
}
