import NextLink from "next/link";

interface FooterLinkProps {
    href: string;
    text: string;
}

export default function FooterLink({ href, text }: FooterLinkProps) {
    return (
        <>
            <NextLink
                className="font-medium text-muted hover:text-foreground transition-colors duration-150 ease-in-out text-sm md:text-base"
                href={href}
            >
                {text}
            </NextLink>
        </>
    );
}
