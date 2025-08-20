export interface Posts {
    _id: string;
    title: string;
    publishedAt: string;
    mainImage: string;
    author: {
        name: string;
        bio: string;
        image: string; // Assuming the author's image is a URL
    };
    categories: {
        title: string;
        slug: string;
        description: string;
    };
    slug: string;
    description: string;
}
