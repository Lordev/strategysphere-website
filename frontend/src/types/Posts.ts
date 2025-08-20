export interface Posts {
    _id: string;
    title: string;
    publishedAt: string;
    mainImage: string;
    author: {
        name: string;
        bio: string;
        image: string; 
    };
    categories: {
        title: string;
        slug: string;
        description: string;
    };
    slug: string;
    description: string;
}
