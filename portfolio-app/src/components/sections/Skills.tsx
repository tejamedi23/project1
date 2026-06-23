"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const skillClusters = [
  {
    title: "Frontend Engineering",
    description: "Building scalable, accessible, and performant user interfaces.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20"
  },
  {
    title: "Backend Systems",
    description: "Designing robust APIs and microservices architecture.",
    technologies: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "WebSockets"],
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20"
  },
  {
    title: "Database & Cloud",
    description: "Managing data integrity, caching, and scalable infrastructure.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Vercel"],
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "border-purple-500/20"
  },
  {
    title: "AI Integration",
    description: "Orchestrating intelligent features into consumer applications.",
    technologies: ["OpenAI API", "LangChain", "Vector Databases", "Prompt Engineering", "RAG Systems"],
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20"
  }
];

export function Skills() {
  return (
    <Section id="skills" delay={0.2}>
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
            Technology Ecosystem
          </h2>
          <p className="text-white/60 font-sans text-lg">
            A comprehensive overview of my technical capabilities and development stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillClusters.map((cluster, idx) => (
            <Card key={idx} className="p-8 group">
              <div className="flex flex-col h-full gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cluster.title}</h3>
                  <p className="text-white/60 text-sm">{cluster.description}</p>
                </div>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {cluster.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cluster.color} border ${cluster.border} text-white/90 group-hover:border-white/30 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
