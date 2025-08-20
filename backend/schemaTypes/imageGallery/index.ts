import {ImagesIcon} from '@sanity/icons'
import ImageGalleryPreview from './imageGalleryPreview'

export const ImageGallery = {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
  },
  components: {
    preview: ImageGalleryPreview,
  },
}
