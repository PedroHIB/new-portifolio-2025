import vtexImg from "@/assets/agencies/vtex-partner.jpg";
import corebizImg from "@/assets/agencies/corebiz.jpg";
import accentureImg from "@/assets/agencies/accenture.jpg";
import tivitImg from "@/assets/agencies/tivit.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Agencies = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const agencies = [
    {
      name: "VTEX Partner",
      image: vtexImg
    },
    {
      name: "Corebiz",
      image: corebizImg
    },
    {
      name: "Accenture",
      image: accentureImg
    },
    {
      name: "Tivit",
      image: tivitImg
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.agenciesTitle}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.agenciesDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {agencies.map((agency, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={agency.image} 
                alt={agency.name}
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agencies;
