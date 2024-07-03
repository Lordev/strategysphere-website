import {defineType, defineField} from 'sanity'

export const post = defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .error('Title is too short')
          .max(80)
          .error('Make the title shorter than 80 characters')
          .warning('Title must be within 10 and 80 characters'),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      type: 'reference',
      name: 'author',
      title: 'Author',
      validation: (rule) => rule.required(),
      to: [{type: 'author'}],
    }),
    defineField({
      type: 'image',
      name: 'mainImage',
      title: 'Main image',
      validation: (rule) => rule.required(),
      options: {hotspot: true},
    }),
    defineField({
      type: 'array',
      name: 'categories',
      title: 'Categories',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
    defineField({
      type: 'datetime',
      name: 'publishedAt',
      title: 'Published at',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'blockContent',
      name: 'body',
      title: 'Body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
    }),
  ],
})
