import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import React from "react";

export default function page() {
	return (
		<main className="bg-[#121212] flex flex-col gap-0">
			<Hero />
			<FeaturedCourses />
			<Testimonials />
			<Contact />
		</main>
	);
}
