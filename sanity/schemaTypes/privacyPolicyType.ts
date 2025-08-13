import {defineField, defineType} from 'sanity'

export const privacyPolicyType = defineType({
  name: 'privacyPolicy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: "Privacy Policy",
      readOnly: true,
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})