import { Code2, Database, Palette, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const technologies = [
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "VTEX IO", icon: Zap },
    { name: "GraphQL", icon: Database },
    { name: "Sass", icon: Palette },
    { name: "TailwindCSS", icon: Palette },
    { name: "MobX", icon: Database },
    { name: "Deno", icon: Zap },
    { name: "Node.js", icon: Zap },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skillsTitle}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.skillsDescription}
          </p>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 w-max">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg snap-center flex-shrink-0 w-40 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold text-sm text-center">{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop/Tablet: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-semibold text-sm text-center">{tech.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
