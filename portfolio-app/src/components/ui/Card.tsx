"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

export function Card({ className, children, gradient = false, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md",
        gradient && "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-brand-blue/20 before:to-brand-purple/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
