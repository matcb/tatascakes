import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

export  const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderComponent/>
            <main className="flex-1 flex items-center justify-center py-8 md:py-12 lg:py-16">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-logo text-red-font mb-4">
                        Bem-vindos ao The Tata's Cakes
                    </h1>
                    <p className="text-base md:text-lg text-red-font/70 font-logo">
                        Doces feitos com amor e carinho para momentos especiais
                    </p>
                </div>
            </main>
            <FooterComponent/>
        </div>
    )
}