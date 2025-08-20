import { Category, ArticleSlug, Posts } from '@/types/index';
import formatDate from '@/utils/formatDate';
import React from 'react';
import Link from 'next/link';

interface ArticleSelectProps {
	data: Posts[];
	articles?: ArticleSlug[];
	categories?: Category[];
	params?: string;
}
function selectedFilter(current: string, selected: string) {
	return current === selected
		? 'px-3 py-1 rounded-lg hover:underline bg-zinc-400 text-primary m-1'
		: 'px-3 py-1 rounded-lg hover:underline bg-zinc-500/30 text-zinc-400 m-1';
}

export default function ArticleSelect({
	data,
	articles,
	categories,
	params,
}: ArticleSelectProps) {
	if (!data) return;
	if (!categories) return;
	return (
		<div className="p-4 rounded-lg bg-black/20 min-h-[1000px] relative w-full">
			<h5 className="mt-4">Browse By Category</h5>

			<div className="space-y-4">
				<div className="flex flex-wrap py-2  border-gray-700">
					{categories
						.map((category: Category) => ({
							title: category.categories.title,
							slug: category.categories.slug,
						}))
						.filter(
							(category, index, array) =>
								index ===
								array.findIndex(
									currentCategory =>
										currentCategory.slug === category.slug
								)
						)
						.map(uniqueCategory =>
							params ? (
								<Link
									key={uniqueCategory.slug}
									href={`/blog/category/${uniqueCategory.slug}`}
									className={selectedFilter(
										uniqueCategory.slug,
										params
									)}
								>
									#{uniqueCategory.title}
								</Link>
							) : (
								<Link
									key={uniqueCategory.slug}
									href={`/blog/category/${uniqueCategory.slug}`}
									className={selectedFilter(
										uniqueCategory.slug,
										''
									)}
								>
									#{uniqueCategory.title}
								</Link>
							)
						)}
					<Link
						href={'/blog/'}
						className={selectedFilter('', 'filter')}
					>
						#all
					</Link>
				</div>

				<div className="space-y-2">
					<h5>Recent Posts</h5>
					<ul className="space-y-3 list-disc">
						{data.reduce<JSX.Element[]>((acc, article, index) => {
							if (index < 2) {
								acc.push(
									<React.Fragment key={article.title}>
										<li className="flex-col flex py-2">
											<Link
												href={`/blog/date/${article.publishedAt.substring(0, 7)}`}
											>
												<h6 className=" text-gray-300 text-xs hover:text-accent">
													{formatDate(
														article.publishedAt
													)}
												</h6>
											</Link>
											<Link
												rel="noopener noreferrer"
												href={`/blog/category/${article.categories.slug}/${article.slug}`}
											>
												<h4
													className={` transition-colors duration-200
                                                    text-gray-200 mb-2`}
												>
													{article.title}
												</h4>
											</Link>

											{article.author.name && (
												<Link
													href={`/blog/author/${article.author.name}`}
												>
													<h6 className=" text-gray-300 text-xs hover:text-accent ">
														{article.author.name}
													</h6>
												</Link>
											)}
										</li>
										<hr className="border-gray-500" />
									</React.Fragment>
								);
							}
							return acc;
						}, [])}
					</ul>
				</div>
			</div>
		</div>
	);
}
