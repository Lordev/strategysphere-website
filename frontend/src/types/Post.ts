export interface Post {
    _id: string;
    title: string;
    publishedAt: string;
    mainImage: string;
    body: {
        block: {
            _key: string;
            _type: string;
            style: string;
            text: {
                text: string;
                _key: string;
            };
        };
        image: {
            url: string;
            _key: string;
            _type: string;
            width: number;
            height: number;
        };
        imageGallery: {
            _key: string;
            _type: string;
            images: {
                url: string;
                _key: string;
            }[];
        };
        blockquote: {
            _key: string;
            _type: string;
            quote: string;
        };
        youtube: {
            url: string;
            _key: string;
            _type: string;
        };
        images: {
            url: string;
            _key: string;
        }[];
    }[];
    author: {
        name: string;
        bio: string;
        image: string; // Assuming the author's image is a URL
    };
    categories: {
        title: string;
        slug: string;
    };
    slug: string;
    description: string;
}
