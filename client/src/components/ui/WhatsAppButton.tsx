import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "918344490964"; // Placeholder
  const message = encodeURIComponent("Hi, I came from your website and want to know more about Jamakkalams.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in duration-300"
    >
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white border-none p-0"
      >
        <MessageCircle className="h-8 w-8" fill="white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </a>
  );
}
