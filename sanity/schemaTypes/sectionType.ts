import { defineField, defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "heading",
      description: "First line in the Hero Section.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      description:
        "The second and third lines in the Hero Section and the small text in the Games, Blog, and Team Sections.",
      hidden: ({ parent }) => {
        const title = parent?.title;
        if (typeof title !== "string") return true;
        return title.toLowerCase() === "about";
      },
      type: "string",
    }),
    defineField({
      name: "descriptionBlock",
      title: "Description",
      description: "Description for about section.",
      type: "array",
      of: [{ type: "block" }],
      hidden: ({ parent }) => {
        const title = parent?.title;
        if (typeof title !== "string") return true;
        return title.toLowerCase() !== "about";
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { title?: string };
          const title = parent?.title?.toLowerCase();

          if (title === "about" && !value) {
            return "Required";
          }

          return true;
        }),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "The longest text on each section.",
      type: "string",
      hidden: ({ parent }) => {
        const title = parent?.title;
        if (typeof title !== "string") return true;
        return title.toLowerCase() === "about";
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { title?: string };
          const title = parent?.title?.toLowerCase();

          if (title !== "about" && !value) {
            return "Required";
          }

          return true;
        }),
    }),
  ],
});
