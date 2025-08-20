import React from 'react';
import { sanityFetch } from '@/utils/sanity/SanityFetchServer';
import ArticleSelect from '@/components/ArticleSelect';
import Sticky from '@/components/Sticky';
import { Article, Category } from '@/types/index';
import PageHeader from '@/components/PageHeader';

interface ArticleSlug {
	categories: {
		slug: string;
	};
	slug: string;
}

interface ArticleTitle {
	title: string;
	slug: string;
	description: string;
}

interface Data {
	articles: Article[];
	categories: Category[];
}

async function fetchSideMenuData(filter: string) {
	try {
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

		const articlesResponse = await sanityFetch<Article[]>({
			query: `*[_type == "post"] | order(publishedAt desc) { 
                    title, "slug" : slug.current, 
                    "categories": categories[0]->{
                    title,
                    "slug" : slug.current
                    },
                    _id,
                } [categories.slug match "${filter}"]`,
			tags: ['article-sidebar', 'page'],
		});

		return {
			articles: articlesResponse,
			categories: categoriesResponse,
		};
	} catch (error) {
		console.error(error);
	}
}

export default async function LayoutRoute({
	params,
	children,
}: {
	children: React.ReactNode;
	params: {
		slug: string;
		category: string;
	};
}) {
	const { category } = params;
	const { categories, articles } = (await fetchSideMenuData(
		category
	)) as Data;
	return (
		<>
			<div className="bg-black/10">{children}</div>
			<aside id="article-container">
				<Sticky enabled bottomBoundary={'#article-container'} top={150}>
					<ArticleSelect
						categories={categories}
						articles={articles}
						params={params}
					/>
				</Sticky>
			</aside>
		</>
	);
}

export async function generateStaticParams() {
	const responseAllCategories = await sanityFetch<ArticleSlug[]>({
		query: `*[_type == "post"] | order(publishedAt desc)
        {
            "categories": categories[0]->{
            
            "slug" : slug.current
            },
            "slug" : slug.current

        }`,
		tags: ['article-sidebar', 'page'],
	});

	return responseAllCategories.map(article => ({
		slug: article.slug,
		category: article.categories.slug,
	}));
}
