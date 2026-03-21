interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="mb-14">
      <span className="text-xs font-mono text-primary tracking-widest uppercase block mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}
