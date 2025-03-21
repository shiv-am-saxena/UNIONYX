import { Globe } from "@/components/ui/world-map";

export function GlobeDemo() {
	return (
		<div className="relative h-1/4 flex items-start justify-center px-40 pb-52 pt-0 md:pb-80">
			<Globe className="top-0 lg:scale-150" />
		</div>
	);
}
