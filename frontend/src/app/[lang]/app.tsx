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
