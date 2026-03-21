import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-narrow relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <p
            className="text-sm font-mono text-primary tracking-wider mb-4 opacity-0 animate-reveal-up"
            style={{ animationDelay: "200ms" }}
          >
            Hello, I'm
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 opacity-0 animate-reveal-up"
            style={{ animationDelay: "350ms" }}
          >
            Alex Rivera
            <span className="block text-gradient">Frontend Developer</span>
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10 opacity-0 animate-reveal-up"
            style={{ animationDelay: "500ms" }}
          >
            I craft fast, accessible, and visually refined web experiences. Passionate about
            design systems, performance, and the intersection of code and creativity.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-12 opacity-0 animate-reveal-up"
            style={{ animationDelay: "650ms" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div
            className="flex items-center gap-4 opacity-0 animate-reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <span className="w-12 h-px bg-border ml-2" />
            <span className="text-xs text-muted-foreground font-mono">Available for work</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
