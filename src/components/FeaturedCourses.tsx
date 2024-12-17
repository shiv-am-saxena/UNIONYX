'use client';
import courseList from "@/data/courses.json";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import HoverEffect from "./ui/card-hover-effect";

interface Course {
	id: number | string;
	title: string;
	description: string;
	instructor: string;
    duration: string;
	category: string;
	isFeatured: boolean;
	price: string | number;
}

export function FeaturedCourses() {
    const courses = courseList.courses.filter( (item: Course) => { if(item.isFeatured){ return item}})
	return (
		<div className="w-full h-full bg-[#18181b] flex flex-col items-center justify-center relative overflow-hidden mx-auto -mt-1 py-10 md:p-0">
			<div className="p-4 relative z-10 w-full flex flex-col items-center text-center gap-10">
			<h1 className="md:text-6xl text-4xl font-pristina font-semibold tracking-wide text-white">Featured Courses</h1>
			</div>
			<div className="gap-4 w-full p-10 ">
				<HoverEffect items={courses} />
			</div>
			<div className="mb-10">
				<Link href="/courses">
					<HoverBorderGradient containerClassName="rounded-full" as="button" className="dark:bg-[#18181b] bg-white text-black dark:text-white flex items-center space-x-2">
						View All Courses
					</HoverBorderGradient>
				</Link>
			</div>
		</div>
	);
}
