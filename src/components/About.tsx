import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = [
    t.aboutHighlight1,
    t.aboutHighlight2,
    t.aboutHighlight3,
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.aboutTitle}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8 animate-slide-up">
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
            {t.aboutText}
          </p>

          <div className="grid md:grid-cols-2 gap-4 pt-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
