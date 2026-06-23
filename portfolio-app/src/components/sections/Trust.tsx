"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GitCommit, Users, Terminal, Code } from "lucide-react";

export function Trust() {
  return (
    <Section id="process" delay={0.2} className="bg-white/[0.02] border-y border-white/5 py-32 mt-32">
      <div className="flex flex-col gap-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
            Engineering Process & Impact
          </h2>
          <p className="text-white/60 font-sans text-lg">
            I believe in transparent workflows, continuous integration, and shipping features that move the needle. Here is how I approach development.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-transparent border-none shadow-none hover:y-0">
            <GitCommit className="w-8 h-8 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">1,200+</h3>
            <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Commits this year</p>
          </Card>
          
          <Card className="text-center p-6 bg-transparent border-none shadow-none hover:y-0">
            <Users className="w-8 h-8 text-brand-purple mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
            <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Projects Delivered</p>
          </Card>
          
          <Card className="text-center p-6 bg-transparent border-none shadow-none hover:y-0">
            <Terminal className="w-8 h-8 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-sm text-white/50 uppercase tracking-wider font-medium">System Uptime</p>
          </Card>
          
          <Card className="text-center p-6 bg-transparent border-none shadow-none hover:y-0">
            <Code className="w-8 h-8 text-brand-purple mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Clean</h3>
            <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Architecture</p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-8">
          <Card gradient className="p-8">
            <h3 className="text-xl font-bold text-white mb-4">Development Philosophy</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-brand-blue font-bold">01.</span>
                <span>Prioritize user experience over clever technical hacks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-purple font-bold">02.</span>
                <span>Type safety and automated testing are non-negotiable.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-blue font-bold">03.</span>
                <span>Build for scale from day one, but avoid premature optimization.</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-white mb-4">The Workflow</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Requirements gathering & system design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Iterative component-driven development</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <span>CI/CD deployment and performance auditing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Production monitoring and scaling</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
