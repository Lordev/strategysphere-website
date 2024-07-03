import { Item } from '@radix-ui/react-menubar';
import Link from 'next/link';
import { Article, Category } from '@/types';

function selectedFilter(current: string, selected: string) {
	return current === selected
		? 'px-3 py-1 rounded-lg hover:underline bg-zinc-400 text-primary m-1'
		: 'px-3 py-1 rounded-lg hover:underline bg-zinc-500/30 text-zinc-400 m-1';
}
export default function ArticleSelect({
	categories,
	articles,
	params,
}: {
	categories: Category[];
	articles: Article[];
	params: {
		slug: string;
		category: string;
	};
}) {
	return (
		<div className="p-4 rounded-lg bg-black/20 min-h-[1000px] relative">
			<h4 className="text-xl font-semibold">Browse By Category</h4>

			<div>
				<div className="flex flex-wrap py-6 border-gray-700">
					{categories
						.map((category: Category) => ({
							title: category.categories.title,
							slug: category.categories.slug,
						}))
						.filter(
							// index comparison to filter repeated categories
							(category, index, array) =>
								index ===
								array.findIndex(
									currentCategory =>
										currentCategory.slug === category.slug
								)
						)
						.map(uniqueCategory => (
							<Link
								key={uniqueCategory.slug}
								href={`/blog/category/${uniqueCategory.slug}`}
								className={selectedFilter(
									uniqueCategory.slug,
									params.category
								)}
							>
								#{uniqueCategory.title}
							</Link>
						))}
					<Link
						href={'/blog'}
						className={selectedFilter('', 'filter')}
					>
						#all
					</Link>
				</div>

				<div className="space-y-2">
					<h4 className="text-lg font-semibold">
						Other Posts You May Like
					</h4>
					<ul className="ml-4 space-y-1 list-disc">
						{articles.map((article: Article) => {
							return (
								<li key={article._id}>
									<Link
										rel="noopener noreferrer"
										href={`/blog/category/${params.category}/${article.slug}`}
										className={`${
											params.slug === article.slug &&
											'text-accent'
										}  hover:underline hover:text-accent transition-colors duration-200`}
									>
										{article.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
