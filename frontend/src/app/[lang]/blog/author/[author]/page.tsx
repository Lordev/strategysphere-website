import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import { sanityFetch } from "@/utils/sanity/SanityFetchServer";
import BlogSelect from "@/components/Blogselect/BlogSelect";
import { Posts, Category } from "@/types/index";

interface Data {
    posts: Posts[];
    categories: Category[];
}

export default async function AuthorRoute({ params }: { params: { author: string } }) {
    if (!params) return;
    const filter = decodeURI(params.author);

    const fetchData = async (filter: string) => {
        try {
            const dataFilteredByAuthor = await sanityFetch<Posts[]>({
                query: `*[_type == "post"] | order(publishedAt desc)
        {
            _id,
            title,
            publishedAt,
            "mainImage" : mainImage.asset->url,
            description,
            "author" : author->{
            name,
            "bio" : bio[0].children[0].text,
            "image" : image.asset->url,
            },
            "categories": categories[0]->{
                title,
                "slug" : slug.current,
                description
            },
            "slug" : slug.current
        } [author.name match "${filter}"]`,
                tags: ["author", "page"],
            });

            const categoriesResponse = await sanityFetch<Category[]>({
                query: `*[_type == "post"] | order(publishedAt desc)
                {
                "categories": categories[0]->{
                title,
                "slug" : slug.current
                },
            }`,
                tags: ["article-sidebar", "page"],
            });
            return {
                posts: dataFilteredByAuthor,
                categories: categoriesResponse,
            };
        } catch (error) {
            console.error(error);
        }
    };
    const { posts, categories } = (await fetchData(filter)) as Data;
    if (!posts) return;
    if (!categories || categories.length === 0) return;
    if (posts.length === 0) return <div>No Posts In this category</div>;

    return (
        <>
            <div className="bg-black/10">
                <PostList data={posts} />
            </div>
            <aside>
                <BlogSelect data={posts} categories={categories} params={filter} />
            </aside>
        </>
    );
}
