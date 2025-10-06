import { Button } from "@/components/ui/button";
import landingPageMockup from "@/assets/landing-page-mockup.png";
import googleSearchMockup from "@/assets/google-search-phone.png";

interface ModulesProps {
  onOpenModal: () => void;
}

const modules = [
  {
    title: "Posicionamento que fala a língua do cliente",
    category: "Consultoria Estratégica",
    description: "Chega de juridiquês. Construímos mensagens que seu público entende: situações comuns, o que a lei prevê e como sua consulta ajuda. Definimos nicho, proposta de valor, objeções e roteiro de atendimento.",
    deliverables: [
      "Documento de posicionamento",
      "Calendário editorial (4 semanas)",
      "Guia de tom/voz com 3 exemplos de posts"
    ],
    sla: "Entrega até 3 dias úteis após briefing"
  },
  {
    title: "Página que transforma visita em agenda",
    category: "Landing Page + Copy",
    description: "LP leve e objetiva, mobile-first, com CTA \"Agendar Consulta\". Inclui FAQ educativo, seção \"Como Funciona a Consulta\" e campos simples.",
    deliverables: [
      "Seções: Hero, Serviços/Áreas, Como Funciona",
      "Sobre o Escritório (bio, OAB, região)",
      "FAQ + Contato com formulário otimizado"
    ],
    sla: "LCP < 2.5s; CLS < 0.1; Schema LegalService/FAQPage"
  },
  {
    title: "Tráfego de alta intenção, não curtidas",
    category: "Tráfego (Meta ou Google)",
    description: "Começamos por onde há busca ativa (Google Pesquisa) ou ampliamos alcance e remarketing (Meta). Tudo com negativos, extensões e geolocal.",
    deliverables: [
      "Google: grupos por [área + cidade/bairro]",
      "Meta: campanhas conversão + remarketing",
      "2–3 variações por grupo, análise semanal"
    ],
    sla: "Rotina: otimizações semanais de termos e orçamento"
  },
  {
    title: "Decisões guiadas por dados (simples de entender)",
    category: "Mensuração & Relatórios",
    description: "Implementamos GA4 e Tag Manager com eventos: formulário, cliques no WhatsApp e ligações. Relatórios quinzenais mostram origem dos leads e custo por consulta.",
    deliverables: [
      "Eventos: generate_lead, click_whatsapp, call_click",
      "UTMs padrão em todas campanhas",
      "Dashboard minimalista com KPIs claros"
    ],
    sla: "Relatórios quinzenais por e-mail"
  }
];

export const Modules = ({ onOpenModal }: ModulesProps) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Detalhamento dos <span className="text-primary">Módulos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda o que cada parte do pacote entrega e como funciona na prática.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="space-y-12 max-w-5xl mx-auto mb-12">
          {modules.map((module, idx) => (
            <div 
              key={idx}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div>
                  <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                    {module.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold text-foreground">
                    Entregáveis:
                  </div>
                  <ul className="space-y-2">
                    {module.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-muted-foreground border-l-2 border-primary pl-4">
                  <strong className="text-foreground">SLA:</strong> {module.sla}
                </div>
              </div>

              {/* Image placeholder */}
              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-card border border-border rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden">
                  {idx === 1 ? (
                    <img 
                      src={landingPageMockup} 
                      alt="Mockup de landing page em dispositivos" 
                      className="w-full h-full object-contain scale-150"
                    />
                  ) : idx === 2 ? (
                    <img 
                      src={googleSearchMockup} 
                      alt="Google Search - Advogado em SP" 
                      className="h-full w-auto object-contain scale-125"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/30 rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">
                        {module.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={onOpenModal} 
            size="lg" 
            data-cta="modulos"
          >
            Quero isso no meu escritório
          </Button>
        </div>
      </div>
    </section>
  );
};
