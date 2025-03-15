"use client"

import { motion } from "framer-motion"
import { CheckIcon } from "@/components/check-icon"
import { UserIcon } from "@/components/user-icon"
import { UsersIcon } from "@/components/users-icon"
import { BuildingIcon } from "@/components/building-icon"
import { CustomCard } from "@/components/ui/custom-card"
import { CustomButton } from "@/components/ui/custom-button"

interface PricingCardProps {
  plan: {
    name: string
    description: string
    price: string
    billing?: string
    userType: string
    features: string[]
    ctaText: string
  }
  index: number
}

export function PricingCard({ plan, index }: PricingCardProps) {
  const getIcon = () => {
    if (plan.name === "Personal Plan") {
      return <UserIcon className="w-5 h-5" />
    } else if (plan.name === "Team Plan") {
      return <UsersIcon className="w-5 h-5" />
    } else {
      return <BuildingIcon className="w-5 h-5" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <CustomCard className="h-full">
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-muted-foreground mt-1">{plan.description}</p>

            <div className="flex items-center gap-2 mt-4">
              <div className="text-muted-foreground">{getIcon()}</div>
              <span className="text-muted-foreground">{plan.userType}</span>
            </div>

            <div className="mt-4">
              {plan.price === "Contact sales for pricing" ? (
                <div className="text-2xl font-bold">{plan.price}</div>
              ) : (
                <div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">Starting at {plan.price}</span>
                    <span className="text-muted-foreground ml-1">per month</span>
                  </div>
                  {plan.billing && <p className="text-sm text-muted-foreground mt-1">{plan.billing}</p>}
                </div>
              )}
            </div>

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8">
            <CustomButton className="w-full" size="lg" withArrow>
              {plan.ctaText}
            </CustomButton>
          </div>
        </div>
      </CustomCard>
    </motion.div>
  )
}

