import { PropsWithChildren, Suspense } from "react";
import PageHeader from "@/components/PageHeader";

interface LayoutRouteProps extends PropsWithChildren {}

export default async function LayoutRoute({ children }: LayoutRouteProps) {
    return (
        <div>
            <section className="py-8 bg-black/20 text-foreground">
                <PageHeader heading="Our Blog" filter={[0, 2]} />
            </section>
            <div>
                <main className="lg:container max-sm:px-2 max-lg:px-4 py-16 space-y-12 sm:space-y-12 ">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_20rem] gap-2 lg:gap-4 bg-black/10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
