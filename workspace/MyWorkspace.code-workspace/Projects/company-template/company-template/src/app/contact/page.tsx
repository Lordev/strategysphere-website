import ContactForm from "@/components/ContactForm";
import FadeInAnimation from "@/components/FadeInAnimation";

export default function Contact() {
    return (
        <>
            <div className="py-60 bg-contact-me-banner bg-cover bg-right">
                <div className="text-white max-lg:px-8 max-w-screen-lg mx-auto">
                    <div className="w-fit">
                        <h1>Contact me</h1>
                        <h3>home - contact me</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="lg:grid lg:grid-cols-[1fr_repeat(2,minmax(0,_900px))_1fr] gap-8">
                    <div className="max-w-[600px] max-lg:mx-auto py-40 text-center px-8 lg:pl-8 col-start-2 ">
                        <ContactForm />
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19538.853348541707!2d4.64427497535815!3d52.255067954980106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sau!4v1710092692604!5m2!1snl!2sau"
                        loading="lazy"
                        className="w-full max-lg:h-screen max-lg:pb-20 col-start-3 col-span-full h-full"
                    ></iframe>
                </div>
            </div>
            <FadeInAnimation>
                <section className="bg-foreground py-8 text-end text-primary ">
                    <h2 className="mr-16">
                        Your company{`’`}s future with us, guaranteed success.
                    </h2>
                </section>
            </FadeInAnimation>
        </>
    );
}
