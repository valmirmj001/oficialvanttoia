import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border/70 py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {eyebrow ? <p className="label-mono">{eyebrow}</p> : null}
        {title ? (
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.08] text-ink sm:text-4xl md:text-5xl">
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-[0_16px_32px_-16px_var(--primary)] hover:-translate-y-0.5 hover:bg-primary/90"
          : "text-ink hover:text-primary",
        className,
      )}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 max-w-3xl border-l-2 border-border pl-4 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}
