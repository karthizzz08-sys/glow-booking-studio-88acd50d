type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      {align === "center" && <div className="gold-divider my-5" />}
      {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
