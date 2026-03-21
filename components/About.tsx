"use client"
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  { stat: "5+", label: "Years Experience" },
  { stat: "40+", label: "Projects Shipped" },
  { stat: "12", label: "Open Source Libs" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <SectionHeading
            label="About"
            title="A bit about me"
            description="I'm a frontend developer based in San Francisco with 5+ years of experience building products for startups and design agencies."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl bg-card border border-border/50 p-6 text-center shadow-md shadow-background/50"
              >
                <span className="text-3xl font-bold text-gradient block mb-1">{h.stat}</span>
                <span className="text-sm text-muted-foreground">{h.label}</span>
              </div>
            ))}
          </div>

          <div className="text-muted-foreground leading-relaxed space-y-4 max-w-2xl">
            <p>
              I specialize in React ecosystems, building component libraries, design systems, and
              high-performance web apps. I care deeply about accessibility, motion design, and
              developer experience.
            </p>
            <p>
              When I'm not coding, you'll find me exploring typography, contributing to open-source
              projects, or experimenting with generative art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
