export default function Skeleton() {
    return (
        <div className="p-4 rounded-lg bg-black/20 min-h-[1000px] relative w-full">
            <h5 className="mt-4 space-y-16">Browse By Category</h5>

            <div className="space-y-4">
                <div className="flex flex-wrap py-2  border-gray-700">
                    <div className="skeleton h-8 w-full px-3 py-1 rounded-lg my-1 bg-zinc-700"></div>
                    <div className="skeleton h-8 w-1/2 px-3 py-1 rounded-lg my-1 bg-zinc-700"></div>
                    <div className="skeleton h-8 w-3/4 px-3 py-1 rounded-lg my-1 bg-zinc-700"></div>
                    <div className="skeleton h-8 w-full px-3 py-1 rounded-lg my-1 bg-zinc-700"></div>
                </div>
            </div>
            <div className="space-y-2">
                <h5>Recent Posts</h5>
                <div>
                    <div className="skeleton h-2 w-full px-3 py-1 rounded-lg mt-4 bg-zinc-700 "></div>
                    <div className="skeleton h-8 w-full px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                    <div className="skeleton h-8 w-2/4 px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                    <div className="skeleton h-2 w-full px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                </div>
                <div>
                    <div className="skeleton h-2 w-full px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                    <div className="skeleton h-8 w-full px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                    <div className="skeleton h-8 w-2/4 px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                    <div className="skeleton h-2 w-full px-3 py-1 rounded-lg mt-4 bg-zinc-700"></div>
                </div>
            </div>
        </div>
    );
}
