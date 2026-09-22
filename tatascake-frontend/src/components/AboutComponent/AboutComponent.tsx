
export default function AboutComponent () {
    return (
        <main id="sobre" className="min-h-screen bg-gradient-to-br from-softpink-bg/60 via-softpink-bg/30 to-red-font/10 scroll-mt-16">
            <div className="relative">
                <div className="pt-15">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-2xl text-red-font font-heading font-bold text-center mb-4 px-4 leading-tight">
                        Quem Somos?
                    </h1>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-red-font font-subtitle font-semibold    text-center mb-4 px-4 leading-relaxed">
                        Uma Pitada de Açúcar e Muito Amor!
                    </div>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl text-red-font font-subtitle font-semibold text-center -mb-2 px-2 leading-relaxed">
                        Receitas artesanais que nasceram do coração da Renata — a nossa Tata
                    </h2>
                </div>
                <section className="px-4 mt-10 mb-10">
                    <div className="bg-gradient-to-br from-white/95 via-softpink-bg/40 to-red-font/5 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl shadow-red-font/10 max-w-4xl mx-auto border border-white/60">
                        <p className="text-base sm:text-lg md:text-xl text-red-font/70 font-subtitle leading-relaxed text-center">
                            Tudo começou com uma mãe, uma cozinha e uma vontade irresistível de transformar 
                            dias difíceis em momentos doces. No meio da pandemia, Renata — ou <span className="text-red-font font-medium">Tata</span>, como todo mundo chama — decidiu que era hora de colocar a mão na massa. Literalmente.
                        </p>
                        
                        <p className="text-base sm:text-lg md:text-xl text-red-font/70  font-subtitle leading-relaxed text-center mt-6">
                            Assim nasceu a <span className="font-heading text-red-font font-bold text-lg">Tatas Cakes</span>: uma confeitaria caseira onde cada bolo tem personalidade, cada brigadeiro tem atitude, e cada fornada vem com uma dose extra de carinho. Aqui não tem misturinha pronta nem pressa — só ingredientes de verdade, receitas artesanais e aquele toque especial que só a Tata sabe dar.
                        </p>
                        
                        <p className="text-base sm:text-lg md:text-xl text-red-font/70 font-accent leading-relaxed text-center mt-6 font-medium">
                            Se você está procurando um doce que abrace, que faça sorrir ou que te leve direto pra infância… pode entrar, a cozinha é nossa! 💕
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}