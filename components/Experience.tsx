"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const jobs = [
    {
        role: "Front-End Developer",
        company: "Chasescroll",
        period: "July 2023 - Present",
        location: "Remote / Port Harcourt, Nigeria",
        description:
            "Developing and maintaining highly interactive user interfaces using Next.js and TypeScript. Implemented SSR and SSG for improved SEO and performance, built reusable React components, and collaborated with backend developers to integrate APIs and optimize data flow across devices.",
        achievements: [
            "Improved SEO and page load performance through SSR and SSG strategies",
            "Built a reusable component library that significantly enhanced codebase maintainability",
            "Optimized data flow by collaborating closely with backend developers on API integration",
        ],
        techStack: ["Next.js", "TypeScript", "React", "SSR", "SSG"],
    },
    {
        role: "Front-End Developer",
        company: "Hiroek",
        period: "2024 - 2025",
        location: "Remote",
        description:
            "Building the frontend for Hiroek, an event management platform designed for real-world event planners. The platform helps organizers get events online fast, sell tickets stress-free, manage their audience, and stay connected before and after events — with built-in sales and marketing support.",
        achievements: [
            "Developed a seamless ticket sales flow focused on simplicity and speed for event organizers",
            "Built audience management tools enabling organizers to engage attendees before and after events",
            "Implemented sales and marketing support features within an intuitive, no-friction UI",
            "Contributed to a platform philosophy of practical, easy-to-use tools with no complicated systems",
        ],
        techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "REST APIs",
        ],
    },
    {
        role: "Front-End Developer",
        company: "Monosend",
        period: "January 2025 - June 2025",
        location: "Remote",
        description:
            "Worked on the landing page and admin dashboard for Monosend, a fintech platform. Delivered a polished public-facing landing page and a functional admin interface to support internal operations.",
        achievements: [
            "Built and shipped the Monosend landing page with a focus on conversion-friendly design",
            "Developed the admin dashboard to support internal fintech operations and data management",
            "Ensured responsive and accessible UI across both the landing and admin interfaces",
        ],
        techStack: ["React", "Vite.js", "JavaScript", "CSS", "REST APIs"],
    },
    {
        role: "Front-End Developer",
        company: "Ucontext",
        period: "August 2022 - November 2022",
        location: "Port Harcourt, Nigeria",
        description:
            "Developed a modular e-commerce website using Next.js with responsive design and accessibility standards. Translated Figma mockups into interactive interfaces and optimized load times using SSR and dynamic imports.",
        achievements: [
            "Reduced load times by leveraging SSR and dynamic imports on the e-commerce platform",
            "Achieved pixel-perfect implementation of Figma designs into production-ready UI",
            "Ensured WCAG accessibility compliance across all key pages",
        ],
        techStack: [
            "Next.js",
            "React",
            "Figma",
            "SSR",
            "Dynamic Imports",
            "CSS",
        ],
    },
    {
        role: "Front-End Developer",
        company: "Icoweb",
        period: "2021 - 2022",
        location: "Port Harcourt, Nigeria",
        description:
            "Built and maintained company websites using React.js, ensuring visual consistency and user-friendly interfaces. Collaborated with backend teams for API integrations and contributed to performance tuning and bug fixes.",
        achievements: [
            "Maintained visual consistency across multiple company web properties",
            "Contributed to measurable performance improvements through tuning and bug fixes",
            "Strengthened cross-functional workflow between frontend and backend teams",
        ],
        techStack: ["React.js", "JavaScript", "CSS", "REST APIs"],
    },
    {
        role: "Freelance Front-End Developer",
        company: "Self-Employed",
        period: "2019 - 2021",
        location: "Port Harcourt, Nigeria",
        description:
            "Developed and deployed responsive websites for multiple clients using React and Vite.js. Projects include Dara Studio, Mono Send, and Geeva.",
        achievements: [
            "Successfully delivered 3+ client projects — Dara Studio, Mono Send, and Geeva",
            "Built fully responsive layouts optimized for all screen sizes and devices",
            "Independently managed client communication, design, and deployment end-to-end",
        ],
        techStack: ["React", "Vite.js", "JavaScript", "HTML", "CSS"],
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
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"
                                }`}
                                style={{
                                    transitionDelay: isVisible
                                        ? `${i * 100}ms`
                                        : "0ms",
                                    transitionTimingFunction:
                                        "cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block" />

                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {job.role}
                                        </h3>
                                        <span className="text-primary text-sm font-medium">
                                            {job.company}
                                        </span>
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
