"use client";

import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/utils/utils";
import { SectionBase } from "@/types/types";
import { ChevronRight } from "lucide-react";
import { PortableText } from "next-sanity";

interface AboutProps {
  sectionData: SectionBase;
  button?: {
    text: string;
    targetElement: string;
  };
}

const About = ({
  sectionData,
  button = { text: "Explore Our Games", targetElement: "games" },
}: AboutProps) => {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">{sectionData.heading}</h2>
          <div className="space-y-6">
            {sectionData.descriptionBlock &&
            <PortableText value={sectionData?.descriptionBlock} />}

            <Button
              asChild
              size="sm"
              className="gap-1 pr-1.5 cursor-pointer"
              onClick={() => scrollToElement(`/${button.targetElement}`)}
            >
              <span>
                {button.text}
                <ChevronRight className="size-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
