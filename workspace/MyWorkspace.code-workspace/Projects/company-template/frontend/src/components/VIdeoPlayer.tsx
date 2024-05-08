"use client";

import { useRef, useState } from "react";

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hover, SetHover] = useState(false);

    const togglePlay = () => {
        if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    const handleHoverEnter = () => {
        return SetHover(true);
    };

    const handleHoverLeave = () => {
        return SetHover(false);
    };

    const buttonStyle = "w-16 h-full m-auto transition-opacity duration-200 ease-in";

    return (
        <div
            className="relative"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
        >
            <video ref={videoRef} width={500} height={200} className="w-full">
                <source src="conference.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0">
                {isPlaying ? (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className={` ${buttonStyle} ${
                            hover ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={togglePlay}
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"
                                fill="var(--accent)"
                            ></path>
                        </g>
                    </svg>
                ) : (
                    <svg
                        fill="var(--accent)"
                        viewBox="0 0 32 32"
                        enableBackground="new 0 0 32 32"
                        version="1.1"
                        className={` ${buttonStyle} ${
                            hover ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={togglePlay}
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="play">
                                {" "}
                                <g>
                                    {" "}
                                    <path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008 c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"></path>{" "}
                                    <path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248 l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373 C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"></path>{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="stop"></g> <g id="pause"></g> <g id="replay"></g>{" "}
                            <g id="next"></g> <g id="Layer_8"></g> <g id="search"></g>{" "}
                            <g id="list"></g> <g id="love"></g> <g id="menu"></g>{" "}
                            <g id="add"></g> <g id="headset"></g> <g id="random"></g>{" "}
                            <g id="music"></g> <g id="setting"></g> <g id="Layer_17"></g>{" "}
                            <g id="Layer_18"></g> <g id="Layer_19"></g>{" "}
                            <g id="Layer_20"></g> <g id="Layer_21"></g>{" "}
                            <g id="Layer_22"></g> <g id="Layer_23"></g>{" "}
                            <g id="Layer_24"></g> <g id="Layer_25"></g>{" "}
                            <g id="Layer_26"></g>{" "}
                        </g>
                    </svg>
                )}
            </div>
        </div>
    );
}
