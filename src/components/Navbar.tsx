"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false); // Toggle for the mobile menu
	const pathname = usePathname();

	const navLinks = [
		{ name: "Home", slug: "/", isActive: true },
		{ name: "About", slug: "/about", isActive: true },
		{ name: "Courses", slug: "/course", isActive: true },
		{ name: "Pricing", slug: "/pricing", isActive: true },
		{ name: "Contact", slug: "/contact", isActive: true },
		{ name: "Login", slug: "/login", isActive: true },
	];

	// Properly typing the ref
	const dotLottieRef = useRef<DotLottieReact | null>(null);

	const dotLottieRefCallback = (lottie: DotLottieReact | null) => {
		dotLottieRef.current = lottie;
	};

	function play() {
		if (dotLottieRef.current) {
			dotLottieRef.current.play();
		}
	}

	return (
		<nav className="h-20 w-full sticky top-0 z-[1000] shadow-md bg-[#18181b]">
			<div className="flex justify-between items-center px-5 lg:px-20 py-4">
				{/* Logo */}
				<h1 className="text-2xl font-montserrat font-bold tracking-wide text-white md:text-4xl">UNIONYX</h1>

				{/* Lottie Menu Button for Mobile */}
				<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer md:hidden" style={{ width: "50px", height: "50px" }}>
					<DotLottieReact
						ref={dotLottieRefCallback}
						src="https://lottie.host/a2a56b61-73e4-462a-bbc2-05df3403825e/Q4DOP4n7fM.lottie"
						loop={true} // Add loop to make it loop
						autoplay={false} // Turn off autoplay to control it manually
						mode={isOpen ? "forward" : "reverse"}
						onClick={play} // Trigger play on click
						backgroundColor="#ffffff"
					/>
				</div>

				{/* Links for Desktop */}
				<div className="hidden md:flex md:gap-5 lg:gap-10 text-white md:text-md lg:text-xl">
					{navLinks.map((elem, ind) => (
						<Link href={elem.slug} key={ind} className="relative group px-1">
							<span>{elem.name}</span>
							<span
								className={`absolute inset-x-0 bottom-0 h-[1px] bg-white transition-all duration-300 group-hover:opacity-100 ${
									pathname === elem.slug ? "opacity-100" : "opacity-0"
								}`}></span>
						</Link>
					))}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`flex flex-col items-center -mt-1 bg-[#121212b9] backdrop-blur-lg text-white transition-all duration-300 overflow-hidden ${
					isOpen ? "max-h-[500px] py-5" : "max-h-0"
				} md:hidden`}>
				{navLinks.map((elem, ind) => (
					<Link
						href={elem.slug}
						key={ind}
						className="w-full text-center py-2"
						onClick={() => setIsOpen(false)} // Close menu on link click
					>
						{elem.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
