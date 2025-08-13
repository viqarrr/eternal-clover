import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Games from "@/components/sections/games";
import Blogs from "@/components/sections/blog";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { BlogSection, Contact, GameSection, SectionBase, Service } from "@/types/types";
import Contacts from "@/components/sections/contact";
import Services from "@/components/sections/services";

type SectionKeys = "hero" | "about" | "services" | "games" | "blogs" | "contact";

type Sections = {
  [K in SectionKeys]: SectionBase;
};

const SECTIONS_QUERY = `*[_type == "section"]{
  _id,
  title,
  heading,
  subheading,
  description,
  descriptionBlock,
  companyProfile{
    asset->{
      url,
      filename
    }
  }
}`;

const BLOGS_QUERY = `*[
  _type == "blog" 
  && defined(slug.current)
]| order(publishedAt desc)[0...3]{_id, title, subtitle, slug, image, body}`;

const GAMES_QUERY = `*[
  _type == "game" 
  && defined(slug.current)
][0...4]{_id, title, thumbnail, platform, slug}`;

const SERVICES_QUERY = `*[_type == "service"] | order(_updatedAt asc)`;

const CONTACTS_QUERY = `*[ _type == "contact" ]`;


const options = { next: { revalidate: 30 } };

export default async function Home() {
  const sectionsData = await client.fetch<SanityDocument[]>(
    SECTIONS_QUERY,
    {},
    options
  );
  const servicesData = await client.fetch<Service[]>(SERVICES_QUERY, {}, options);
  const blogsData = await client.fetch<BlogSection[]>(BLOGS_QUERY, {}, options);
  const gamesData = await client.fetch<GameSection[]>(GAMES_QUERY, {}, options);
  const contactsData = await client.fetch<Contact[]>(CONTACTS_QUERY, {}, options);

  const sections: Sections = Object.fromEntries(
    sectionsData.map((section) => [
      section.title.toLowerCase(),
      {
        _id: section._id,
        heading: section.heading,
        subheading: section.subheading,
        description: section.description,
        descriptionBlock: section.descriptionBlock,
        companyProfile: section.companyProfile,
      },
    ])
  );

  return (
    <>
      <Hero sectionData={sections["hero"]} />
      <About sectionData={sections["about"]} />
      <Services sectionData={sections["services"]} services={servicesData} />
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
      <Contacts sectionData={sections["contact"]} contacts={contactsData} />
    </>
  );
}
