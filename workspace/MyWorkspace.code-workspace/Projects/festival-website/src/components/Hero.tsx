import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-hero bg-no-repeat h-screen bg-cover flex items-end">
            <div className="w-1/2 mx-auto h-3/4 flex-col flex justify-center gap-40 items-center">
                <div className="text-7xl text-center text-yellow-400 uppercase max-w-[885px] max-md:text-4xl">
                    <span className="text-amber-100">This music Festival</span>{" "}
                    <span className="text-amber-100">will</span>
                    <span className="text-yellow-400"> be the Brightest</span>
                </div>
                <div className="text-5xl font-semibold text-center text-white uppercase">
                    280 : 08 : 52 : 06
                </div>
                <Image src="/scroll-icon.png" alt="scroll-icon" width={52} height={64} />
            </div>
        </div>
    );
}
