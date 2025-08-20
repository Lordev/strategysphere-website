import {defineType, defineArrayMember} from 'sanity'

export const blockContent = defineType({
  type: 'array',
  name: 'blockContent',
  title: 'Block Content',
  of: [
    defineArrayMember({
      type: 'block',
      title: 'Block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {
          title: 'Quote',
          value: 'blockquote',
          // fields: [{type: 'string', name: 'artist', title: 'Artist'}],
        },
      ],

      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
        },
      ],

      marks: {
        annotations: [
          {
            type: 'object',
            name: 'link',
            title: 'URL',
            fields: [
              {
                type: 'url',
                name: 'href',
                title: 'URL',
              },
            ],
          },
        ],
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Emphasis',
            value: 'em',
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'youtube',
    }),
    defineArrayMember({
      type: 'imageGallery',
    }),
  ],
})
