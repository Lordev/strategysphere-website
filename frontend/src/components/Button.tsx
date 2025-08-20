import { Button as UiButton } from "@/components/ui/button";

interface ButtonProps {
    title: string;
}

export default function Button({ title }: ButtonProps) {
    return (
        <UiButton
            type="submit"
            className="w-fit bg-foreground text-primary font-medium uppercase px-8 rounded-sm hover:bg-transparent hover:text-white mt-8"
            variant="outline"
        >
            {title}
        </UiButton>
    );
}
