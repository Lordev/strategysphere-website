export default function Skeleton({ count }: { count: number }) {
    const skeletons = Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col gap-4 w-full">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
        </div>
    ));

    return <>{skeletons}</>;
}
