import React from "react";

interface VideoEmbedProps {
    data: string;
}

export default function VideoEmbed({ data }: VideoEmbedProps) {
    const getYoutubeEmbedUrl = (url: string) => {
        const videoId = url.split("/").pop()?.split("?")[0];
        if (!videoId) return null;
        return `https://www.youtube.com/embed/${videoId}`;
    };

    if (!data) return <div>Invalid video URL</div>;

    const embedUrl = getYoutubeEmbedUrl(data);

    if (!embedUrl) return <div>Invalid video URL</div>;

    return (
        <div className="video-embed relative pb-56.25 h-72 lg:h-[450px] overflow-hidden my-20">
            <iframe
                title="video"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
}
