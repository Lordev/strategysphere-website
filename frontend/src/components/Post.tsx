import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import type { Post } from '@/types/Post';
import ImageSlider from './ImageSlider';
import Quote from './Quote';
import VideoEmbed from './VideoEmbed';
import Link from 'next/link';

export default function Post({ data }: { data: Post[] }) {
	const { mainImage, author, publishedAt, body, title } = data[0];
	return (
		<article className="space-y-20">
			{mainImage && (
				<Image
					src={mainImage}
					alt="article cover image"
					width={400}
					height={400}
					className="w-full h-96 object-cover rounded-lg "
				/>
			)}
			<div className="max-w-screen-lg mx-auto px-4 md:px-20">
				<div className="space-y-8 ">
					<h1>{title}</h1>
					<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
						<div className="flex flex-wrap items-center space-x-2">
							{author.image && (
								<Image
									src={author.image}
									alt="article cover image"
									width={400}
									height={400}
									className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
								/>
							)}
							<Link
								href={`/en/blog/author/${author.name}`}
								className="hover:text-accent"
							>
								<span>{author && author.name}</span>
							</Link>
							<span>•</span>
							<Link
								href={`/blog/date/${publishedAt.substring(0, 7)}`}
								className="text-sm hover:text-accent"
							>
								{formatDate(publishedAt)}
							</Link>
						</div>
					</div>
				</div>
				<div className=" mt-8 mb-40">
					{body.map((item, idx) => {
						if (item?.image) {
							return (
								<Image
									src={item.image.url}
									alt="image"
									key={item.image._key ?? `image-${idx}`}
									height={item.image.height}
									width={item.image.width}
									className="w-full h-96 object-cover rounded-lg py-4 mt-20"
								/>
							);
						}

						if (item?.imageGallery) {
							return (
								<ImageSlider
									key={item.imageGallery._key ?? `gallery-${idx}`}
									imageData={item.imageGallery.images}
								/>
							);
						}

						if (item?.youtube) {
							return (
								<VideoEmbed
									key={item.youtube._key ?? `youtube-${idx}`}
									data={item.youtube.url}
								/>
							);
						}

						if (item?.block) {
							const { text } = item.block;
							switch (item.block.style) {
								case 'normal':
									return (
										<p
											className="text-white/80 px-1"
											key={item.block._key ?? `block-${idx}`}
										>
											{text.text}
										</p>
									);
								case 'h1':
									return (
										<h1 key={item.block._key ?? `h1-${idx}`}>
											{text.text}
										</h1>
									);
								case 'h2':
									return (
										<h2
											className="mt-20 mb-8"
											key={item.block._key ?? `h2-${idx}`}
										>
											{text.text}
										</h2>
									);
								case 'h3':
									return (
										<h3
											className="mt-20"
											key={item.block._key ?? `h3-${idx}`}
										>
											{text.text}
										</h3>
									);
								case 'h4':
									return (
										<h4
											className="mt-20"
											key={item.block._key ?? `h4-${idx}`}
										>
											{text.text}
										</h4>
									);
								case 'blockquote':
									return (
										<Quote
											key={item.block._key ?? `quote-${idx}`}
											body={item.block.text.text}
											author={author.name}
										/>
									);
							}
						}

						return null;
					})}
				</div>
			</div>
		</article>
	);
}
