'use client';
import PostList from '@/components/PostList';
import { sanityFetch } from '@/utils/sanity/SanityFetchClient';
import BlogSelect from '@/components/Blogselect/BlogSelect';
import NextButton from '@/components/NextButton';
import { useState, useEffect, useCallback } from 'react';
import { Category, Posts } from '@/types';
import Skeleton from '@/components/Blogselect/Skeleton';

const POSTS_AMOUNT: number = 6;

interface Data {
	posts: Posts[];
	categories: Category[];
}

export default function Profile() {
	const [fetchedData, setFetchedData] = useState<Posts[]>([]);
	const [categoriesData, setCategoriesData] = useState<Category[]>([]);
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(5);
	const [loadMore, setLoadMore] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [initialRender, setInitialRender] = useState(true);

	const fetchData = useCallback(
		async (startIndex: number, endIndex: number) => {
			setLoading(true);
			try {
				const data = await sanityFetch<Posts[]>({
					query: `*[_type == "post"]  | order(publishedAt desc)
                {
                _id,
                title,
                publishedAt,
                "mainImage" : mainImage.asset->url,
                
                "author" : author->{
                name,
                "bio" : bio[0].children[0].text,
                "image" : image.asset->url,
                },
                "categories": categories[0]->{
                    title,
                    "slug" : slug.current
                },
                "slug" : slug.current,
                description
                } [${startIndex}..${endIndex}]`,

					tags: ['blog', 'page'],
				});

				const categoriesResponse = await sanityFetch<Category[]>({
					query: `*[_type == "post"] | order(publishedAt desc)
                    {
                    "categories": categories[0]->{
                    title,
                    "slug" : slug.current
                    },
                }`,
					tags: ['article-sidebar', 'page'],
				});

				const futureData = await sanityFetch<Posts[]>({
					query: `*[_type == "post"]  | order(publishedAt desc) [${endIndex + 1}..${endIndex + 1}]`,
					tags: ['blog', 'page'],
				});

				if (!futureData || futureData.length === 0) {
					setLoadMore(false);
				} else {
					setLoadMore(true);
					setEndIndex(endIndex + POSTS_AMOUNT);
					setStartIndex(startIndex + POSTS_AMOUNT);
				}

				return {
					posts: data,
					categories: categoriesResponse,
				};
			} catch (error) {
				return console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[]
	);
	useEffect(() => {
		const fetchDataAndSetData = async () => {
			try {
				const { posts, categories } = (await fetchData(
					startIndex,
					endIndex
				)) as Data;
				if (posts && posts.length > 0) {
					setFetchedData(posts);
					setCategoriesData(categories);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setInitialRender(false);
			}
		};
		fetchDataAndSetData();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (!fetchedData) return;

	async function loadMorePosts() {
		try {
			const { posts } = (await fetchData(startIndex, endIndex)) as Data;

			if (!posts || posts.length === 0)
				throw new Error('No more data to fetch');
			setFetchedData(prev => [...prev, ...posts]);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="bg-black/10 ">
				<PostList data={fetchedData}>
					<div className="flex justify-center py-5">
						{loadMore && (
							<NextButton
								type="button"
								label="Load more Posts.."
								onClick={loadMorePosts}
							/>
						)}
						{isLoading && (
							<span className="loading loading-dots loading-lg"></span>
						)}
					</div>
				</PostList>
			</div>
			<aside>
				{isLoading && initialRender ? (
					<Skeleton />
				) : (
					<BlogSelect
						data={fetchedData}
						categories={categoriesData}
					/>
				)}
			</aside>
		</>
	);
}
