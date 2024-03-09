import Button from "./Button";
import Image from "next/image";
import FooterLink from "./FooterLink";

export default function Footer() {
    return (
        <footer className="bg-footer bg-cover pt-40 relative grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr] *:z-10 ">
            <div className="col-start-2 grid grid-cols-2 gap-x-16 before:bg-background before:opacity-[.97] before:absolute before:inset-0 before:h-full *:z-10">
                <div className="w-1/2 flex flex-col gap-4">
                    <Image
                        width={420}
                        height={76}
                        src={"/logo.png"}
                        alt="logo business"
                        className="-mx-4"
                    />
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                        corrupti? Ab, voluptas consequuntur beatae reiciendis blanditiis.
                    </p>
                    <Button title="Contact us" />
                </div>
                <div className="grid grid-cols-[1fr_1fr_2fr] gap-x-8">
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
                        <input className="w-full mt-8" />
                    </div>
                </div>
            </div>
            <div className="text-end col-start-1 col-span-2 mt-40 py-4">
                <p className="text-muted pr-8">Copyright by John Doe &copy; 2024</p>
            </div>
        </footer>
    );
}
