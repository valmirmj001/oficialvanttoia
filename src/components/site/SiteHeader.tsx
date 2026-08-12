import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "./data";

const NAV = [
  { id: "cenario", n: "01", label: "Cenário" },
  { id: "ecossistema", n: "02", label: "Ecossistema" },
  { id: "agentes", n: "03", label: "Agentes" },
  { id: "trafego", n: "04", label: "Tráfego" },
  { id: "sites", n: "05", label: "Sites" },
  { id: "operacao", n: "06", label: "Operação" },
  { id: "faq", n: "07", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-border/80 bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
            V
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            Vantto <span className="text-primary">AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              <span className="font-mono text-[10px] text-muted-foreground group-hover:text-primary">
                _{item.n}_{" "}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Analisar minha operação →
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border px-3 py-2 text-sm text-ink lg:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-6 pb-6 pt-2 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-ink-soft"
            >
              <span className="font-mono text-[10px] text-muted-foreground">_{item.n}_ </span>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
