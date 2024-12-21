/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
	width: 400,
	height: 400,
	onRender: () => {},
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.3,
	dark: 0,
	diffuse: 0.4,
	mapSamples: 22000,
	mapBrightness: 0.9,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [0.5, 0.5, 0.5],
	markers: [
		{ location: [19.076, 72.8777], size: 0.1 },
		{ location: [-23.5505, -46.6333], size: 0.1 },
		{ location: [19.4326, -99.1332], size: 0.1 },
		{ location: [40.7128, -74.006], size: 0.1 },
	],
};

export function Globe({ className, config = GLOBE_CONFIG }: { className?: string; config?: COBEOptions }) {
	let phi = 0;
	let width = 0;
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const onRender = useCallback((state: Record<string, any>) => {
		phi += 0.005;
		state.phi = phi;
		state.width = width * 2;
		state.height = width * 2;
	}, []);

	const onResize = () => {
		if (canvasRef.current) {
			width = canvasRef.current.offsetWidth;
		}
	};

	useEffect(() => {
		window.addEventListener("resize", onResize);
		onResize();

		const globe = createGlobe(canvasRef.current!, {
			...config,
			width: width * 2,
			height: width * 2,
			onRender,
		});

		setTimeout(() => (canvasRef.current!.style.opacity = "1"));
		return () => globe.destroy();
	}, []);

	return (
		<div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
			<canvas className={cn("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")} ref={canvasRef} />
		</div>
	);
}
