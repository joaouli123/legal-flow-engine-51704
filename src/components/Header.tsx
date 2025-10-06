import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Pacote", href: "pacote" },
    { label: "Método", href: "metodo" },
    { label: "Casos", href: "casos" },
    { label: "Planos", href: "planos" },
    { label: "FAQ", href: "faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto">
              <img 
                src="/src/assets/logo-vellum.png" 
                alt="Agência Vellum" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="hidden md:block">
              <span className="text-sm text-muted-foreground">Marketing Jurídico Estratégico</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={onOpenModal} size="default" data-cta="header">
              Agendar análise
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={onOpenModal} size="default" className="w-full mt-2" data-cta="header-mobile">
                Agendar análise
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
