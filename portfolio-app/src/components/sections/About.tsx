"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Layers, Zap, Cpu } from "lucide-react";

export function About() {
  return (
    <Section id="about" delay={0.1}>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white leading-tight">
            Engineering with <br />
            <span className="text-gradient">Product Intent.</span>
          </h2>
          
          <div className="space-y-4 text-white/70 font-sans leading-relaxed text-lg">
            <p>
              I don&apos;t just write code; I build systems that solve real-world problems. My approach bridges the gap between complex backend architectures and intuitive frontend experiences.
            </p>
            <p>
              Over the years, I&apos;ve engineered scalable platforms, integrated AI solutions, and optimized conversion-driven interfaces. I believe in writing clean, maintainable code while keeping the end-user at the center of every architectural decision.
            </p>
            <p>
              Whether it&apos;s designing a robust database schema or orchestrating complex state across a React application, I focus on performance, reliability, and business outcomes.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <Card gradient className="p-8">
            <Layers className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Systems Architecture</h3>
            <p className="text-white/60">
              Designing resilient, scalable systems that can handle real-world traffic and evolve with business needs.
            </p>
          </Card>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-6">
              <Zap className="w-6 h-6 text-brand-purple mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
              <p className="text-sm text-white/60">
                Optimizing core web vitals and database query efficiency.
              </p>
            </Card>
            
            <Card className="p-6">
              <Cpu className="w-6 h-6 text-brand-blue mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">AI Integration</h3>
              <p className="text-sm text-white/60">
                Implementing LLMs and machine learning pipelines.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
