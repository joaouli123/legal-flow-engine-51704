import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, FileText } from "lucide-react";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    const nomeParam = searchParams.get("nome") || "Cliente";
    const telefoneParam = searchParams.get("telefone") || "";
    
    setNome(nomeParam);
    setTelefone(telefoneParam);

    // Track page view
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "redirect_to_thankyou", {
        page_title: "Thank You Page"
      });
    }
  }, [searchParams]);

  const handleWhatsApp = () => {
    const phoneNumber = telefone.replace(/\D/g, "");
    const message = encodeURIComponent(
      `Olá! Vim através da landing page e gostaria de saber mais sobre o Pacote Completo de Marketing Jurídico.`
    );
    
    // Track WhatsApp click
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_whatsapp", {
        source: "thankyou_page"
      });
    }

    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Recebido, {nome.split(" ")[0]}!
            </h1>
            <p className="text-xl text-muted-foreground">
              Vamos continuar a conversa
            </p>
            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              Em instantes, abriremos o WhatsApp para alinharmos seu Plano de 90 Dias.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto px-12"
            >
              Abrir WhatsApp agora
            </Button>
            <p className="text-sm text-muted-foreground">
              Ou aguarde nosso contato em breve
            </p>
          </div>

          {/* Checklist */}
          <div className="pt-8 border-t border-border space-y-6">
            <h2 className="text-lg font-semibold text-foreground">
              Próximos passos:
            </h2>
            
            <div className="grid gap-4 text-left">
              <div className="flex items-start gap-4 bg-secondary/50 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">
                    Tempo médio de resposta
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Até 1 hora em horário comercial (seg-sex, 9h-18h)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-secondary/50 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">
                    Análise inicial
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Entenda se o pacote faz sentido para seu nicho e região
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-secondary/50 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">
                    Proposta personalizada
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Valores e cronograma adaptados ao seu escritório
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Note */}
          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
              Conteúdo informativo. Não constitui consultoria jurídica. 
              Conforme Provimento 205/2021 — sem promessas de êxito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
