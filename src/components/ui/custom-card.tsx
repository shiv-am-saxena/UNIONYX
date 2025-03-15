/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"
import { motion } from "framer-motion"

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    cardHeader?: React.ReactNode
    cardContent?: React.ReactNode
    cardFooter?: React.ReactNode
    hoverEffect?: boolean
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
    ({ className, children, cardHeader, cardContent, cardFooter, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn("relative", className)}
                ref={ref}
                {...(props as any)} // Cast props to any to bypass type checking
            >
                <Card
                    className={cn(
                        "overflow-hidden border border-border/40 bg-background p-6 h-full flex flex-col justify-between",
                        hoverEffect &&
                        "transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:translate-y-[-5px]",
                    )}
                >
                    {cardHeader && <CardHeader className="p-0 pb-4">{cardHeader}</CardHeader>}
                    {cardContent && <CardContent className="p-0 py-4">{cardContent}</CardContent>}
                    {cardFooter && <CardFooter className="p-0 pt-4">{cardFooter}</CardFooter>}
                    {!cardHeader && !cardContent && !cardFooter && children}
                </Card>
            </motion.div>
        )
    },
)

CustomCard.displayName = "CustomCard"

export { CustomCard }