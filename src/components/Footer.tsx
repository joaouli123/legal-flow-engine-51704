import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-auto">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Agência Vellum" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-foreground">Agência Vellum</div>
                <div className="text-sm text-muted-foreground">Marketing Jurídico Estratégico</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Somos especialistas em marketing jurídico estratégico. Operamos seu funil de ponta a ponta, 
              sempre dentro da ética e compliance.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-foreground">Links Importantes</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a href="#termos" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade (LGPD)
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Company Info */}
        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Agência Vellum LTDA</span>
            <span>CNPJ: 00.000.000/0000-00</span>
            <span>contato@agenciavellum.com.br</span>
          </div>
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-foreground">Nota de compliance:</strong>{" "}
            Conteúdo de caráter informativo. Não constitui consultoria jurídica. 
            Comunicação alinhada ao Provimento 205/2021 da OAB; não realizamos promessas de êxito.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Agência Vellum. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
