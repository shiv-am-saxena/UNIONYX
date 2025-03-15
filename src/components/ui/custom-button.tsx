"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    variant?: "default" | "outline" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
    asChild?: boolean
    withArrow?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ className, children, variant = "default", size = "default", withArrow = false, ...props }, ref) => {
        return (
            <Button
                className={cn(
                    "relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-medium",
                    withArrow && "group flex items-center gap-2",
                    className,
                )}
                variant={variant}
                size={size}
                ref={ref}
                {...props}
            >
                <motion.span initial={{ opacity: 1 }} whileHover={{ opacity: 1 }} className="relative z-10">
                    {children}
                </motion.span>

                {withArrow && (
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative z-10"
                    >
                        →
                    </motion.span>
                )}

                <motion.div
                    initial={{ scale: 0, x: "50%", y: "50%" }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    style={{ originX: 0.5, originY: 0.5 }}
                />
            </Button>
        )
    },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }

