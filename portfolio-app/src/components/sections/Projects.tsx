"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const caseStudies = [
  {
    title: "LibraFlow",
    subtitle: "Modern Library Management System",
    description: "A comprehensive SaaS platform for modern libraries, replacing legacy systems with a scalable, real-time architecture.",
    problem: "Legacy library systems were slow, lacked real-time inventory tracking, and offered poor user experiences for both staff and patrons.",
    solution: "Engineered a Next.js frontend with a robust Node.js/PostgreSQL backend, implementing real-time circulation tracking via WebSockets and automated notifications.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    imageGradient: "from-blue-600/40 to-cyan-500/40"
  },
  {
    title: "AI Support Assistant",
    subtitle: "Enterprise Customer Service LLM",
    description: "An AI-powered routing and resolution system that integrates with existing helpdesk software to automate tier-1 support.",
    problem: "Customer support teams were overwhelmed with repetitive queries, leading to high response times and operational costs.",
    solution: "Developed an intelligent routing engine using RAG (Retrieval-Augmented Generation) and LangChain to accurately resolve 45% of incoming tickets autonomously.",
    tags: ["Python", "LangChain", "OpenAI", "Vector DB"],
    imageGradient: "from-purple-600/40 to-pink-500/40"
  }
];

export function Projects() {
  return (
    <Section id="work" delay={0.3}>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              Selected Work
            </h2>
            <p className="text-white/60 font-sans text-lg max-w-xl">
              A deep dive into real-world applications I&apos;ve engineered, focusing on architecture, problem-solving, and measurable outcomes.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            View GitHub <FaGithub className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid gap-12">
          {caseStudies.map((study, idx) => (
            <Card key={idx} className="p-0 overflow-hidden border-white/10 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Visual Side */}
                <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${study.imageGradient} p-8 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                  <div className="relative z-10 w-full max-w-sm aspect-video bg-[#0a0a0a] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <div className="text-white/50 text-sm font-medium">Dashboard Preview</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-white/[0.02]">
                  <div className="space-y-6">
                    <div>
                      <div className="text-brand-blue text-sm font-bold uppercase tracking-wider mb-2">
                        {study.subtitle}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-white/5">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">The Problem</h4>
                        <p className="text-sm text-white/60 leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">The Solution</h4>
                        <p className="text-sm text-white/60 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button variant="default" size="sm" className="gap-2">
                        View Live <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
