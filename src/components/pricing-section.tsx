"use client"

import { PricingCard } from "@/components/pricing-card"

const plans = [
  {
    name: "Personal Plan",
    description: "For you",
    price: "₹850",
    billing: "Billed monthly or annually. Cancel anytime.",
    userType: "Individual",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
    ctaText: "Start subscription",
  },
  {
    name: "Team Plan",
    description: "For your team",
    price: "₹2,000",
    billing: "Billed annually. Cancel anytime.",
    userType: "2 to 20 people",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
    ctaText: "Start subscription",
  },
  {
    name: "Enterprise Plan",
    description: "For your whole organization",
    price: "Contact sales for pricing",
    userType: "More than 20 people",
    features: [
      "Access to 27,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
    ctaText: "Request a demo",
  },
]

export function PricingSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

