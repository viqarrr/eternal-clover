"use client"

import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Contact, SectionBase } from "@/types/types";

interface ContactsProps {
  sectionData: SectionBase;
  contacts: Contact[];
}

const contactIcons: Record<string, JSX.Element> = {
  Email: <Mail className="size-9" />,
  Whatsapp: <Phone className="size-9" />,
  Instagram: <Instagram className="size-9" />,
};

const Contacts = ({ sectionData, contacts }: ContactsProps) => {
  return (
    <section id="contact" className="bg-background py-32">
      <div className="container">
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Badge variant="secondary" className="mb-6">
            {sectionData.subheading}
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
            {sectionData.heading}
          </h2>
          <p className="text-muted-foreground md:text-base lg:text-lg text-lg">
            {sectionData.description}
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map((contact) => (
            <motion.div
              key={contact._id}
              className="bg-muted rounded-lg p-6 w-98"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <span className="mb-8 flex rounded-full">
                {contactIcons[contact.label]}
              </span>
              <p className="mb-2 text-lg font-semibold">{contact.label}</p>
              <p className="text-muted-foreground mb-3">
                {contact.description}
              </p>
              <a
                href={`mailto:${contact.url}`}
                className="font-semibold hover:underline"
              >
                {contact.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
