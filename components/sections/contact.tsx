import { client } from "@/sanity/client";
import { Contact, SectionBase } from "@/types/types";
import { Mail, Phone, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CONTACTS_QUERY = `*[ _type == "contact" ]`;
const options = { next: { revalidate: 30 } };

const contactIcons: Record<string, JSX.Element> = {
  Email: <Mail className="size-9" />,
  Whatsapp: <Phone className="size-9" />,
  Instagram: <Instagram className="size-9" />,
};

const Contacts = async ({ sectionData }: { sectionData: SectionBase }) => {
  const contactsData = await client.fetch<Contact[]>(
    CONTACTS_QUERY,
    {},
    options
  );

  return (
    <section id="contact" className="bg-background py-32">
      <div className="container">
        <div className="mb-24 text-center">
          <Badge variant="secondary" className="mb-6">
            {sectionData.subheading}
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
            {sectionData.heading}
          </h2>
          <p className="text-muted-foreground md:text-base lg:text-lg text-lg">
            {sectionData.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {contactsData.map((contact) => (
            <div key={contact._id} className="bg-muted rounded-lg p-6 w-98">
              <span className="mb-8 flex rounded-full">
                {contactIcons[contact.label]}
              </span>
              <p className="mb-2 text-lg font-semibold">{contact.label}</p>
              <p className="text-muted-foreground mb-3">{contact.description}</p>
              <a
                href={`mailto:${contact.url}`}
                className="font-semibold hover:underline"
              >
                {contact.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
