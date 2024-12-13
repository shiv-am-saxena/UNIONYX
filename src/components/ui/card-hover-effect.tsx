"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

type Course = {
	id: number | string;
	title: string;
	description: string;
	instructor: string;
	duration: string;
	category: string;
	isFeatured: boolean;
	price: string | number;
};

export default function HoverEffect({ items, className }: { items: Course[]; className?: string }): React.ReactNode {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
			{items.map((item, idx) => (
				<Link href={`/courses/${item.id}`} key={idx} className="relative group block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#393941] block rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { duration: 0.15 } }}
								exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardTag>{item.category}</CardTag>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
						<CardInstructor>{item.instructor}</CardInstructor>
						<CardPrice>{item.price}</CardPrice>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return (
		<div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-[#18181b]/50 backdrop-blur-lg border border-transparent dark:border-white/[0.2] group-hover:border-zinc-400 relative z-20", className)}>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export const CardTag = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <div className={cn("relative w-fit top-0 left-0 text-white text-sm bg-[#18181b] border border-white px-3 py-1 rounded-lg", className)}>{children}</div>;
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};

export const CardInstructor = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <p className={cn("mt-4 text-zinc-500 tracking-wide text-sm", className)}>Instructor: {children}</p>;
};

export const CardPrice = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <p className={cn("mt-2 text-zinc-300 tracking-wide font-bold", className)}>Price: {children}</p>;
};
