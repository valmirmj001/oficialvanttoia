import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { AgentsSection } from "@/components/site/AgentsSection";
import { TrafficSection } from "@/components/site/TrafficSection";
import { SitesSection } from "@/components/site/SitesSection";
import {
  ProblemSection,
  EcosystemSection,
  FlowSection,
  PrinciplesSection,
  ProcessSection,
  FaqSection,
  CtaSection,
  SiteFooter,
} from "@/components/site/sections";

const title = "Vantto AI — Sistemas de IA, automação e aquisição";
const description =
  "A Vantto AI combina agentes de Inteligência Artificial, automação, tráfego pago e sites para transformar processos em crescimento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <EcosystemSection />
        <AgentsSection />
        <TrafficSection />
        <SitesSection />
        <FlowSection />
        <PrinciplesSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
