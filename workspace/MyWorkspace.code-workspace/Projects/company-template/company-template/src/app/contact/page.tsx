import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <div className="py-60 col-span-4 bg-contact-me-banner bg-cover grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr]">
                <div className="text-foreground col-start-2">
                    <h1>Contact me</h1>
                    <h3>home - contact me</h3>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 col-start-2 mb-40">
                    <div className="w-1/2 mx-auto py-40">
                        <ContactForm />
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19538.853348541707!2d4.64427497535815!3d52.255067954980106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sau!4v1710092692604!5m2!1snl!2sau"
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
