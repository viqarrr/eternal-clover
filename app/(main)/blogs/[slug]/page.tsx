import { format } from "date-fns";
import Image from "next/image";
import { Blog } from "@/types/types";
import { client } from "@/sanity/client";
import { formatImage } from "@/utils/utils";
import { PortableText } from "next-sanity";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]`;
const options = { next: { revalidate: 30 } };

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const blog = await client.fetch<Blog>(
    BLOG_QUERY,
    await params
  );

  if (!blog) {
    return { title: "Blog Not Found | Eternal Clover Studio" };
  }

  return {
    title: `${blog.title} | Eternal Clover Studio`,
    description: blog.subtitle,
    openGraph: {
      title: blog.title,
      description: blog.subtitle,
    },
  };
}

const BlogDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const blog = await client.fetch<Blog>(
    BLOG_QUERY,
    await params,
    options
  );

  if (!blog) notFound();

  const image = formatImage(blog.image, 500, 300); 
  const publishedDate = new Date(blog.publishedAt);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-pretty text-5xl font-bold md:text-6xl">
            {blog.title}
          </h1>
          <h3 className="text-muted-foreground max-w-3xl text-lg md:text-xl">
            {blog.subtitle}
          </h3>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <span>
              {publishedDate && (
                <span className="ml-1">
                  Posted on {format(publishedDate, "MMMM d, yyyy")}
                </span>
              )}
            </span>
          </div>
          {image && (
            <Image
              src={image.full}
              alt="placeholder"
              width={0}
              height={0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={image.blur}
              className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
            />
          )}
        </div>
      </div>
      <div className="container">
        <div className="prose dark:prose-invert mx-auto max-w-3xl">
          <PortableText value={blog.body} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
