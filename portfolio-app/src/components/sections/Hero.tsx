"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code2, Database, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm font-medium text-white/80">Available for new opportunities</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white font-display leading-[1.1]">
            Building scalable <br className="hidden md:block" />
            <span className="text-gradient">web applications</span> <br className="hidden md:block" />
            & AI experiences.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-xl font-sans leading-relaxed">
            I am a full-stack developer focused on product engineering, building intelligent systems, and crafting premium frontend experiences that convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary" size="lg" className="gap-2">
              View Case Studies <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Abstract Floating UI Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          {/* Main Dashboard Abstract */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-10 w-[85%] h-[300px] glass-card rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex gap-4">
              <div className="w-1/3 h-24 rounded-lg bg-white/5 animate-pulse" />
              <div className="w-2/3 h-24 rounded-lg bg-white/5 animate-pulse" />
            </div>
            <div className="w-full h-32 rounded-lg bg-gradient-to-r from-brand-blue/20 to-brand-purple/20" />
          </motion.div>

          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-0 top-32 glass-card p-4 rounded-xl flex items-center gap-4 shadow-2xl"
          >
            <div className="p-3 bg-brand-blue/20 rounded-lg text-brand-blue">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Frontend Architecture</p>
              <p className="text-xs text-white/50">React, Next.js, Framer</p>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute right-10 bottom-10 glass-card p-4 rounded-xl flex items-center gap-4 shadow-2xl"
          >
            <div className="p-3 bg-brand-purple/20 rounded-lg text-brand-purple">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Backend Systems</p>
              <p className="text-xs text-white/50">Node.js, PostgreSQL, AI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
