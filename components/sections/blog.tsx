import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BlogSection, ButtonType, PageBase, SectionBase } from "@/types/types";
import { formatImage } from "@/utils/utils";

interface BlogsSectionProps {
  sectionData: SectionBase | PageBase;
  blogs: BlogSection[];
  button?: ButtonType;
}

const Blogs = async ({
  sectionData,
  blogs,
  button
}: BlogsSectionProps) => {
  return (
    <section id="blogs" className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          {'subheading' in sectionData && 
          (<Badge variant="secondary" className="mb-6">
            {sectionData.subheading}
          </Badge>) 
          }
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {sectionData.heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:text-lg">
            {sectionData.description}
          </p>
          {button && button.url && (
            <Button variant="default" className="w-full sm:w-auto" asChild>
              <Link href={button.url} target="_blank">
                {button.text}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogs.map((blog) => (
            <Card
              key={blog._id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <Link
                  href={`/blogs/${blog.slug.current}`}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <Image
                    src={formatImage(blog.image, 500, 300).full}
                    alt={blog.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={formatImage(blog.image, 500, 300).blur}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link href={`/blogs/${blog.slug.current}`} target="_blank">
                    {blog.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{blog.subtitle}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blogs/${blog.slug.current}`}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
