import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-primary font-medium">{t.greeting}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Pedro HIB
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t.role}
            </p>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-lg">
            {t.heroTitle}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => scrollToSection('projects')}
            >
              {t.viewProjects}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-4 w-4" />
              {t.getInTouch}
            </Button>
          </div>
        </div>

        <div className="relative animate-slide-up hidden md:block">
          <div className="absolute inset-0 hero-gradient opacity-20 blur-3xl rounded-full" />
          <img 
            src={heroImage} 
            alt="Hero illustration" 
            className="relative rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
