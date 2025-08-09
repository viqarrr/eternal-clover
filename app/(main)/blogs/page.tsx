import Blogs from "@/components/sections/blog";
import { client } from "@/sanity/client";
import { BlogSection, PageBase } from "@/types/types";
import { Metadata } from "next";

const PAGE_QUERY = `*[
  _type == "page" && title == "Blogs"
][0]`;


const BLOGS_QUERY = `*[
  _type == "blog" 
  && defined(slug.current)
]| order(publishedAt desc){_id, title, subtitle, slug, image, body}`;

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Blogs | Eternal Clover Studio",
};

const Blog = async () => {
  const pageData = await client.fetch<PageBase>(
      PAGE_QUERY,
      {},
      options
    );
  const blogsData = await client.fetch<BlogSection[]>(
      BLOGS_QUERY,
      {},
      options
    );
    
  return (
    <div>
      <Blogs
        sectionData={pageData}
        blogs={blogsData}
      />
    </div>
  );
};

export default Blog;
