import { Section, Note } from "./primitives";
import mockInstitucional from "@/assets/mock-institucional.jpg";
import mockLanding from "@/assets/mock-landing.jpg";
import mockLocal from "@/assets/mock-local.jpg";

function Browser({
  url,
  children,
  label,
  sub,
}: {
  url: string;
  children: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div>
      <div className="panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-3 truncate rounded-full bg-card px-3 py-1 font-mono text-[11px] text-muted-foreground">
            {url}
          </span>
        </div>
        {children}
      </div>
      <p className="mt-3 text-sm text-ink">
        <strong className="font-semibold">{label}</strong>{" "}
        <span className="text-muted-foreground">{sub}</span>
      </p>
    </div>
  );
}

export function SitesSection() {
  return (
    <Section
      id="sites"
      eyebrow="05 — Sites e landing pages"
      title="Seu site é parte da operação comercial."
      intro="Não é cartão de visita: é a etapa que recebe o tráfego, explica a proposta e entrega o contato para o agente sem perder ninguém no caminho."
    >
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Browser url="nexora.com.br" label="Site institucional" sub="estrutura completa">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 text-xs text-muted-foreground">
            <span className="font-bold text-ink">NEXORA.</span>
            <span className="hidden gap-4 sm:flex">
              <span>Empresa</span>
              <span>Serviços</span>
              <span>Cases</span>
              <span>Contato</span>
            </span>
            <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
              Fale conosco
            </span>
          </div>
          <div className="px-5 py-6">
            <p className="label-mono">Consultoria e engenharia</p>
            <h3 className="mt-2 text-xl font-bold text-ink">
              Transformamos ideias em experiências digitais.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Projetos sob medida para empresas que precisam de estrutura, performance e
              previsibilidade.
            </p>
            <div className="mt-4 flex gap-2 text-xs">
              <span className="rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
                Solicitar proposta
              </span>
              <span className="rounded-full border border-border px-3 py-1.5 text-ink">
                Ver cases
              </span>
            </div>
          </div>
          <img
            src={mockInstitucional}
            alt="Prévia de site institucional"
            loading="lazy"
            width={1024}
            height={640}
            className="h-40 w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-3 px-5 py-4 text-xs">
            {[
              ["Estratégia", "Diagnóstico e roadmap"],
              ["Engenharia", "Sistemas sob medida"],
              ["Suporte", "Evolução contínua"],
            ].map(([t, s]) => (
              <div key={t}>
                <p className="font-semibold text-ink">{t}</p>
                <p className="text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </Browser>

        <Browser url="orbita.app/oferta" label="Landing page" sub="foco em conversão">
          <img
            src={mockLanding}
            alt="Prévia de landing page"
            loading="lazy"
            width={1024}
            height={640}
            className="h-32 w-full object-cover"
          />
          <div className="px-5 py-5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-bold text-ink">Órbita</span>
              <span>Entrar</span>
            </div>
            <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 label-mono">
              Vagas limitadas
            </span>
            <h3 className="mt-3 text-xl font-bold text-ink">
              Reduza em 40% o tempo de resposta do seu time.
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>✓ Implantação em 14 dias</li>
              <li>✓ Integração com seu CRM</li>
              <li>✓ Acompanhamento semanal</li>
            </ul>
            <div className="mt-4 rounded-xl border border-border p-3">
              <p className="text-sm font-semibold text-ink">Receba o diagnóstico</p>
              <div className="mt-2 space-y-2">
                {["Seu nome", "E-mail corporativo", "WhatsApp"].map((p) => (
                  <div
                    key={p}
                    className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground"
                  >
                    {p}
                  </div>
                ))}
                <div className="rounded-md bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground">
                  Quero minha análise
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              {[
                ["+180", "empresas"],
                ["4,9", "avaliação"],
                ["14 d", "implantação"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-lg bg-secondary/70 p-2 text-center">
                  <p className="font-bold text-ink">{v}</p>
                  <p className="text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </Browser>

        <Browser url="clinicavitre.com.br" label="Site para empresa local" sub="agendamento">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 text-xs text-muted-foreground">
            <span className="font-bold text-ink">Clínica Vitré</span>
            <span className="hidden gap-3 sm:flex">
              <span>Serviços</span>
              <span>Equipe</span>
              <span>Avaliações</span>
            </span>
            <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
              WhatsApp
            </span>
          </div>
          <img
            src={mockLocal}
            alt="Prévia de site para empresa local"
            loading="lazy"
            width={1024}
            height={640}
            className="h-36 w-full object-cover"
          />
          <div className="px-5 py-5">
            <h3 className="text-xl font-bold text-ink">
              Odontologia com hora marcada e sem espera.
            </h3>
            <div className="mt-3 flex gap-2 text-xs">
              <span className="rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
                Agendar horário
              </span>
              <span className="rounded-full border border-border px-3 py-1.5 text-ink">
                Ver serviços
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              {["Implantes", "Ortodontia", "Clareamento"].map((s) => (
                <div key={s} className="rounded-lg border border-border p-2">
                  <p className="font-semibold text-ink">{s}</p>
                  <p className="text-muted-foreground">a partir de R$ 190</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              ★★★★★ 4,9 · 212 avaliações — “Atendimento rápido, agendei pelo site em menos de um
              minuto.” — Camila S.
            </p>
            <div className="mt-3 flex gap-2 text-xs">
              {["09:00", "13:30", "16:30"].map((h) => (
                <span key={h} className="rounded-md bg-secondary px-3 py-1.5 text-ink">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Browser>

        <Browser url="clinicavitre.com.br · mobile" label="Experiência mobile" sub="mesmo funil no celular">
          <div className="flex justify-center bg-secondary/50 py-6">
            <div className="w-56 overflow-hidden rounded-[28px] border border-border bg-card shadow-lg">
              <img
                src={mockLocal}
                alt="Prévia da versão mobile"
                loading="lazy"
                width={1024}
                height={640}
                className="h-28 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-ink">Agende sua consulta em 1 minuto.</h4>
                <div className="mt-3 rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground">
                  Agendar agora
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
                  {["Implante", "Limpeza", "Estética"].map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-2 py-1 text-ink">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">★★★★★ 4,9 · 212 avaliações</p>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Seg–Sex · 8h às 19h · WhatsApp
                </p>
              </div>
            </div>
          </div>
        </Browser>
      </div>

      <Note>
        Mockups demonstrativos de estrutura e hierarquia, com marcas fictícias. O projeto real é
        desenhado a partir da sua marca e do seu funil.
      </Note>
    </Section>
  );
}
