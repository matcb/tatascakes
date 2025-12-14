import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-softpink-bg mt-auto shadow-lg shadow-red-font/10 backdrop-blur-sm ">
      <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8">
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/tatascakes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-font hover:text-red-font/80 transition-colors group font-logo font-medium text-sm md:text-base lg:text-lg"
            aria-label="Visit our Instagram"
          >
            <Instagram size={20} className="group-hover:scale-110 transition-transform md:size-6" />
            <span>
                 <Link className="text-red-font hover:text-red-font/80 transition-colors group font-logo font-medium text-sm md:text-base lg:text-lg" to="https://www.instagram.com/_tatascake/" target="_blank" rel="noopener noreferrer">
                  @tatascakes
                  </Link>
              </span>
          </a>

          {/* Divider */}
          <div className="w-16 h-px bg-red-font/20 md:w-20" />

          {/* Copyright */}
          <p className="text-sm md:text-base lg:text-lg text-red-font/70 font-logo">
            © {currentYear} The Tata's Cakes. Todos os direitos reservados.
          </p>

          {/* Developed By */}
          <p className="text-xs md:text-sm lg:text-base text-red-font/60 font-logo italic">
            Developed by 
            <Link className="text-red-font/60 hover:text-red-font/80 transition-colors group font-logo font-medium text-sm md:text-base lg:text-lg" to="https://www.linkedin.com/in/matheus-barreto-75792b178/" target="_blank" rel="noopener noreferrer">
              Math  
            </Link>
              <span className="text-red-font/60"> and </span>
            <Link className="text-red-font/60 hover:text-red-font/80 transition-colors group font-logo font-medium text-sm md:text-base lg:text-lg" to="https://www.linkedin.com/in/gabriel-firmamento/" target="_blank" rel="noopener noreferrer">
              Gab
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

