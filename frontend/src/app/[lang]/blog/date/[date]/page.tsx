import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import { sanityFetch } from "@/utils/sanity/SanityFetchServer";
import BlogSelect from "@/components/Blogselect/BlogSelect";
import { Category, Posts } from "@/types/index";

interface Data {
    posts: Posts[];
    categories: Category[];
}

export default async function AuthorRoute({ params }: { params: { date: string } }) {
    if (!params) return;
    const filter = params.date;
    const fetchData = async (filter: string) => {
        try {
            const dataFilteredByDate = await sanityFetch<Posts[]>({
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
            } [publishedAt match "${filter}"]`,
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
                posts: dataFilteredByDate,
                categories: categoriesResponse,
            };
        } catch (error) {
            console.error(error);
        }
    };
    const { posts, categories } = (await fetchData(filter)) as Data;
    
    if (!posts || posts.length === 0) return;
    
    if (!categories || categories.length === 0) return;
    
    const filteredPosts = posts.filter(
        (post) => post.publishedAt.substring(0, 7) === filter
    );
    
    if (posts.length === 0) return <div>No Posts In this category</div>;

    return (
        <>
            <div className="bg-black/10 ">
                <PostList data={filteredPosts} />
            </div>
            <aside>
                <BlogSelect
                    data={filteredPosts}
                    categories={categories}
                    params={filter}
                />
            </aside>
        </>
    );
}
