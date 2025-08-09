import { defineField, defineType } from "sanity";

export const gameType = defineType({
  name: "game",
  title: "Games",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "platform",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Android", value: "android" },
              { title: "Windows", value: "windows" },
              { title: "MacOS", value: "macOS" },
            ],
            layout: "tags",
          },
        },
      ],
      validation: (rule) => rule.unique().required(),
    }),
    defineField({
      title: "Released On",
      name: "releasedOn",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Play Store", value: "playstore" },
              { title: "App Store", value: "appstore" },
              { title: "Itch.io", value: "itch" },
            ],
            layout: "tags",
          },
        },
      ],
      validation: (rule) => rule.unique().required(),
    }),
    defineField({
      title: "Play Store Link",
      name: "playstoreLink",
      type: "url",
      hidden: ({ parent }) => !parent?.releasedOn?.includes("playstore"),
    }),
    defineField({
      title: "App Store Link",
      name: "appstoreLink",
      type: "url",
      hidden: ({ parent }) => !parent?.releasedOn?.includes("appstore"),
    }),
    defineField({
      title: "Itch.io Link",
      name: "itchLink",
      type: "url",
      hidden: ({ parent }) => !parent?.releasedOn?.includes("itch"),
    }),
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Screenshots",
      name: "screenshots",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.required(),
    },
  ],
});
