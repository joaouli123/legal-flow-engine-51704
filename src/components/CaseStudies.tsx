import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, MapPin, Megaphone, Search } from "lucide-react";

interface CaseStudiesProps {
  onOpenModal: () => void;
}

const cases = [
  {
    area: "Trabalhista",
    location: "Capital",
    duration: "45 dias",
    metrics: [
      { label: "Visitas orgânicas", value: "+132%", trending: true },
      { label: "CPC (Google Pesquisa)", value: "R$ 1,45" },
      { label: "CPL", value: "R$ 18,70" },
      { label: "Leads qualificados", value: "31" },
      { label: "Consultas agendadas", value: "17 (55%)" },
      { label: "Propostas enviadas", value: "12" },
      { label: "Honorários contratados", value: "R$ 22–28 mil", tooltip: true }
    ],
    channel: "Google Pesquisa",
    investment: "R$ 580"
  },
  {
    area: "Família",
    location: "Interior",
    duration: "30 dias",
    metrics: [
      { label: "Cliques no WhatsApp", value: "3,4x", trending: true },
      { label: "CPC (Meta)", value: "R$ 0,78" },
      { label: "CPL", value: "R$ 14,20" },
      { label: "Leads qualificados", value: "29" },
      { label: "Consultas agendadas", value: "15 (52%)" },
      { label: "Propostas enviadas", value: "10" },
      { label: "Honorários contratados", value: "R$ 12–18 mil", tooltip: true }
    ],
    channel: "Meta (IG/FB)",
    investment: "R$ 420"
  },
  {
    area: "Empresarial",
    location: "Metrópole",
    duration: "60 dias",
    metrics: [
      { label: "Páginas pilar criadas", value: "4" },
      { label: "Leads (pesquisa local/GBP)", value: "+118%", trending: true },
      { label: "CPC (Google Pesquisa)", value: "R$ 3,10" },
      { label: "CPL", value: "R$ 42,50" },
      { label: "Leads qualificados", value: "26" },
      { label: "Consultas agendadas", value: "12 (46%)" },
      { label: "Propostas enviadas", value: "9" },
      { label: "Honorários contratados", value: "R$ 35–55 mil", tooltip: true }
    ],
    channel: "Google Pesquisa + GBP",
    investment: "R$ 1.105"
  }
];

export const CaseStudies = ({ onOpenModal }: CaseStudiesProps) => {
  return (
    <section id="casos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Resultados em até <span className="text-primary">60 dias</span> — métricas de marketing, sem promessas
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Abaixo estão exemplos reais (nomes suprimidos). Mostramos tráfego, leads, agendamentos e propostas. 
            Receita de honorários é auto-declarada pelo escritório e pode variar por nicho e região.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {cases.map((caseStudy, idx) => (
            <div 
              key={idx}
              className={`bg-card border rounded-2xl p-8 transition-all duration-300 group hover:shadow-card ${
                idx === 1 ? 'border-primary' : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Header */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border/50">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {caseStudy.area}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{caseStudy.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 mb-6">
                {caseStudy.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="text-xs text-muted-foreground flex-1">
                      {metric.label}
                      {metric.tooltip && (
                        <span className="ml-1 text-primary cursor-help" title="Valor informado pelo cliente">
                          ⓘ
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-bold text-primary flex items-center gap-1 whitespace-nowrap">
                      {metric.value}
                      {metric.trending && <TrendingUp className="w-3 h-3" />}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-border/50 space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span>Canal principal:</span>
                  <span className="font-semibold text-foreground">{caseStudy.channel}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Invest. mídia:</span>
                  <span className="font-semibold text-foreground">{caseStudy.investment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Note */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-card/50 border border-border/50 rounded-xl">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Dados de marketing e atendimento, sem referência a êxito processual. Comunicação informativa, 
            alinhada ao Provimento 205/2021 da OAB. Resultados variam conforme nicho, região, investimento e atendimento.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={onOpenModal} 
            size="lg" 
            data-cta="casos"
          >
            Ver se serve para meu caso
          </Button>
        </div>
      </div>
    </section>
  );
};
