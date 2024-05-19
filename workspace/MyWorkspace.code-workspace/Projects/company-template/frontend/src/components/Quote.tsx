interface QuoteProps {
    body: string;
    author: string;
}

export default function Quote({ body, author }: QuoteProps) {
    return (
        <div className="flex flex-col items-center mx-2 sm:mx-12 max-w-screen-lg mt-20 bg-white/10 py-20">
            <div className="relative text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-8 w-4 h-4 dark:text-gray-700"
                >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-12 py-1 text-lg italic">{body}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-8 w-4 h-4 dark:text-gray-700"
                >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            {author ? <h3 className="text-accent">{author}</h3> : "unknown"}
        </div>
    );
}
