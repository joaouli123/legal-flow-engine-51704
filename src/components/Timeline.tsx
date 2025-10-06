import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Layout, 
  Settings, 
  Megaphone, 
  Ruler,
  Rocket 
} from "lucide-react";

interface TimelineProps {
  onOpenModal: () => void;
}

const phases = [
  {
    icon: Calendar,
    week: "Semanas 1–2",
    title: "Diagnóstico & Plano",
    description: "Reunião (15–30 min), definição de nicho/mensagens, calendário editorial; entrega do Plano de 30 dias."
  },
  {
    icon: Layout,
    week: "Semanas 3–4",
    title: "Páginas & Copy",
    description: "Design da LP, textos e FAQ. SEO on-page e revisão de compliance."
  },
  {
    icon: Settings,
    week: "Semanas 3–4",
    title: "Setup técnico",
    description: "Domínio, hospedagem, SSL, Google Business Profile, GTM/GA4 e eventos."
  },
  {
    icon: Megaphone,
    week: "Semana 4",
    title: "Campanhas no ar",
    description: "Primeiro canal (Meta ou Google) com segmentações de intenção/local."
  },
  {
    icon: Ruler,
    week: "Semanas 5–8",
    title: "Otimização & Conteúdo",
    description: "2 conteúdos/semana (artigos/vídeos curtos legendados), ajustes de termos e anúncios."
  },
  {
    icon: Rocket,
    week: "Semanas 9–12",
    title: "Escala & Parcerias",
    description: "Expandimos o que performa, avaliamos 2º canal e iniciamos parcerias B2B (contadores/síndicos/associações)."
  }
];

export const Timeline = ({ onOpenModal }: TimelineProps) => {
  return (
    <section id="metodo" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Seu plano em <span className="text-primary">30 dias</span>, sem mistério
          </h2>
          <p className="text-lg text-muted-foreground">
            Velocidade com controle: começamos enxuto, medimos e escalamos o que funciona.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-8">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isLast = idx === phases.length - 1;
              
              return (
                <div key={idx} className="relative flex gap-6">
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-primary/30" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {phase.week}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={onOpenModal} 
            size="lg" 
            data-cta="timeline"
          >
            Ver meu plano de 30 dias
          </Button>
        </div>
      </div>
    </section>
  );
};
