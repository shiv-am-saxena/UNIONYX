import Image from "next/image";
import logo from "@/../public/logo.png";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandInstagramFilled, IconBrandTwitterFilled } from "@tabler/icons-react";

export default function Footer() {
	return (
		<div className="h-1/3 py-5 w-full relative flex text-white flex-col items-center justify-center bg-[#18181b]">
			<div className="border-t border-b py-10 w-[90%] border-white flex items-center justify-between gap-8 flex-col lg:flex-row">
				<div className="w-fit flex items-center justify-evenly mx-auto lg:mx-0 flex-col">
					<div className="inline-flex items-center justify-center w-full md:w-fit">
						<Image src={logo} className="size-14 lg:size-24 " alt="UNIONYX Logo" />{" "}
						<span className="text-5xl lg:text-8xl bg-gradient-to-br from-slate-50 to-slate-500 tracking-wider bg-clip-text text-transparent font-bold font-montserrat">UNIONYX</span>
					</div>
					<div className="flex w-full items-center justify-evenly">
						<a href="https://twitter.com/shiv_am_saxena" target="_blank" rel="noopener noreferrer">
							<IconBrandTwitterFilled className="h-10 w-10 text-slate-300" />
						</a>
						<a href="https://instagram.com/shiv_am_saxena" target="_blank" rel="noopener noreferrer">
							<IconBrandInstagramFilled className="h-10 w-10 text-slate-300" />
						</a>
						<a href="https://linkedin.com/in/shiv-am-saxena" target="_blank" rel="noopener noreferrer">
							<IconBrandLinkedinFilled className="h-10 w-10 text-slate-300" />
						</a>
						<a href="https://github.com/shiv-am-saxena" target="_blank" rel="noopener noreferrer">
							<IconBrandGithubFilled className="h-10 w-10 text-slate-300" />
						</a>
					</div>
				</div>
                <div className="w-fit flex flex-col items-center lg:items-start gap-3">
                    <h2 className="uppercase mb-5 font-semibold text-xl">Company</h2>
                    <a className="text-slate-100" href="/about" rel="noopener noreferrer">About Us</a>
                    <a className="text-slate-100" href="/support" rel="noopener noreferrer">Support</a>
                    <a className="text-slate-100" href="/privacy-policy" rel="noopener noreferrer">Privacy Policy</a>
                    <a className="text-slate-100" href="/terms-n-conditions" rel="noopener noreferrer">Terms and Conditions</a>
                    <a className="text-slate-100" href="/pricing-n-refs" rel="noopener noreferrer">Pricing and Refunds</a>
                </div>
                <div className="w-fit flex flex-col items-center lg:items-start gap-3">
                    <h2 className="uppercase mb-5 font-semibold text-xl">Get In Touch</h2>
                    <a className="text-slate-100" href="tel:+916386665124" rel="noopener noreferrer">+91-638-666-5124</a>
                    <a className="text-slate-100" href="tel:+918604650124" rel="noopener noreferrer">+91-860-465-0124</a>
                    <a className="text-slate-100" href="mailto:secureshiv22@gmail.com" rel="noopener noreferrer">shivam2003official@gmail.com</a>
                    <a className="text-slate-100 text-center lg:text-left" href="#" rel="noopener noreferrer">D-Block Indirapuram colony Sec-12,<br/> Lucknow(UP), 226001</a>
                </div>
			</div>
			<div className="w-full px-4 flex items-center flex-col lg:flex-row justify-center md:px-16 pt-5">
				<p className="text-center">
					Copyright © {new Date().getFullYear()} UNIONYX. All rights reserved.
					<br /> Developed with ❤️ by Shivam Saxena.
				</p>
			</div>
		</div>
	);
}