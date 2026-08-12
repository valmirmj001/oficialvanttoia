import { useEffect, useState } from "react";
import { CtaButton } from "./primitives";
import { PIPELINE } from "./data";
import { cn } from "@/lib/utils";

const CHIPS = ["Agentes de IA", "Automação", "Tráfego pago", "Sites", "Integrações"];

function useTicker() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export function Hero() {
  const time = useTicker();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % (PIPELINE.length + 2)), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 label-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Vantto AI // sistemas de IA, automação e aquisição
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl md:text-6xl">
            <span className="text-ink-soft">Sua empresa não precisa de mais ferramentas.</span>{" "}
            Precisa de sistemas que trabalham por ela.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A Vantto AI combina agentes de Inteligência Artificial, automação, tráfego e tecnologia
            para transformar processos em crescimento.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaButton href="#analise">Quero transformar minha operação</CtaButton>
            <a
              href="#ecossistema"
              className="text-sm font-semibold text-ink transition-colors hover:text-primary"
            >
              Conhecer a Vantto AI ↓
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {CHIPS.map((c) => (
              <span key={c} className="label-mono">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <span className="label-mono">Vantto // pipeline comercial</span>
              <span className="label-mono flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                ativo <strong className="font-mono text-ink">{time}</strong>
              </span>
            </div>

            <div className="divide-y divide-border/70">
              {PIPELINE.map((step, i) => {
                const done = i < active;
                return (
                  <div
                    key={step.n}
                    className={cn(
                      "flex items-center gap-4 px-5 py-3.5 transition-colors",
                      done && "bg-accent/40",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[10px]",
                        done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      {done ? "✓" : step.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink">{step.title}</p>
                      <p className="label-mono mt-0.5">{step.meta}</p>
                    </div>
                    <span
                      className={cn(
                        "label-mono rounded-full px-2.5 py-1",
                        done ? "bg-primary/10 text-primary" : "bg-secondary",
                      )}
                    >
                      {done ? "concluído" : "aguardando"}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 bg-ink px-5 py-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs text-background/85">
                webhook: novo lead recebido
              </span>
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="label-mono">demonstração</span>
              <span className="label-mono">dados ilustrativos</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {[
              { v: "4s", l: "Tempo de resposta" },
              { v: "24/7", l: "Disponibilidade" },
              { v: "6", l: "Etapas automáticas" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card px-4 py-4">
                <p className="text-2xl font-bold text-ink">{s.v}</p>
                <p className="label-mono mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
