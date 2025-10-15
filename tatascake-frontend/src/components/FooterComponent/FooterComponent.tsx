import { Instagram } from "lucide-react";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/tatascakes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors group"
            aria-label="Visit our Instagram"
          >
            <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">@tatascakes</span>
          </a>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} The Tata's Cakes. Todos os direitos reservados.
          </p>

          {/* Developed By */}
          <p className="text-xs text-muted-foreground italic">
            Developed by Math and Gab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

