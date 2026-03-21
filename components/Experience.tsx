"use client"
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    role: "Senior Frontend Engineer",
    company: "Streamline",
    period: "2023 – Present",
    description:
      "Leading the design system team, building reusable components used across 4 product lines. Improved page load performance by 38%.",
  },
  {
    role: "Frontend Developer",
    company: "Tactile Studio",
    period: "2021 – 2023",
    description:
      "Built client-facing dashboards and interactive data visualizations for fintech and healthcare clients.",
  },
  {
    role: "UI Engineer",
    company: "Mosaic Labs",
    period: "2020 – 2021",
    description:
      "Developed the component library and contributed to the accessibility audit, achieving WCAG AA compliance.",
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2019 – 2020",
    description:
      "Built marketing sites and small web apps for local businesses using React and WordPress.",
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <SectionHeading label="Experience" title="Where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className={`md:pl-10 relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <span className="text-primary text-sm font-medium">{job.company}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
