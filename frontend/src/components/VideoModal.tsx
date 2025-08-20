'use client';
import { useState, useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import videoPreview from '../../public/images/video-preview.jpg';
import Loader from './Loader';

export default function VideoModal({}) {
	const [open, setOpen] = useState(false);
	const playerRef = useRef<HTMLIFrameElement | null>(null);

	const playVideo = () => {
		setOpen(true);
		if (playerRef.current) {
			const iframe = playerRef.current;
			iframe.contentWindow?.postMessage(
				JSON.stringify({ method: 'play' }),
				'*'
			);
		}
	};

	return (
		<div className="relative">
			<div
				className="cursor-pointer relative overflow-hidden max-h-[75vh]"
				onClick={() => playVideo()}
			>
				<Image
					src={videoPreview}
					alt="video player image"
					style={{
						width: '100%',
						height: 'auto',
					}}
					sizes="100vw"
				/>

				<svg
					fill="var(--accent)"
					viewBox="0 0 32 32"
					enableBackground="new 0 0 32 32"
					version="1.1"
					className="absolute inset-0 m-auto w-16 h-auto"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{' '}
						<g id="play">
							{' '}
							<g>
								{' '}
								<path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008 c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"></path>{' '}
								<path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248 l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373 C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"></path>{' '}
							</g>{' '}
						</g>{' '}
						<g id="stop"></g> <g id="pause"></g> <g id="replay"></g>{' '}
						<g id="next"></g> <g id="Layer_8"></g>{' '}
						<g id="search"></g> <g id="list"></g> <g id="love"></g>{' '}
						<g id="menu"></g> <g id="add"></g> <g id="headset"></g>{' '}
						<g id="random"></g> <g id="music"></g>{' '}
						<g id="setting"></g> <g id="Layer_17"></g>{' '}
						<g id="Layer_18"></g> <g id="Layer_19"></g>{' '}
						<g id="Layer_20"></g> <g id="Layer_21"></g>{' '}
						<g id="Layer_22"></g> <g id="Layer_23"></g>{' '}
						<g id="Layer_24"></g> <g id="Layer_25"></g>{' '}
						<g id="Layer_26"></g>{' '}
					</g>
				</svg>
			</div>
			<div
				className={`fixed bg-black/75 h-full w-full z-[999] inset-0 transition-all delay-100 duration-300 ${
					!open ? 'invisible' : 'visible'
				}`}
			>
				<Icon
					icon={'material-symbols:close'}
					width={50}
					height={50}
					onClick={() => setOpen(!open)}
					color="var(--foreground)"
					className="text-secondary-foreground  absolute  right-0 top-4 lg:right-7 lg:top-10 opacity-100 z-50 w-[45px] lg:w-[50px] cursor-pointer"
				/>
				<div
					className={`relative h-full w-full flex justify-center items-center transition-opacity delay-100 duration-300 ${
						open ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div
						style={{
							position: 'relative',
							width: '80vw',
							height: 'auto',
							maxWidth: '1500px',
						}}
					>
						<div
							style={{
								padding: '56.25% 0 0 0',
								position: 'relative',
							}}
						>
							<iframe
								ref={playerRef}
								title="Vimeo video player"
								src="https://player.vimeo.com/video/370134864?h=07a5a8322d&autoplay=1"
								style={{
									position: 'absolute',
									top: '0',
									left: '0',
									width: '100%',
									height: '100%',
								}}
								allow="autoplay; fullscreen; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
