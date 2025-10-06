import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface FitSectionProps {
  onOpenModal: () => void;
}

export const FitSection = ({ onOpenModal }: FitSectionProps) => {
  const forWho = [
    "Focam em 1–2 áreas principais",
    "Aceitam publicar conteúdo informativo regularmente",
    "Respondem leads em minutos no horário comercial"
  ];

  const notForWho = [
    "Busca \"garantia de clientes\" ou \"promoção de honorários\"",
    "Quer campanhas agressivas fora das normas da OAB"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Para quem <span className="text-primary">é</span> / <span className="text-destructive">Não é</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* É para */}
            <div className="bg-card border border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  É para escritórios que:
                </h3>
              </div>
              <ul className="space-y-4">
                {forWho.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é para */}
            <div className="bg-card border border-destructive/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Não é para quem:
                </h3>
              </div>
              <ul className="space-y-4">
                {notForWho.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={onOpenModal} 
              size="lg" 
              data-cta="fit"
            >
              Tenho fit — quero começar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
