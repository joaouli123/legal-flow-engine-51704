import { Button } from "@/components/ui/button";
import { 
  ClipboardCheck, 
  Megaphone, 
  Globe, 
  FileText, 
  Cloud, 
  Globe2,
  BarChart3 
} from "lucide-react";

interface PackageChecklistProps {
  onOpenModal: () => void;
}

const features = [
  {
    icon: ClipboardCheck,
    title: "Consultoria estratégica (briefing + plano)",
    description: "Mapeamos nicho, mensagens, objeções e diferenciais. Entrega do Plano de 90 dias."
  },
  {
    icon: Megaphone,
    title: "Gestão de tráfego (Meta ou Google)",
    description: "Campanhas de intenção/local e remarketing; otimizações semanais."
  },
  {
    icon: Globe,
    title: "Landing Page profissional",
    description: "Design mobile-first, CTA \"Agendar Consulta\", FAQ e SEO on-page."
  },
  {
    icon: FileText,
    title: "Copy da página e dos anúncios",
    description: "Linguagem clara, informativa e revisada em compliance."
  },
  {
    icon: Cloud,
    title: "Hospedagem 1 ano (brinde)",
    description: "SSL, backups automáticos, CDN e monitoramento básico."
  },
  {
    icon: Globe2,
    title: "Domínio .br 1 ano (brinde)",
    description: "Registro e DNS configurados; e-mail profissional opcional."
  },
  {
    icon: BarChart3,
    title: "Mensuração e relatórios",
    description: "GA4 + Tag Manager; painel com UTMs e eventos (form/Whats/call)."
  }
];

export const PackageChecklist = ({ onOpenModal }: PackageChecklistProps) => {
  return (
    <section id="pacote" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O Pacote <span className="text-primary">Completo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um pacote único para tirar seu escritório da dependência exclusiva de indicação. 
            Do planejamento à mensuração, tudo pronto para converter visitas em consultas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={onOpenModal} 
            size="lg" 
            data-cta="mid"
          >
            Quero o pacote completo
          </Button>
        </div>
      </div>
    </section>
  );
};
