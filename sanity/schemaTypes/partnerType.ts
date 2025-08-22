import { defineField, defineType } from "sanity";

export const partnerType = defineType({
  name: "partner",
  title: "Partners",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
