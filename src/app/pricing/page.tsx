import { PricingSection } from "@/components/pricing-section";
import React from "react";


export default function AppleCardsCarouselDemo() {

    return (
        <div className="w-full h-full py-20 bg-[#18181b]">
            <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-9xl font-semibold text-center text-neutral-800 dark:text-neutral-200 font-sans">
                Pricing
            </h2>
            <PricingSection />
        </div>
    );
}

