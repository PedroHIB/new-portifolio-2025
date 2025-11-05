import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast({
        title: t.errorMessage,
        variant: "destructive",
      });
      return;
    }

    try {
      const baseUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:3001"
          : "/api";
      // : import.meta.env.VITE_API_URL;

      const response = await fetch(`${baseUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({ title: t.successMessage });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: data.message || "Erro ao enviar mensagem.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erro ao conectar:", error);
      toast({
        title: "Falha ao conectar ao servidor.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 dark-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.contactTitle}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-dark-section-foreground/80 mt-4">
            {t.contactDescription}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mb-12 animate-slide-up"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {t.name}
              </label>
              <Input
                id="name"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-card border-border"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t.email}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-card border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {t.message}
            </label>
            <Textarea
              id="message"
              placeholder={t.message}
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-card border-border"
            />
          </div>

          <Button type="submit" size="lg" className="w-full gap-2">
            <Send className="h-4 w-4" />
            {t.send}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
