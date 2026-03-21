import { useState, FormEvent } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <SectionHeading
            label="Contact"
            title="Let's work together"
            description="Have a project in mind or just want to say hello? Drop me a message."
          />

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground block mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-secondary border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground block mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-secondary border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground block mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg bg-secondary border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={sending}>
                {sending ? "Sending…" : "Send Message"}
                <Send size={16} />
              </Button>
            </form>

            <div className="flex flex-col justify-center gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-4">Get in touch directly</h3>
                <a
                  href="mailto:alex@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  alex@example.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4">Find me online</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200 active:scale-95"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200 active:scale-95"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
