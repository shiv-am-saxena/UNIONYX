import { ContactForm } from "./ui/contact-form";
import { GlobeDemo } from "./ui/globe";

export function Contact() {
	return (
		<div className="h-full py-10 w-full relative flex flex-col items-center justify-center bg-[#18181b]">
			<h1 className="md:text-6xl text-4xl font-pristina font-semibold tracking-wide text-white">Contact Us</h1>
			<h1 className="text-sm md:text-lg text-center text-white">Feel free to share your suggestions and feedback<br/> here. We&rsquo;ll surely try our level best to improve your <br/> experience.</h1>
			<div className="flex w-full py-10 flex-col-reverse lg:flex-row items-center justify-evenly overflow-hidden gap-16 md:gap-0">
				<ContactForm />
				<GlobeDemo />
			</div>
		</div>
	);
}
