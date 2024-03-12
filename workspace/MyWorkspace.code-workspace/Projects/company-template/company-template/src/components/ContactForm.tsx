import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "./Button";

export default function ContactForm() {
    return (
        <form className="*:mb-6 *:placeholder:text-foreground">
            <Input type="name" placeholder="First Name" />
            <Input type="name" placeholder="Last Name" />
            <Input type="email" placeholder="Email Address" />
            <Textarea rows={10} placeholder="Message" />
            <Button title="submit" />
        </form>
    );
}
