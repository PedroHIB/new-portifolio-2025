import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import pigmentoImg from "@/assets/projects/pigmento.jpg";
import flaviosImg from "@/assets/projects/flavios.jpg";
import cybelarImg from "@/assets/projects/cybelar.jpg";
import eletricaImg from "@/assets/projects/eletrica.jpg";
import martinezImg from "@/assets/projects/martinez.jpg";
import banghoImg from "@/assets/projects/bangho.jpg";
import cartersImg from "@/assets/projects/carters.jpg";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      name: "Perfumerías Pigmento",
      description: t.pigmento,
      category: "E-commerce",
      image: pigmentoImg,
      href: "https://www.perfumeriaspigmento.com.ar/",
    },
    {
      name: "Flavios",
      description: t.flavios,
      category: "E-commerce",
      image: flaviosImg,
      href: "https://www.flavios.com.br/",
    },
    {
      name: "Cybelar",
      description: t.cybelar,
      category: "E-commerce",
      image: cybelarImg,
      href: "https://www.cybelar.com.br/",
    },
    {
      name: "Eletrica Bahiana",
      description: t.eletrica,
      category: "B2B",
      image: eletricaImg,
      href: "https://www.eletricabahiana.com.br/",
    },
    {
      name: "Café Martinez",
      description: t.martinez,
      category: "Food & Beverage",
      image: martinezImg,
      href: "https://www.cafemartinez.com/",
    },
    {
      name: "Banghó",
      description: t.bangho,
      category: "Technology",
      image: banghoImg,
      href: "https://www.bangho.com.ar/",
    },
    {
      name: "Carter's",
      description: t.carters,
      category: "Kids Fashion",
      image: cartersImg,
      href: "https://www.carters.com/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projectsTitle}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.projectsDescription}
          </p>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 w-max">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border hover:border-primary overflow-hidden snap-center flex-shrink-0 w-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <a
                    href={project?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm"
                  >
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-xs font-medium text-primary">
                      {project.category}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border hover:border-primary overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <a
                  href={project?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm"
                >
                  <ExternalLink className="h-4 w-4 text-primary" />
                </a>
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-primary">
                    {project.category}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
