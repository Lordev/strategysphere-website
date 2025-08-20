import { Post as PostType } from '@/types/Post';
import { sanityFetch } from '@/utils/sanity/SanityFetchServer';
import Post from '@/components/Post';

async function fetchAPI(slug: string) {
	try {
		const data = await sanityFetch<PostType[]>({
			query: `*[_type == "post"] | order(publishedAt desc)
            {
              _id,
              title,
              publishedAt,
              body[] {
                  _type == 'image' => {
                      "image": {
                        "url": asset->url,
                        "width": asset->metadata.dimensions.width,
                        "height": asset->metadata.dimensions.height,
                        _type,
                        _key
                      }
                    },
                    _type == 'imageGallery' => {
                      "imageGallery": {
                          _key,
                          images[] {
                          _key,
                          "url" : asset->url
                        }
                      }
                    },
                    _type == 'blockquote' => {
                      "blockquote": {
                        "quote": markDefs[0].quote,
                        _type,
                        _key
                      }
                    },
                    _type == 'block' => {
                      "block": {
                        style,
                        _type,
                        _key,
                        "text": {
                        "text": children[0].text,
                          "_key":children[0]._key
                        }
                      }
                    },
                    _type == 'youtube' => {
                        "youtube": {
                        url,
                        _type,
                      _key
                      }
                    }
                  },
              "mainImage" : mainImage.asset->url,
              description,
              "author" : author->{
                name,
                "bio" : bio[0].children[0].text,
                "image" : image.asset->url,
              },
              "categories": categories[0]->{
                title,
                "slug" : slug.current
              },
              "slug" : slug.current
            } [slug match "${slug}"]`,
			tags: ['blog page', 'page'],
		});

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function generateStaticParams({
	params,
}: {
	params: { slug: string };
}) {
	try {
		const { slug } = params;

		// Ensure that slug is defined before fetching data
		if (!slug) {
			return [];
		}

		const data = await fetchAPI(slug);

		// If no data is fetched or data array is empty, return an empty array
		if (!data || data.length === 0) {
			return [];
		}

		// Map over the data and return an array of { slug, category }
		return data.map(item => ({
			slug: item.slug,
			categories: item.categories.slug,
		}));
	} catch (error) {
		console.error('Error generating static params:', error);
		// Return an empty array or handle the error as needed
		return [];
	}
}
export default async function PostRoute({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	// console.log("slug param", slug);

	const data = await fetchAPI(slug);
	// console.log(data);
	if (!data || data.length == 0) return <h2>no post found</h2>;
	return (
		<>
			<Post data={data} />
		</>
	);
}
