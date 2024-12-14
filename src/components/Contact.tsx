import { ContactForm } from "./ui/contact-form";


export function Contact() {

    return (
        <div className="h-full py-10 w-full relative flex flex-col items-center justify-center bg-[#18181b]">
            <h1 className="md:text-6xl text-4xl font-pristina text-white">Contact Us</h1>
            <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <ContactForm/>
            </div>
        </div>
    );
}
