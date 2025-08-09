import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'instagramUrl',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})