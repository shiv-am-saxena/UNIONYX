"use client";
import courseList from "@/data/courses.json";
import HoverEffect from "@/components/ui/card-hover-effect";


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
export default function Courses() {
    const courses = courseList.courses.filter( (item: Course) => { if(item.isFeatured){ return item}})
    return (
        <div className="w-full h-full py-20 bg-[#18181b]">
            <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-9xl font-semibold text-center text-neutral-800 dark:text-neutral-200 font-sans">
                Courses
            </h2>
            <div className="gap-4 w-full p-10 ">
				<HoverEffect items={courses} />
			</div>
        </div>
    );
}
