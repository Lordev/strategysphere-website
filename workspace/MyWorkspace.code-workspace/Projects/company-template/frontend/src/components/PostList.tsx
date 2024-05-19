// ./frontend/src/app/[lang]/components/PostList.tsx

import Image from "next/image";
import Link from "next/link";
import formatDate from "@/utils/formatDate";
import { Posts } from "@/types/Posts";

export default function PostList({
    data: articles,
    children,
}: {
    data: Posts[];
    children?: React.ReactNode;
}) {
    return (
        <section className="p-6 relative">
            <div className="grid justify-center grid-cols-1 gap-y-10 gap-x-12 lg:grid-cols-2 2xl:grid-cols-3">
                {articles.map((article) => {
                    const imageUrl = article.mainImage;
                    // const category = article.categories?.title;
                    const authorsName = article.author?.name;
                    const avatarUrl = article.author?.image;

                    return (
                        <Link
                            href={`/en/blog/category/${article.categories?.slug}/${article.slug}`}
                            key={article._id}
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black/20 w-full rounded-2xl overflow-hidden shadow-lg  text-foreground"
                        >
                            {imageUrl && (
                                <Image
                                    alt="presentation"
                                    width="240"
                                    height="240"
                                    className="object-cover w-full h-44 "
                                    src={imageUrl}
                                />
                            )}
                            <div className="p-6 space-y-2 relative">
                                {avatarUrl && (
                                    <Image
                                        alt="avatar"
                                        width="80"
                                        height="80"
                                        src={avatarUrl}
                                        className="rounded-full h-16 w-16 object-cover absolute -top-8 right-4"
                                    />
                                )}

                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    {article.title}
                                </h3>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs dark:text-gray-400">
                                        {formatDate(article.publishedAt)}
                                    </span>
                                    {authorsName && (
                                        <span className="text-xs dark:text-gray-400">
                                            {authorsName}
                                        </span>
                                    )}
                                </div>
                                <p className="py-4">{article.description}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {children && children}
        </section>
    );
}
