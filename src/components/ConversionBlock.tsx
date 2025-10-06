import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ConversionBlockProps {
  onOpenModal: () => void;
}

export const ConversionBlock = ({ onOpenModal }: ConversionBlockProps) => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Pronto para colocar seu escritório na frente —{" "}
              <span className="text-primary">do jeito certo</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deixe seus dados e avançaremos para o WhatsApp.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onOpenModal} 
              size="lg"
              data-cta="conversion-primary"
            >
              Agendar análise agora
            </Button>
            <Button 
              onClick={onOpenModal} 
              variant="outline" 
              size="lg"
              data-cta="conversion-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
