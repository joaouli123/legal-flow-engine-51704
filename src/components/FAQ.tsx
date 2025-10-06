import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  onOpenModal: () => void;
}

const faqs = [
  {
    question: "Isso é permitido pela OAB?",
    answer: "Sim. Toda comunicação é informativa, sem mercantilização, sem promessa de êxito e sem captação indevida (Provimento 205/2021)."
  },
  {
    question: "Meta ou Google: por onde começar?",
    answer: "Se há busca ativa na sua área/região, começamos por Google Pesquisa; usamos Meta para alcance e remarketing."
  },
  {
    question: "Preciso aparecer em vídeos?",
    answer: "Ajuda, mas não é obrigatório. Podemos produzir alternativas com narração/legendas e artigos."
  },
  {
    question: "Quando a LP fica pronta?",
    answer: "Em geral, 2–4 dias após briefing e envio de materiais (copy e design)."
  },
  {
    question: "Vocês garantem clientes?",
    answer: "Não. Garantimos processo, execução e mensuração. Marketing não substitui avaliação jurídica nem garante êxito."
  }
];

export const FAQ = ({ onOpenModal }: FAQProps) => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o pacote, compliance e processo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all"
              >
                <AccordionTrigger 
                  className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5"
                  aria-expanded="false"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={onOpenModal} 
            size="lg" 
            data-cta="faq"
          >
            Agendar análise agora
          </Button>
        </div>
      </div>
    </section>
  );
};
