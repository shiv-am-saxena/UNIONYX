import Image from "next/image";
import logo from "@/../public/logo.png";
export default function Footer() {
	return (
		<div className="h-1/3 py-5 w-full relative flex flex-col items-center justify-center bg-[#18181b]">
            <div className="border-t border-b py-10 w-[90%] border-white">
                <div className="inline-flex items-center justify-center w-full md:w-fit"><Image src={logo} className="size-14 lg:size-24 " alt="UNIONYX Logo"/> <span className="text-5xl lg:text-8xl bg-gradient-to-br from-slate-50 to-slate-500 tracking-wider bg-clip-text text-transparent font-bold font-montserrat">UNIONYX</span></div>
            </div>
            <div className="w-full px-4 flex items-center flex-col lg:flex-row justify-center md:px-16 pt-5">
                <p className="text-center">Copyright © {new Date().getFullYear()} UNIONYX. All rights reserved.<br/> Developed with ❤️ by Shivam Saxena.</p>
            </div>
		</div>
	);
}
