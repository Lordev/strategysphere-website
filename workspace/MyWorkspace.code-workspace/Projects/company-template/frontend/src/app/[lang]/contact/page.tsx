import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import PageHeader from "@/components/PageHeader";
import Parallax from "@/components/Parallax";

export default function Contact() {
    return (
        <main>
            <section className="py-40 bg-contact-me-banner bg-cover bg-top text-foreground">
                <PageHeader heading="Contact us" />
            </section>
            <section>
                <div className="lg:grid lg:grid-cols-[1fr_repeat(2,minmax(0,_900px))_1fr] gap-8 ">
                    <div className="max-w-[900px] max-lg:mx-auto xl:py-40 py-20 col-start-2 max-lg:text-center px-2">
                        <h6>SUBMIT INQUIRY</h6>
                        <h2 className="mb-16">Interested in working together?</h2>
                        <ContactForm />
                    </div>
                    <div className="col-start-3 col-span-full flex flex-col gap-4">
                        <Map />
                    </div>
                </div>
            </section>

            <Parallax
                bgImage="/offices-contact.png"
                bgImageAlt="office buildings"
                strength={300}
                bgClassName="object-cover"
            >
                <div className="lg:container py-20 md:py-40 max-lg:px-4">
                    <h6>OUR LOCATIONS</h6>
                    <h2 className="mb-16">Explore Our Offices Worldwide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 ">
                        <div>
                            <h5>Paris</h5>
                            <address>
                                <p>123 Rue de la République, 75001 Paris, France</p>
                                <p>Telephone: +33 1 23 45 67 89</p>
                                <p>Email: info.paris@example.com</p>
                            </address>
                        </div>
                        <div>
                            <h5>Amsterdam</h5>
                            <address>
                                <p>456 Keizersgracht, 1016 Amsterdam, Netherlands</p>
                                <p>Telephone: +31 20 123 4567</p>
                                <p>Email: info.amsterdam@example.com</p>
                            </address>
                        </div>
                        <div>
                            <h5>New York</h5>
                            <address>
                                <p>789 Fifth Avenue, New York, NY 10022, USA</p>
                                <p>Telephone: +1 212-123-4567</p>
                                <p>Email: info.ny@example.com</p>
                            </address>
                        </div>
                        <div>
                            <h5>Tokyo</h5>
                            <address>
                                <p>10-1 Yurakucho, Chiyoda City, Tokyo 100-0006, Japan</p>
                                <p>Telephone: +81 3-1234-5678</p>
                                <p>Email: info.tokyo@example.com</p>
                            </address>
                        </div>
                    </div>
                </div>
            </Parallax>
            <section className="bg-foreground py-8 text-center text-primary ">
                <h2>Follow us and receive latest researches, insights & news.</h2>
            </section>
        </main>
    );
}
