import { client } from "@/sanity/client";
import { PortableText, PortableTextBlock } from "next-sanity";

interface PrivacyPolicy {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  title: string;
  content: PortableTextBlock[];
}

const query = `*[_type == "privacyPolicy"][0]`;

const options = { next: { revalidate: 30 } };

const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const PrivacyPolicyPage = async () => {
  const data = await client.fetch<PrivacyPolicy>(query, {}, options);
  
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-lg border border-border p-8 md:p-12 shadow-lg">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-card-foreground mb-2 font-fredoka">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {formatDate(data._updatedAt)}
            </p>
            <div className="prose dark:prose-invert mx-auto max-w-3xl">
              <PortableText value={data.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
