/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false); // Toggle for the mobile menu
	const pathname = usePathname();

	const navLinks = [
		{ name: "Home", slug: "/" },
		{ name: "About", slug: "/about" },
		{ name: "Courses", slug: "/course" },
		{ name: "Pricing", slug: "/pricing" },
		{ name: "Contact", slug: "/contact" },
		{ name: "Login", slug: "/login" },
	];

	const handleMenuToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="h-20 w-full sticky top-0 z-[1000] shadow-md bg-[#18181b]">
			<div className="flex justify-between items-center px-5 lg:px-20 py-4">
				{/* Logo */}
				<h1 className="text-2xl font-montserrat font-bold tracking-wide text-white md:text-4xl">UNIONYX</h1>

				{/* Hamburger Menu */}
				<motion.div
					onClick={handleMenuToggle}
					className="cursor-pointer md:hidden"
					initial={{ rotate: 0 }}
					animate={{ rotate: isOpen ? 90 : 0 }}
					transition={{ duration: 0.3 }}
					style={{ width: "50px", height: "50px" }}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-full h-full text-white">
						{isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
					</svg>
				</motion.div>

				{/* Desktop Links */}
				<div className="hidden md:flex md:gap-5 lg:gap-10 text-white md:text-md lg:text-xl">
					{navLinks.map(({ name, slug }, index) => (
						<Link href={slug} key={index} className="relative group px-1">
							<span>{name}</span>
							<span
								className={`absolute inset-x-0 bottom-0 h-[1px] bg-white transition-all duration-300 group-hover:opacity-100 ${
									pathname === slug ? "opacity-100" : "opacity-0"
								}`}></span>
						</Link>
					))}
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`-mt-2 flex flex-col items-center bg-[#121212b9] backdrop-blur-lg text-white transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] py-5" : "max-h-0"} md:hidden`}>
				{navLinks.map(({ name, slug }, index) => (
					<Link href={slug} key={index} className="w-full text-center py-2" onClick={() => setIsOpen(false)}>
						{name}
					</Link>
				))}
			</div>
		</nav>
	);
}
