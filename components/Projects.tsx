import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Aura Design System",
    description: "A comprehensive component library used across 8 products, serving 200k+ monthly users.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Metric Dashboard",
    description: "Real-time analytics platform with interactive charts, filters, and data export capabilities.",
    tech: ["Next.js", "D3.js", "PostgreSQL", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Nomad Travel App",
    description: "A travel planning tool for digital nomads with itinerary building and cost tracking.",
    tech: ["React", "Mapbox", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Typeform Clone",
    description: "An interactive form builder with conditional logic, themes, and analytics.",
    tech: ["React", "Zustand", "Framer Motion", "Supabase"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Fintrace",
    description: "Personal finance tracker with AI-powered categorization and spending insights.",
    tech: ["TypeScript", "Tailwind", "OpenAI", "Plaid"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Palette Studio",
    description: "A color palette generator for designers, with export to CSS, Figma, and Tailwind.",
    tech: ["React", "Canvas API", "Tailwind", "PWA"],
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl overflow-hidden bg-card border border-border/50 shadow-md shadow-background/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            className="p-2 rounded-full bg-card/80 text-foreground hover:text-primary transition-colors"
            aria-label={`${project.title} GitHub`}
          >
            <Github size={18} />
          </a>
          <a
            href={project.live}
            className="p-2 rounded-full bg-card/80 text-foreground hover:text-primary transition-colors"
            aria-label={`${project.title} live site`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
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
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
