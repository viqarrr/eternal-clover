import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
