import { motion } from 'framer-motion';

const ProdutosComponent = () => {
    const produtos = [
        {
            id: 1,
            nome: "Bolos Artesanais",
            descricao: "Bolos feitos com ingredientes selecionados e muito carinho",
            preco: "A partir de R$ 45,00",
            imagem: "🎂",
            categoria: "Bolos"
        },
        {
            id: 2,
            nome: "Brigadeiros Gourmet",
            descricao: "Brigadeiros com sabores únicos e textura perfeita",
            preco: "R$ 3,50 cada",
            imagem: "🍫",
            categoria: "Docinhos"
        },
        {
            id: 3,
            nome: "Cupcakes Decorados",
            descricao: "Cupcakes com decorações personalizadas e sabores especiais",
            preco: "R$ 8,00 cada",
            imagem: "🧁",
            categoria: "Cupcakes"
        },
        {
            id: 4,
            nome: "Doces de Festa",
            descricao: "Variedade de doces para suas celebrações especiais",
            preco: "A partir de R$ 25,00",
            imagem: "🍬",
            categoria: "Doces"
        },
        {
            id: 5,
            nome: "Tortas Especiais",
            descricao: "Tortas doces e salgadas para todos os gostos",
            preco: "A partir de R$ 35,00",
            imagem: "🥧",
            categoria: "Tortas"
        },
        {
            id: 6,
            nome: "Bolos Personalizados",
            descricao: "Bolos sob encomenda para suas ocasiões especiais",
            preco: "Sob consulta",
            imagem: "🎂✨",
            categoria: "Personalizados"
        }
    ];

    return (
        <motion.section 
            id="produtos"
            className="min-h-screen bg-gradient-to-br from-red-font/5 via-softpink-bg/40 to-white flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto w-full">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-font font-heading font-bold mb-6">
                        Nossos Produtos
                    </h1>
                    <p className="text-lg sm:text-xl text-red-font/80 font-subtitle max-w-3xl mx-auto leading-relaxed">
                        Cada doce é feito com ingredientes selecionados e muito amor, 
                        transformando momentos simples em celebrações especiais.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {produtos.map((produto, index) => (
                        <motion.div
                            key={produto.id}
                            className="bg-gradient-to-br from-white/95 via-softpink-bg/30 to-red-font/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-red-font/10 border border-white/60 hover:shadow-2xl hover:shadow-red-font/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="text-center">
                                <div className="text-6xl mb-4">{produto.imagem}</div>
                                <h3 className="text-xl font-heading font-semibold text-red-font mb-2">
                                    {produto.nome}
                                </h3>
                                <p className="text-gray-700 font-body leading-relaxed mb-4">
                                    {produto.descricao}
                                </p>
                                <div className="bg-red-font/10 rounded-lg p-3 mb-4">
                                    <span className="text-red-font font-subtitle font-semibold">
                                        {produto.preco}
                                    </span>
                                </div>
                                <button className="w-full bg-red-font text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-red-font/90 transition-colors duration-300">
                                    Fazer Pedido
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-white/90 to-softpink-bg/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-red-font/10 border border-white/60 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-red-font mb-4">
                            Quer algo personalizado?
                        </h2>
                        <p className="text-gray-700 font-body leading-relaxed mb-6">
                            Entre em contato conosco pelo WhatsApp e vamos criar algo especial para você!
                        </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-body font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto">
                            <span>📱</span>
                            Falar no WhatsApp
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProdutosComponent;
