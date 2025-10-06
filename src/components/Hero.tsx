import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero = ({ onOpenModal }: HeroProps) => {
  const scrollToMethod = () => {
    const element = document.getElementById("metodo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Mais consultas qualificadas em até{" "}
                <span className="text-primary">90 dias</span>. Ponto.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Montamos e operamos seu funil ético: consultoria, landing page, anúncios (Meta/Google), 
                hospedagem, domínio .br e mensuração. Você foca em atender; nós fazemos a máquina rodar.
              </p>
            </div>

            {/* Quick bullets */}
            <div className="space-y-3">
              {[
                "Estratégia e execução semanal",
                "LP profissional focada em agendar consulta",
                "Relatórios quinzenais com origem dos leads"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onOpenModal} 
                size="lg" 
                data-cta="hero"
                className="w-full sm:w-auto"
              >
                Agendar análise agora
              </Button>
              <Button 
                onClick={scrollToMethod} 
                variant="outline" 
                size="lg"
                data-cta="hero-secondary"
                className="w-full sm:w-auto"
              >
                Ver como funciona
              </Button>
            </div>

            {/* Legal compliance notice */}
            <p className="text-xs text-muted-foreground pt-4 border-t border-border/50">
              Conforme Provimento 205/2021 — publicidade informativa, sem promessas de êxito.
            </p>
          </div>

          {/* Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/50">
              <img 
                src={heroImage} 
                alt="Profissional jurídico em ambiente corporativo premium com dashboard de métricas"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
