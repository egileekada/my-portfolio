"use client"
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    period: "2023 - Present",
    description:
      "Building scalable web and mobile applications using React, Next.js, and React Native. Integrated payment solutions (Paystack), implemented authentication flows, and optimized performance across multiple client projects.",
  },
  {
    role: "Frontend Engineer",
    company: "Personal Projects",
    period: "2022 - Present",
    description:
      "Developed full-featured dashboards with TanStack Query and modern state management. Implemented infinite scrolling, reusable UI components, and responsive design systems using Tailwind and Chakra UI.",
  },
  {
    role: "Mobile App Developer",
    company: "Independent",
    period: "2022 - 2023",
    description:
      "Built cross-platform mobile apps with React Native and Expo, including map integrations, location services, and Google Places API for real-time user interactions.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Self-Taught / Learning Phase",
    period: "2021 - 2022",
    description:
      "Gained strong foundations in JavaScript, React, and modern web development. Built multiple projects including landing pages, portfolio sites, and API-driven applications.",
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
