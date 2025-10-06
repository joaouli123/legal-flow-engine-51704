import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PackageChecklist } from "@/components/PackageChecklist";
import { Timeline } from "@/components/Timeline";
import { Modules } from "@/components/Modules";
import { CaseStudies } from "@/components/CaseStudies";
import { FitSection } from "@/components/FitSection";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ConversionBlock } from "@/components/ConversionBlock";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Initialize GTM/GA4 tracking
    if (typeof window !== "undefined") {
      // Track page view
      if ((window as any).gtag) {
        (window as any).gtag("event", "page_view", {
          page_title: "Pacote Completo - Marketing Jurídico",
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    }

    // Add schema.org structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Agência Vellum - Marketing Jurídico Estratégico",
      "description": "Consultoria + Landing Page + Tráfego (Meta/Google) + Hospedagem e Domínio .br por 1 ano + Mensuração. Mais consultas qualificadas em até 90 dias.",
      "url": "https://agenciavellum.com.br",
      "telephone": "+55-11-00000-0000",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "areaServed": "BR",
      "serviceType": "Marketing Jurídico"
    });
    document.head.appendChild(script);

    // Add FAQ schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Isso é permitido pela OAB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Toda comunicação é informativa, sem mercantilização, sem promessa de êxito e sem captação indevida (Provimento 205/2021)."
          }
        },
        {
          "@type": "Question",
          "name": "Meta ou Google: por onde começar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se há busca ativa na sua área/região, começamos por Google Pesquisa; usamos Meta para alcance e remarketing."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês garantem clientes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Garantimos processo, execução e mensuração. Marketing não substitui avaliação jurídica nem garante êxito."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
    
    // Track modal open event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "open_lead_modal");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <PackageChecklist onOpenModal={handleOpenModal} />
        <Timeline onOpenModal={handleOpenModal} />
        <Modules onOpenModal={handleOpenModal} />
        <CaseStudies onOpenModal={handleOpenModal} />
        <FitSection onOpenModal={handleOpenModal} />
        <Pricing onOpenModal={handleOpenModal} />
        <FAQ onOpenModal={handleOpenModal} />
        <ConversionBlock onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      
      <LeadModal open={modalOpen} onOpenChange={setModalOpen} />
      <WhatsAppButton onClick={handleOpenModal} />
    </div>
  );
};

export default Index;
