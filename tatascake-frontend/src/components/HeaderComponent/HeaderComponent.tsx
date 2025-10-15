import {useState }from "react"
import {Link} from "react-router-dom"
import logo from "../../assets/logo_tatas_cake.png";
import {Menu, X} from "lucide-react"
import { Button } from "../ui/button";

const HeaderComponent = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
     const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="w-full bg-softpink-bg shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <nav className=" hidden md:flex items-center justify-between">

                   {/*left links*/}
                    <div className="flex items-center gap-8">
                        <Link className="text-red-font font-logo text-foreground hover:text-primary transition-colors font-medium" to="/contato">Contato</Link>
                        <Link className="text-red-font font-logo text-foreground hover:text-primary transition-colors font-medium" to="/sobre">Sobre</Link>
                    </div>

                    {/*center logo*/}
                        <Link to="/" className="flex flex-col items-center">
                            <img src={logo} alt="Logo" className="w-75 h-75 " />
                        </Link>

                    {/*right links*/}
                    <div className="flex items-center gap-8">
                        <Link className="text-red-font font-logo text-foreground hover:text-primary transition-colors font-medium" to="">Fazer Pedido</Link>
                        <Link className="text-red-font font-logo text-foreground hover:text-primary transition-colors font-medium" to="/produtos">Nossos Produtos</Link>
                    </div>
             </nav>
                {/*Mobile Navigation*/}
                <div className="md:hidden">
                    
                    <div className="flex items-center justify-between">
                         <Link to="/" className="flex flex-col items-start">
                            <img src="{logo}" alt="Logo" className="w-75 h-75 " />
                         </Link>
                        <Button className=" font-red-font text-primary" variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={24}/>:<Menu size={24}/>}
                        </Button>

                    </div>

                    {/*Mobile Menu*/}
                    {isMenuOpen && (
                        <div className="mt-4 pb-4 space-y-4 border-t border-border pt-4">

                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-primary transition-colors font-medium" to="/contato">Contato</Link>
                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-primary transition-colors font-medium" to="/sobre">Sobre</Link>
                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-primary transition-colors font-medium" to="/pedido">Fazer Pedido</Link>
                                <Link onClick={toggleMenu} className="text-red-font font-logo block text-foreground hover:text-primary transition-colors font-medium" to="/produto">Nossos Produtos</Link>
                        </div>

                    )}

            </div>
            </div>

        </header>
    )   
}

export default HeaderComponent