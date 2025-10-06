import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  onClick: () => void;
}

export const WhatsAppButton = ({ onClick }: WhatsAppButtonProps) => {
  return (
    <button
      onClick={onClick}
      data-cta="whatsapp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-button hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 bg-card border border-border px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Falar no WhatsApp
      </span>
    </button>
  );
};
