import { motion } from 'framer-motion';

const ContactComponent = () => {
    return (
        <motion.section 
            id="contato"
            className="min-h-screen bg-gradient-to-br from-softpink-bg/60 via-red-font/10 to-white flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl mx-auto w-full">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-font font-heading font-bold mb-6">
                        Entre em Contato
                    </h1>
                    <p className="text-lg sm:text-xl text-red-font/80 font-subtitle max-w-3xl mx-auto leading-relaxed">
                        Estamos aqui para transformar seus momentos especiais em doces inesquecíveis. 
                        Vamos conversar sobre seu pedido!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* WhatsApp Card */}
                    <motion.div
                        className="bg-gradient-to-br from-green-50 to-green-100 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-green-500/10 border border-green-200/50"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        <div className="text-center">
                            <div className="text-6xl mb-4">📱</div>
                            <h3 className="text-2xl font-heading font-bold text-green-700 mb-4">
                                WhatsApp
                            </h3>
                            <p className="text-gray-700 font-body leading-relaxed mb-6">
                                Fale diretamente conosco pelo WhatsApp para fazer seu pedido ou tirar dúvidas!
                            </p>
                            <a 
                                href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido na Tatas Cakes 🎂"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-body font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
                            >
                                <span>💬</span>
                                Conversar no WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Instagram Card */}
                    <motion.div
                        className="bg-gradient-to-br from-pink-50 to-purple-100 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-pink-500/10 border border-pink-200/50"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        <div className="text-center">
                            <div className="text-6xl mb-4">📸</div>
                            <h3 className="text-2xl font-heading font-bold text-pink-700 mb-4">
                                Instagram
                            </h3>
                            <p className="text-gray-700 font-body leading-relaxed mb-6">
                                Siga-nos no Instagram para ver nossas criações e novidades!
                            </p>
                            <a 
                                href="https://instagram.com/tatascakes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-body font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                            >
                                <span>📷</span>
                                Seguir no Instagram
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Info Section */}
                <motion.div 
                    className="bg-gradient-to-br from-white/95 via-softpink-bg/40 to-red-font/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-red-font/10 border border-white/60"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Horários */}
                        <div>
                            <div className="text-4xl mb-3">🕒</div>
                            <h3 className="text-xl font-heading font-semibold text-red-font mb-2">
                                Horários
                            </h3>
                            <p className="text-gray-700 font-body">
                                Segunda a Sexta: 8h às 18h<br/>
                                Sábado: 8h às 16h<br/>
                                Domingo: Fechado
                            </p>
                        </div>

                        {/* Localização */}
                        <div>
                            <div className="text-4xl mb-3">📍</div>
                            <h3 className="text-xl font-heading font-semibold text-red-font mb-2">
                                Localização
                            </h3>
                            <p className="text-gray-700 font-body">
                                São Paulo, SP<br/>
                                Entrega em toda região<br/>
                                Consulte taxas
                            </p>
                        </div>

                        {/* Pedidos */}
                        <div>
                            <div className="text-4xl mb-3">🎂</div>
                            <h3 className="text-xl font-heading font-semibold text-red-font mb-2">
                                Pedidos
                            </h3>
                            <p className="text-gray-700 font-body">
                                Pedidos antecipados<br/>
                                Personalizados<br/>
                                Entrega em casa
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Final Message */}
                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-red-font/10 to-softpink-bg/30 backdrop-blur-sm rounded-2xl p-8 border border-red-font/20">
                        <h2 className="text-2xl sm:text-3xl font-accent text-red-font mb-4">
                            Estamos ansiosos para adoçar seu dia! 💕
                        </h2>
                        <p className="text-lg text-red-font/80 font-body leading-relaxed">
                            Cada doce é feito com carinho e dedicação. 
                            Entre em contato e vamos criar algo especial para você!
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactComponent;
