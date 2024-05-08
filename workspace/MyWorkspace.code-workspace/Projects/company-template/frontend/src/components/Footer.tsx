import Button from "./Button";
import Image from "next/image";
import FooterLink from "./FooterLink";
import { Input } from "./ui/input";

export default function Footer() {
    return (
        <footer className="bg-footer bg-cover lg:pt-40 pt-20 relative z-40">
            <div className="before:bg-background before:opacity-[.97] before:absolute before:inset-0 before:h-full">
                <div className="container lg:grid xl:grid-cols-2 gap-x-16 grid-cols-[20rem_1fr] relative">
                    <div className="xl:w-1/2 flex flex-col gap-4 mb-16 xl:mb-0 lg:text-start  lg:items-start ">
                        <Image
                            width={420}
                            height={76}
                            src={"/logo.png"}
                            alt="logo business"
                            className=""
                        />
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                            corrupti? Ab, voluptas consequuntur beatae reiciendis
                            blanditiis.
                        </p>
                        <Button title="Contact us" />
                    </div>
                    <div className="lg:grid lg:grid-cols-[1fr_1fr_2fr] gap-x-8 grid-cols-none *:mb-16 ">
                        <div>
                            <h5>Halstein</h5>
                            <ul className="*:mb-4 mt-8">
                                <li>
                                    <FooterLink href="#" text="Privacy" />
                                </li>
                                <li>
                                    <FooterLink href="#" text="Conditions" />
                                </li>
                                <li>
                                    <FooterLink href="#" text="Offices" />
                                </li>
                                <li>
                                    <FooterLink href="#" text="Careers" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>FAQ</h5>
                            <ul className="*:mb-4 mt-8">
                                <li>
                                    <FooterLink href="#" text="Got any questions?" />
                                </li>
                                <li>
                                    <FooterLink href="#" text="Buying tickets?" />
                                </li>
                                <li>
                                    <FooterLink href="#" text="How to find us?" />
                                </li>
                                <li>
                                    <FooterLink href="#" text="How to advertise?" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Subscribe</h5>
                            <form>
                                <Input
                                    autoComplete="email"
                                    type="email"
                                    className="lg:max-w-[300px] mt-8 w-full text-foreground"
                                    required
                                />
                                <Button title="submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-end mt-20">
                    <p className="text-red-100 pr-8">Copyright by John Doe &copy; 2024</p>
                </div>
            </div>
        </footer>
    );
}
