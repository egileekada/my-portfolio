export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Egileonisofien Ekada. Built with Next js & Tailwind.</span>
        <a
          href="#"
          className="hover:text-primary transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
