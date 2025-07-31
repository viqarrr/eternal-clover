import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface BlogPostData {
  title: string;
  authorName: string;
  image: string;
  pubDate: Date;
  description: string;
  authorImage: string;
}

const defaultPost: BlogPostData = {
  title: "Designing websites faster with shadcn/ui",
  authorName: "John Doe",
  image:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  pubDate: new Date(),
  description:
    "A step-by-step guide to building a modern, responsive blog using React and Tailwind CSS.",
  authorImage:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
};

const Blogpost = ({ post }: { post?: Partial<BlogPostData> }) => {
  const { title, authorName, image, pubDate, description, authorImage } = {
    ...post,
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-pretty text-5xl font-semibold md:text-6xl">
            {title}
          </h1>
          <h3 className="text-muted-foreground max-w-3xl text-lg md:text-xl">
            {description}
          </h3>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={authorImage} />
              <AvatarFallback>{authorName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>
              <a href="#" className="font-semibold">
                {authorName}
              </a>
              {pubDate && (
                <span className="ml-1">
                  on {format(pubDate, "MMMM d, yyyy")}
                </span>
              )}
            </span>
          </div>
          {image && (
            <Image
              src={image}
              alt="placeholder"
              className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
            />
          )}
        </div>
      </div>
      <div className="container">
        <div className="prose dark:prose-invert mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold">Heading Lorem</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            autem ullam soluta delectus dolorem quaerat! Nemo distinctio, velit
            a reiciendis maiores quas voluptates, deserunt natus, dolores
            consectetur alias dolorum provident. Dolore repudiandae praesentium
            consequatur, dignissimos magni, fuga quia soluta officiis, illo
            eligendi ipsam asperiores eveniet autem a hic pariatur provident?
            Magnam totam id perferendis voluptatibus eum nemo consequatur non
            animi impedit deserunt iste at nulla provident, quibusdam,
            consectetur, explicabo quae? Ex impedit ipsum sequi molestias libero
            saepe rerum nesciunt magni quae incidunt reprehenderit nam delectus
            laboriosam facere mollitia, possimus beatae similique doloribus
            nobis a. Quos temporibus animi totam nihil dolorem!
          </p>

          <h2 className="text-3xl font-extrabold">Heading Lorem</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            autem ullam soluta delectus dolorem quaerat! Nemo distinctio, velit
            a reiciendis maiores quas voluptates, deserunt natus, dolores
            consectetur alias dolorum provident. Dolore repudiandae praesentium
            consequatur, dignissimos magni, fuga quia soluta officiis, illo
            eligendi ipsam asperiores eveniet autem a hic pariatur provident?
            Magnam totam id perferendis voluptatibus eum nemo consequatur non
            animi impedit deserunt iste at nulla provident, quibusdam,
            consectetur, explicabo quae? Ex impedit ipsum sequi molestias libero
            saepe rerum nesciunt magni quae incidunt reprehenderit nam delectus
            laboriosam facere mollitia, possimus beatae similique doloribus
            nobis a. Quos temporibus animi totam nihil dolorem!
          </p>

          <h2 className="text-3xl font-extrabold">Heading Lorem</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            autem ullam soluta delectus dolorem quaerat! Nemo distinctio, velit
            a reiciendis maiores quas voluptates, deserunt natus, dolores
            consectetur alias dolorum provident. Dolore repudiandae praesentium
            consequatur, dignissimos magni, fuga quia soluta officiis, illo
            eligendi ipsam asperiores eveniet autem a hic pariatur provident?
            Magnam totam id perferendis voluptatibus eum nemo consequatur non
            animi impedit deserunt iste at nulla provident, quibusdam,
            consectetur, explicabo quae? Ex impedit ipsum sequi molestias libero
            saepe rerum nesciunt magni quae incidunt reprehenderit nam delectus
            laboriosam facere mollitia, possimus beatae similique doloribus
            nobis a. Quos temporibus animi totam nihil dolorem!
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Page() {
  return <Blogpost post={defaultPost} />;
}
