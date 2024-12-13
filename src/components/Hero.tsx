"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";
import { Button } from "./ui/moving-borders";

export function Hero() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="relative flex flex-col gap-4 items-center justify-center px-4">
				<div className="w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0">
					<div className="p-4 md:mt-20 relative z-10 w-full flex flex-col items-center text-center gap-10">
						<h1 className="md:text-9xl text-6xl font-[800] bg-gradient-to-br from-slate-50 to-slate-500 tracking-wider bg-clip-text text-transparent font-montserrat">UNIONYX</h1>
						<h1 className="md:text-7xl text-2xl  text-transparent bg-clip-text bg-gradient-to-b font-bold from-neutral-50 to-neutral-400 p-4">Master the Art of Development</h1>
						<p className="w-2/3 font-semibold text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">
							Dive into our comprehensive <i className="font-mono text-neutral-200">Video Editing, Fullstack Development & Graphic Designing courses</i> and transform your career journey
							today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
						</p>
						<div className="p-4">
							<Link href="/courses">
								<Button borderRadius="1.75rem" className="bg-white dark:bg-[#18181b] text-black dark:text-white border-neutral-200 dark:border-slate-800">
									Explore Courses
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</AuroraBackground>
	);
}
