"use client";
import Image from "next/image";
import QuoteSlider from "@/components/ArtistSlider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <body className="bg-background">
            <Header />
            <Hero />
            <div>
                <div className="h-20 bg-white flex flex-col justify-center">
                    <div className="text-black font-semibold text-[50px] font-[kumbhsans] overflow-hidden flex gap-16">
                        <span>CHECK IT OUT</span>
                        <span>CHECK IT OUT</span>
                        <span>CHECK IT OUT</span>
                        <span>CHECK IT OUT</span>
                        <span>CHECK IT OUT</span>
                        <span>CHECK IT OUT</span>
                    </div>
                </div>
                <div className="w-3/4 mx-auto grid items-center h-full py-80">
                    <div className="flex flex-row mx-auto gap-8">
                        <div className="w-96">
                            <QuoteSlider />
                        </div>
                        <div className="flex flex-col px-5 uppercase text-[#9E6C4D] gap-16 justify-center">
                            <div>
                                <div className="w-full text-4xl font-bold">Artist </div>
                                <div className="mt-4 w-full text-base font-medium">
                                    Mark the twinley
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <Image
                                    src={"/facebook-icon.png"}
                                    alt="facebook"
                                    width={40}
                                    height={45}
                                />
                                <Image
                                    src={"/youtube-icon.png"}
                                    alt="facebook"
                                    width={37}
                                    height={28}
                                />
                                <Image
                                    src={"/instagram-icon.png"}
                                    alt="facebook"
                                    width={26}
                                    height={28}
                                />
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-4/5 grid grid-cols-2">
                <div>
                    <h5>calendar</h5>
                    <h1>event schedule</h1>
                </div>
                <div></div>
            </div>
        </body>
    );
}
