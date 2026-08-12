import { useState } from "react";
import { Section, CtaButton, Note } from "./primitives";
import { PROBLEMS, ECOSYSTEM, FLOW, PRINCIPLES, PROCESS, FAQ, WHATSAPP_URL } from "./data";
import { cn } from "@/lib/utils";

export function ProblemSection() {
  return (
    <Section
      id="cenario"
      eyebrow="01 — O cenário"
      title={
        <>
          Enquanto você trabalha, <span className="text-ink-soft">a operação vaza oportunidade.</span>
        </>
      }
    >
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="label-mono">{p.when}</span>
            <p className="mt-3 text-base font-semibold leading-snug text-ink">{p.title}</p>
            <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 label-mono">
              {p.tag}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-base text-muted-foreground">
        Nada disso se resolve contratando mais uma ferramenta. Resolve quando as etapas passam a
        conversar entre si.
      </p>
      <div className="mt-10 rounded-2xl bg-ink px-8 py-10">
        <p className="label-mono text-background/70">É aqui que a Vantto AI entra</p>
        <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-background sm:text-3xl">
          Construímos o sistema que fecha essas brechas.
        </h3>
      </div>
    </Section>
  );
}

export function EcosystemSection() {
  return (
    <Section
      id="ecossistema"
      eyebrow="02 — Ecossistema Vantto"
      title="Tecnologia para cada etapa do crescimento."
      intro="Cinco camadas que funcionam sozinhas ou combinadas. Cada uma entrega para a próxima — é isso que transforma serviço solto em sistema."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ECOSYSTEM.map((e) => (
          <div
            key={e.n}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-panel)]"
          >
            <span className="font-mono text-xs text-primary">{e.n}</span>
            <h3 className="mt-3 text-xl font-bold text-ink">{e.title}</h3>
            <p className="label-mono mt-1">{e.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FlowSection() {
  return (
    <Section
      id="operacao"
      eyebrow="06 — Do clique à venda"
      title={
        <>
          Sua operação. <span className="text-primary">Conectada.</span>
        </>
      }
      intro="Cada etapa entrega a próxima sem intervalo e sem alguém no meio empurrando. Acompanhe o caminho completo de um lead."
    >
      <div className="mt-12 border-l border-border pl-6 sm:pl-10">
        {FLOW.map((f) => (
          <div key={f.n} className="relative pb-10">
            <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card font-mono text-[10px] text-primary sm:-left-[47px]">
              {f.n}
            </span>
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="text-lg font-bold text-ink">{f.title}</h3>
              <span className="label-mono">{f.kind}</span>
              {f.metric ? (
                <span className="ml-auto rounded-full bg-secondary px-3 py-1 font-mono text-xs text-ink">
                  {f.metric}
                </span>
              ) : null}
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
      <Note>Dados ilustrativos.</Note>
    </Section>
  );
}

export function PrinciplesSection() {
  return (
    <Section
      eyebrow="07 — Posição"
      title={
        <>
          Como pensamos <span className="text-ink-soft">uma operação.</span>
        </>
      }
      intro="Quatro princípios que definem o que construímos — e o que recusamos construir."
    >
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <div key={p.n} className="bg-card p-8">
            <span className="font-mono text-xs text-primary">{p.n}</span>
            <h3 className="mt-3 text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section
      eyebrow="08 — Processo"
      title="Do diagnóstico ao no ar em cerca de 4 semanas."
      intro="Prazo estimado para uma operação padrão. Projetos com integrações mais complexas seguem o mesmo método, com cronograma ajustado."
    >
      <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((p) => (
          <li key={p.n} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary">{p.n}</span>
              <span className="label-mono">{p.when}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="09 — Dúvidas"
      title={
        <>
          Perguntas <span className="text-ink-soft">frequentes.</span>
        </>
      }
      intro="Não encontrou o que precisava? A análise inicial é o melhor lugar para perguntar."
    >
      <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {FAQ.map((item, i) => (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-ink">{item.q}</span>
              <span
                className={cn(
                  "text-primary transition-transform",
                  open === i && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            {open === i ? (
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CtaSection() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="analise"
      eyebrow="10 — Próximo passo"
      title="Análise da sua operação."
      intro="Mostramos onde os leads estão parando hoje, o que dá para automatizar primeiro e qual seria o desenho da operação conectada. Sem compromisso."
    >
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <ul className="space-y-3 text-sm text-ink">
            {[
              "Mapa do funil atual e pontos de perda",
              "O que o agente de IA assume na sua operação",
              "Estimativa de prazo e escopo",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-primary">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton href={WHATSAPP_URL}>Falar no WhatsApp</CtaButton>
            <span className="label-mono">Resposta no mesmo dia útil</span>
          </div>
        </div>

        <form
          className="panel p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <p className="text-base font-semibold text-ink">Solicitar análise</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["Nome", "Empresa", "E-mail", "WhatsApp"].map((f) => (
              <input
                key={f}
                required
                placeholder={f}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            ))}
          </div>
          <textarea
            rows={4}
            placeholder="O que você quer resolver"
            className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {sent ? "Solicitação enviada ✓" : "Enviar solicitação"}
          </button>
          <p className="label-mono mt-3 text-center">Seus dados não são compartilhados</p>
        </form>
      </div>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <span className="text-sm font-bold text-ink">
          Vantto <span className="text-primary">AI</span>
        </span>
        <span className="label-mono">
          © {new Date().getFullYear()} Vantto AI · sistemas de IA, automação e aquisição
        </span>
      </div>
    </footer>
  );
}
