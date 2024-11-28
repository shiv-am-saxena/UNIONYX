import FeaturedCourses from "@/components/FeaturedCourses";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

export default function page() {
	return (
		<main className="bg-[#121212] flex flex-col gap-0">
			<Navbar />
			<Hero />
			<FeaturedCourses />
			<Testimonials/>
		</main>
	);
}
