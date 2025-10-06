import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadModal = ({ open, onOpenChange }: LeadModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    consent: false
  });

  const [errors, setErrors] = useState({
    nome: "",
    telefone: "",
    consent: ""
  });

  const maskPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const validateForm = () => {
    const newErrors = {
      nome: "",
      telefone: "",
      consent: ""
    };

    if (formData.nome.trim().length < 3) {
      newErrors.nome = "Digite seu nome completo (mín. 3 caracteres).";
    }

    const phoneNumbers = formData.telefone.replace(/\D/g, "");
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      newErrors.telefone = "Digite um número válido com DDD.";
    }

    if (!formData.consent) {
      newErrors.consent = "Confirme o consentimento LGPD para continuar.";
    }

    setErrors(newErrors);
    return !newErrors.nome && !newErrors.telefone && !newErrors.consent;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Track event (GA4)
    if (typeof window !== "undefined" && (window as any).gtag) {
      const ddd = formData.telefone.replace(/\D/g, "").substring(0, 2);
      (window as any).gtag("event", "lead_intent_submit", {
        nome_masked: formData.nome.substring(0, 3) + "***",
        ddd: ddd
      });
    }

    // Get current UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();
    
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(param => {
      const value = urlParams.get(param);
      if (value) utmParams.append(param, value);
    });

    // Add form data
    utmParams.append("nome", formData.nome);
    utmParams.append("telefone", formData.telefone);

    // Redirect to thank you page
    const thankYouUrl = `/obrigado?${utmParams.toString()}`;
    window.location.href = thankYouUrl;

    toast.success("Tudo certo! Redirecionando...");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Quase lá! Precisamos de seus dados para avançar
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha para continuar para o WhatsApp/página de obrigado.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-foreground">
              Nome completo *
            </Label>
            <Input
              id="nome"
              placeholder="Ex.: Ana Costa"
              value={formData.nome}
              onChange={(e) => {
                setFormData({ ...formData, nome: e.target.value });
                setErrors({ ...errors, nome: "" });
              }}
              className={`bg-secondary border-border text-foreground ${errors.nome ? "border-destructive" : ""}`}
            />
            {errors.nome && (
              <p className="text-xs text-destructive">{errors.nome}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="space-y-2">
            <Label htmlFor="telefone" className="text-foreground">
              Telefone (WhatsApp) *
            </Label>
            <Input
              id="telefone"
              placeholder="(11) 91234-5678"
              value={formData.telefone}
              onChange={(e) => {
                const masked = maskPhone(e.target.value);
                setFormData({ ...formData, telefone: masked });
                setErrors({ ...errors, telefone: "" });
              }}
              className={`bg-secondary border-border text-foreground ${errors.telefone ? "border-destructive" : ""}`}
            />
            {errors.telefone && (
              <p className="text-xs text-destructive">{errors.telefone}</p>
            )}
          </div>

          {/* LGPD Consent */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => {
                  setFormData({ ...formData, consent: checked as boolean });
                  setErrors({ ...errors, consent: "" });
                }}
                className={errors.consent ? "border-destructive" : ""}
              />
              <Label 
                htmlFor="consent" 
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                Autorizo o contato para apresentar o pacote e propostas. *
              </Label>
            </div>
            {errors.consent && (
              <p className="text-xs text-destructive pl-8">{errors.consent}</p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full">
            Continuar
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Seus dados estão protegidos conforme LGPD
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
