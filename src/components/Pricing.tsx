import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface PricingProps {
  onOpenModal: () => void;
}

export const Pricing = ({ onOpenModal }: PricingProps) => {
  return (
    <section id="planos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Plano Único — a estratégia <span className="text-primary">completa</span>, sem fricção
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo que seu escritório precisa para gerar consultas qualificadas em até 30 dias: consultoria, landing page, anúncios (Meta/Google), copy, hospedagem, domínio .br e mensuração — operamos o funil por você.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative bg-card border border-primary shadow-card rounded-2xl p-8 md:p-10">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-sm font-semibold">
                Plano Completo
              </div>
            </div>

            <div className="space-y-8">
              {/* Header with Price */}
              <div className="text-center pb-6 border-b border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Pacote Completo
                </h3>
                <div className="mb-4">
                  <p className="text-5xl font-bold text-primary mb-2">
                    R$ 800<span className="text-2xl text-muted-foreground">/mês</span>
                  </p>
                </div>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <p>✓ Sem fidelidade. Cancele quando quiser.</p>
                  <p>✓ Verba de mídia não inclusa (definida conforme objetivo e região).</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Consultoria estratégica (briefing + plano de 30 dias)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Gestão de tráfego (Meta ou Google; otimizações semanais)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Landing Page profissional (mobile-first, conversão para Whats/agenda)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Copy da página e dos anúncios (revisado em compliance)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Hospedagem 1 ano (brinde) + SSL e backups
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Domínio .br 1 ano (brinde) e DNS configurado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Mensuração (GTM/GA4) + relatórios quinzenais com origem dos leads
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    (Opcional no onboarding) 2 conteúdos/semana por 4 semanas para aquecer canais
                  </span>
                </li>
              </ul>

              {/* Trust Line */}
              <div className="pt-6 border-t border-border/50 space-y-2">
                <p className="text-xs text-center text-muted-foreground">
                  Tempo de setup típico: 5–10 dias após briefing e envio de materiais.
                </p>
                <p className="text-xs text-center text-muted-foreground">
                  Comunicação informativa, sem promessa de êxito (Provimento 205/2021 da OAB).
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  onClick={onOpenModal}
                  size="lg"
                  className="flex-1"
                  data-cta="planos-primary"
                >
                  Receber proposta hoje
                </Button>
                <Button 
                  onClick={onOpenModal}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  data-cta="planos-secondary"
                >
                  Agendar análise agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
