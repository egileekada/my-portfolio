"use client"
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Figma", "Storybook", "Vite", "Webpack"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Supabase"],
  },
  // {
  //   category: "Testing & Quality",
  //   items: ["Vitest", "Playwright", "Cypress", "Accessibility", "Lighthouse"],
  // },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`rounded-xl bg-card border border-border/50 p-6 shadow-md shadow-background/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${gi * 90}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <h3 className="text-sm font-semibold text-primary mb-4">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
