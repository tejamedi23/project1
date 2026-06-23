"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" delay={0.2} className="py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              Let&apos;s build something <br />
              <span className="text-gradient">exceptional.</span>
            </h2>
            <p className="text-white/60 font-sans text-lg max-w-md leading-relaxed">
              Whether you&apos;re an early-stage startup needing a scalable MVP or an established company looking to optimize complex systems, I&apos;m ready to help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              <span className="text-white/80">Available for contract roles</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-purple" />
              <span className="text-white/80">Fast response within 24 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              <span className="text-white/80">Focus on measurable business impact</span>
            </div>
          </div>
        </div>

        <Card gradient className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Mail className="w-32 h-32 text-brand-blue" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white">Start a conversation</h3>
            <p className="text-white/60 text-sm">
              Tell me about your project requirements, timeline, and technical challenges.
            </p>

            <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/50 uppercase">Message</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all min-h-[120px] resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <Button variant="primary" size="lg" className="w-full mt-2 gap-2 justify-center">
                Send Message <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </Section>
  );
}
