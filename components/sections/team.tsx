import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { SectionBase, Team } from "@/types/types";
import { formatImage } from "@/utils/utils";
import { client } from "@/sanity/client";

interface TeamProps {
  sectionData: SectionBase;
}

const TEAM_QUERY = `*[ _type == "team" ]`;
const options = { next: { revalidate: 30 } };

const Teams = async ({ sectionData }: TeamProps) => {
  const teamData = await client.fetch<Team[]>(TEAM_QUERY, {}, options);

  return (
    <section
      id="team"
      className="bg-gray-50 py-16 md:py-32 dark:bg-transparent"
    >
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max px-6 bg-background">
          {sectionData.subheading}
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {sectionData.heading}
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">{sectionData.description}</div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="w-full flex flex-wrap justify-center gap-6">
            {teamData.map((member) => (
              <div key={member._id} className="group overflow-hidden md:w-75 w-96">
                <Image
                  src={formatImage(member.photo, 800, 1200).full}
                  alt={member.name}
                  width={826}
                  height={1239}
                  placeholder="blur"
                  blurDataURL={formatImage(member.photo, 800, 1200).blur}
                  className="h-[400px] w-full rounded-md object-cover object-top transition-all duration-500 md:group-hover:h-[22.5rem] group-hover:rounded-xl"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-primary inline-block translate-y-0 md:translate-y-6 text-sm opacity-100 md:opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.position}
                    </span>
                    <Link
                      href={member.instagramUrl}
                      className="text-muted-foreground group-hover:text-primary inline-block translate-y-0 md:translate-y-8 text-sm tracking-wide opacity-100 md:opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {" "}
                      <Instagram className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
