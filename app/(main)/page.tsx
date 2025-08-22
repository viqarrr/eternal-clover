import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Games from "@/components/sections/games";
import Blogs from "@/components/sections/blog";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {
  BlogSection,
  Contact,
  GameSection,
  Partner as PartnerType,
  SectionBase,
  Service,
  Team,
} from "@/types/types";
import Contacts from "@/components/sections/contact";
import Services from "@/components/sections/services";
import Teams from "@/components/sections/team";
import { Partner } from "@/components/sections/partners";
import { show } from "@/utils/utils";

type SectionKeys =
  | "hero"
  | "about"
  | "partners"
  | "services"
  | "games"
  | "blogs"
  | "team"
  | "contact";

type Sections = {
  [K in SectionKeys]: SectionBase;
};

const SECTIONS_QUERY = `*[_type == "section"]{
  _id,
  isVisible,
  title,
  heading,
  subheading,
  backgroundImage,
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
const PARTNERS_QUERY = `*[ _type == "partner" ]`;
const TEAMS_QUERY = `*[ _type == "team" ]`;
const CONTACTS_QUERY = `*[ _type == "contact" ]`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const sectionsData = await client.fetch<SanityDocument[]>(
    SECTIONS_QUERY,
    {},
    options
  );
  const servicesData = await client.fetch<Service[]>(
    SERVICES_QUERY,
    {},
    options
  );
  const partnersData = await client.fetch<PartnerType[]>(
    PARTNERS_QUERY,
    {},
    options
  );
  const blogsData = await client.fetch<BlogSection[]>(BLOGS_QUERY, {}, options);
  const gamesData = await client.fetch<GameSection[]>(GAMES_QUERY, {}, options);
  const teamData = await client.fetch<Team[]>(TEAMS_QUERY, {}, options);
  const contactsData = await client.fetch<Contact[]>(
    CONTACTS_QUERY,
    {},
    options
  );

  const sections: Sections = Object.fromEntries(
    sectionsData.map((section) => [
      section.title.toLowerCase(),
      {
        _id: section._id,
        isVisible: section.isVisible,
        heading: section.heading,
        subheading: section.subheading,
        backgroundImage: section.backgroundImage,
        description: section.description,
        descriptionBlock: section.descriptionBlock,
        companyProfile: section.companyProfile,
      },
    ])
  );

  return (
    <>
    {show(sections["hero"]?.isVisible, (
      <Hero sectionData={sections["hero"]} />
    ))}

    {show(sections["about"]?.isVisible, (
      <About sectionData={sections["about"]} />
    ))}

    {show(sections["services"]?.isVisible, (
      <Services
        sectionData={sections["services"]}
        services={servicesData}
      />
    ))}
    
    {show(sections["partners"]?.isVisible, (
      <Partner
        sectionData={sections["partners"]}
        partners={partnersData}
      />
    ))}

    {show(sections["games"]?.isVisible, (
      <Games
      sectionData={sections["games"]}
      games={gamesData}
        button={{ text: "View All Games", url: "/games" }}
      />
    ))}

    {show(sections["blogs"]?.isVisible, (
      <Blogs
      sectionData={sections["blogs"]}
      blogs={blogsData}
      button={{ text: "View All Articles", url: "/blogs" }}
      />
    ))}
    
    {show(sections["team"]?.isVisible, (
      <Teams
        sectionData={sections["team"]}
        teamData={teamData}
      />
    ))}

    {show(sections["contact"]?.isVisible, (
      <Contacts sectionData={sections["contact"]} contacts={contactsData} />
    ))}
    </>
  );
}
