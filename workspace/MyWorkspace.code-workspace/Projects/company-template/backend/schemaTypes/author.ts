import { defineType, defineField, defineArrayMember } from 'sanity'

export const author = defineType({
  type: "document",
  name: "author",
  title: "Author",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "bio",
      title: "Bio",
      of: [
        defineArrayMember({
          type: "block",
          title: "Block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
          ],
          lists: [],
        }),
      ],
    }),
  ],
});

