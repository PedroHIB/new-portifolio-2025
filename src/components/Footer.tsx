import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const socials = [
    { icon: Github, href: "https://github.com/PedroHIB", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pedro-barros-0b3095107/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{t.footerRights}</p>

          <div className="flex gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
