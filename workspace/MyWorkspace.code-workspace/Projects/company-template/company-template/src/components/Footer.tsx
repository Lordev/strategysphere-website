import { Button } from "@/components/ui/button";

export function ButtonDestructive() {
    return <Button variant="destructive">Destructive</Button>;
}

export default function Footer() {
    return (
        <div className="bg-footer bg-cover h-[50vh] relative">
            <div className="bg-[#424656] opacity-[.98] absolute inset-0 h-full grid grid-rows-[repeat(2,_auto)]  grid-cols-[1fr_repeat(2,_minmax(900px,_1fr))_1fr]">
                <div className="col-start-2 flex flex-col gap-4 justify-center items-start w-2/4">
                    <h6 className="scroll-m-20 text-lg tracking-[.5rem] font-medium  text-[#B7891C]">
                        We deliver sublime services
                    </h6>
                    <h1 className="scroll-m-20 text-5xl tracking-tight  text-[#fff]">
                        The best chance to expand your{" "}
                        <span className="text-[#B7891C]"> business ventures</span>
                    </h1>
                    <Button
                        className="w-fit font-medium uppercase px-8 rounded-sm hover:bg-transparent hover:text-white mt-8"
                        variant="outline"
                    >
                        Contact us
                    </Button>
                </div>
                <div className="container col-start-3 row-start-2 text-end">
                    <p className="text-gray-400">Copyright by John Doe &copy; 2024</p>
                </div>
            </div>
        </div>
    );
}
