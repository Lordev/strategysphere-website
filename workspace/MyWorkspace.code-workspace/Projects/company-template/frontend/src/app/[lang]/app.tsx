import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

const MyApp: React.FC<{ Component: React.ComponentType<any>; pageProps: any }> = ({
    Component,
    pageProps,
}) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            // Your custom logic for route change tracking goes here
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <NavMenu />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default MyApp;
