import { useEffect, useRef, useState } from "react";
import { Section, Note } from "./primitives";
import { CHAT, STATUS_STEPS } from "./data";
import { cn } from "@/lib/utils";

export function AgentsSection() {
  const [visible, setVisible] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setStarted(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setVisible((v) => (v >= CHAT.length ? 1 : v + 1));
    }, 1800);
    return () => clearInterval(id);
  }, [started]);

  const progress = Math.round((visible / CHAT.length) * 100);
  const identified = visible >= 3;
  const qualified = visible >= 5;

  return (
    <Section
      id="agentes"
      eyebrow="03 — Agentes de IA"
      title={
        <>
          Isso não é um chatbot. <span className="text-primary">É uma operação.</span>
        </>
      }
      intro="Veja um agente trabalhando: ele conduz a conversa, extrai o que importa, calcula o fit, agenda a reunião e atualiza o CRM enquanto responde."
    >
      <div ref={ref} className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="panel flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              V
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Agente Vantto</p>
              <p className="label-mono mt-0.5">online · responde em segundos</p>
            </div>
            <span className="label-mono ml-auto rounded-full bg-secondary px-2.5 py-1">
              Demonstração
            </span>
          </div>

          <div className="flex min-h-[380px] flex-col justify-end gap-3 bg-secondary/40 px-5 py-6">
            {CHAT.slice(0, visible).map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.from === "agent" ? "justify-start" : "justify-end")}
              >
                <p
                  className={cn(
                    "animate-rise max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    m.from === "agent"
                      ? "rounded-bl-sm bg-card text-ink shadow-sm"
                      : "rounded-br-sm bg-primary text-primary-foreground",
                  )}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border px-5 py-4">
            <p className="rounded-full border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground">
              Escreva uma mensagem…
            </p>
          </div>
        </div>

        <div className="panel p-5">
          <div className="flex items-center justify-between">
            <span className="label-mono">Vantto // qualificação em tempo real</span>
            <span className="label-mono text-primary">ativo</span>
          </div>

          <div className="mt-5 rounded-xl border border-border p-4">
            <p className="label-mono">Lead identificado</p>
            <dl className="mt-3 space-y-2 text-sm">
              {[
                ["Empresa", identified ? "Nexora" : "—"],
                ["Contato", identified ? "WhatsApp · anúncio" : "—"],
                ["Interesse", qualified ? "Agente 24/7" : "—"],
                ["Temperatura", qualified ? "Quente" : "—"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Score de qualificação</span>
              <span className="font-semibold text-ink">{progress}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between label-mono">
              <span>interesse: {qualified ? "alto" : "avaliando"}</span>
              <span>fit comercial</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border p-4">
            <p className="label-mono">Status</p>
            <ul className="mt-3 space-y-2 text-sm">
              {STATUS_STEPS.map((s, i) => {
                const done = visible >= i + 2;
                return (
                  <li key={s} className="flex items-center gap-2">
                    <span className={done ? "text-primary" : "text-muted-foreground"}>
                      {done ? "✓" : "•"}
                    </span>
                    <span className={done ? "text-ink" : "text-muted-foreground"}>{s}</span>
                  </li>
                );
              })}
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">→</span>
                <span className="font-semibold text-ink">Próxima ação: agendar reunião</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Note>
        Conversa, agenda e campos ilustrativos. Cada agente é configurado com as perguntas, os
        critérios e os limites definidos junto com a sua empresa — e o handoff para uma pessoa faz
        parte do desenho.
      </Note>
    </Section>
  );
}
