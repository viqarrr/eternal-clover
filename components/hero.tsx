import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero = ({
  heading = "We Make",
  subheading = " Everything Exciting",
  description = "An indie game studio from Indonesia, turning ideas into exciting experiences",
  buttons = {
    primary: {
      text: "Explore Our Games",
      url: "#",
    },
  },
}: Hero) => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl">
            <span>{heading}</span>
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex items-start">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
