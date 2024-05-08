import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "./Button";

export default function ContactForm() {
    return (
        <form className="*:mb-6 *:placeholder:text-foreground max-w-[600px]">
            <Input type="name" placeholder="First Name" required />
            <Input type="name" placeholder="Last Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Textarea rows={10} placeholder="Message" required />
            <Button title="submit" />
        </form>
    );
}
