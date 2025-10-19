import {useState }from "react"
import {Link} from "react-router-dom"
import logo from "../../assets/logo_tatas_cake.png";
import {Menu, X} from "lucide-react"
import { Button } from "../ui/button";

const HeaderComponent = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
     const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="w-full bg-softpink-bg shadow-lg shadow-red-font/10 sticky top-0 z-50 backdrop-blur-sm pb-2">
            <div className="container mx-auto px-4 py-1 md:py-2 lg:py-2">
                <nav className=" hidden md:flex items-center justify-between">

                   {/*left links*/}
                    <div className="flex items-center gap-8 pl-25">
                        <Link className="text-red-font font-logo text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-sm md:text-base lg:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/contato">Contato</Link>
                        <Link className="text-red-font font-logo text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-sm md:text-base lg:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/sobre">Sobre</Link>
                    </div>

                    {/*center logo*/}
                        <Link to="/" className="flex items-center justify-center">
                            <img src={logo} alt="Logo" className="w-auto h-16 md:h-20 pl-22 lg:h-20 xl:h-18 2xl:h-18 max-w-lg" />
                        </Link>

                    {/*right links*/}
                    <div className="flex items-center gap-8 pr-25">
                        <Link className="text-red-font font-logo text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-sm md:text-base lg:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/formulario">Fazer Pedido</Link>
                        <Link className="text-red-font font-logo text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-sm md:text-base lg:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/produtos">Nossos Produtos</Link>
                    </div>
             </nav>
                {/*Mobile Navigation*/}
                <div className="md:hidden">
                    
                    <div className="flex items-center justify-between">
                         <Link to="/" className="flex items-center justify-center">
                            <img src={logo} alt="Logo" className="w-auto h-12 sm:h-14 md:h-16 max-w-64" />
                         </Link>
                        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={24}/>:<Menu size={24}/>}
                        </Button>

                    </div>

                    {/*Mobile Menu*/}
                    {isMenuOpen && (
                        <div className="mt-4 pb-4 space-y-4 border-t border-border pt-4">

                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-base sm:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/contato">Contato</Link>
                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-base sm:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/sobre">Sobre</Link>
                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-base sm:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/pedido">Fazer Pedido</Link>
                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-red-font/80 transition-all duration-300 font-medium text-base sm:text-lg border-b-2 border-transparent hover:border-red-font/60 px-2 py-1" to="/produto">Nossos Produtos</Link>
                        </div>

                    )}

            </div>
            </div>

        </header>
    )   
}

export default HeaderComponent