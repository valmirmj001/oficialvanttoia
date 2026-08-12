import { Section, Note } from "./primitives";

const WEEKS = [38, 52, 64, 58, 79, 96, 112];
const SOURCES = [
  { label: "Busca paga", value: 46 },
  { label: "Redes sociais", value: 38 },
  { label: "Orgânico e direto", value: 16 },
];
const CAMPAIGNS = [
  { code: "CAMP-01 · Institucional", leads: "128 leads", status: "ativa" },
  { code: "CAMP-02 · Remarketing", leads: "96 leads", status: "ativa" },
  { code: "CAMP-03 · Teste de criativo", leads: "88 leads", status: "otimizando" },
];

export function TrafficSection() {
  const max = Math.max(...WEEKS);

  return (
    <Section
      id="trafego"
      eyebrow="04 — Tráfego pago"
      title="Atraia as pessoas certas."
      intro="Campanha não termina quando o anúncio sobe. Acompanhamos o caminho completo: quanto custa aparecer, quanto custa conversar e o que disso vira oportunidade."
    >
      <div className="panel mt-12 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="label-mono">Campanha ativa · últimos 30 dias</span>
          <span className="label-mono">Dados ilustrativos</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { l: "Investimento", v: "R$ 8.400", s: "verba do período" },
            { l: "Leads", v: "312", s: "↑ volume em alta" },
            { l: "Custo por lead", v: "R$ 26,92", s: "↓ custo em queda" },
            { l: "Conversão", v: "23,7%", s: "lead → oportunidade" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl border border-border bg-secondary/40 p-4">
              <p className="label-mono">{k.l}</p>
              <p className="mt-2 text-2xl font-bold text-ink">{k.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{k.s}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-border p-5">
            <p className="label-mono">Leads por semana</p>
            <div className="mt-6 flex h-44 items-end gap-3">
              {WEEKS.map((w, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md bg-primary/85 transition-all"
                    style={{ height: `${(w / max) * 100}%` }}
                  />
                  <span className="label-mono">S{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border p-5">
            <p className="label-mono">Origem dos leads</p>
            <ul className="mt-6 space-y-5">
              {SOURCES.map((s) => (
                <li key={s.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink">{s.label}</span>
                    <span className="font-semibold text-ink">{s.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-primary" style={{ width: `${s.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-6 divide-y divide-border rounded-xl border border-border">
          {CAMPAIGNS.map((c) => (
            <li key={c.code} className="flex flex-wrap items-center gap-3 px-4 py-3.5">
              <span className="font-mono text-xs text-ink-soft">{c.code}</span>
              <strong className="text-sm text-ink">{c.leads}</strong>
              <span className="label-mono ml-auto rounded-full bg-secondary px-2.5 py-1">
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Note>
        Painel conceitual, criado para mostrar como acompanhamos a operação. Os números não
        representam resultados da Vantto AI nem de clientes — resultado depende de oferta, mercado e
        capacidade de atendimento.
      </Note>
    </Section>
  );
}
