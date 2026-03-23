"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import { textLimit } from "@/utils/textlimit";

const projects = [
  {
    id: "ryzly",
    title: "Ryzly",
    description: "Developed key frontend features for a challenge-based platform connecting talents to career opportunities. Implemented interactive project workflows, enabling users to complete real-world challenges and build verifiable portfolios that increase visibility to employers.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    image: "/images/ryzly.png", 
    live: "https://www.ryzly.app/",
  },
  {
    id: "chasescroll",
    title: "Chasescroll",
    description: "Contributed to the development of a modern event management platform that streamlines event creation, discovery, and participation. Implemented dynamic user interfaces, optimized data fetching, and improved user experience for seamless event interactions.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    image: "/images/chasescroll.png",
    live: "https://www.chasescroll.com/",
  },
  {
    id: "monosend",
    title: "Monosend",
    description: "Built and maintained the admin dashboard and landing page for a fintech platform, improving usability and performance while supporting core features like transactions and user management.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    image: "/images/monosend.png", 
    live: "https://www.monosend.app/",
  },
  {
    id: "hiroek",
    title: "Hiroek",
    description: "An event management platform that helps organizers launch events quickly, manage ticket sales, engage audiences, and streamline event operations with built-in marketing support.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    image: "/images/hiroek.png", 
    live: "https://www.hiroek.io/",
  },
  // {
  //   id: "fintrace",
  //   title: "Fintrace",
  //   description: "Personal finance tracker with AI-powered categorization and spending insights.",
  //   tech: ["TypeScript", "Tailwind", "OpenAI", "Plaid"],
  //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   id: "palette",
  //   title: "Palette Studio",
  //   description: "A color palette generator for designers, with export to CSS, Figma, and Tailwind.",
  //   tech: ["React", "Canvas API", "Tailwind", "PWA"],
  //   image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
  //   github: "#",
  //   live: "#",
  // },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl flex flex-col h-full overflow-hidden bg-card border border-border/50 shadow-md transition-all duration-700 will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-3/2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card/80 hover:text-primary transition-colors"
            aria-label={`${project.title} live site`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {textLimit(project.description, 150)}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A collection of projects I've built, from design systems to full-stack applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}