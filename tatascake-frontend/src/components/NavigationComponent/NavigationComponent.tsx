import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NavigationComponent = () => {
    const [activeSection, setActiveSection] = useState('about');
    
    const sections = [
        { id: 'about', label: 'Sobre', icon: '🏠' },
        { id: 'produtos', label: 'Produtos', icon: '🎂' },
        { id: 'contato', label: 'Contato', icon: '📞' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'produtos', 'contato'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav 
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-xl shadow-red-font/10 border border-white/60">
                <div className="flex flex-col gap-2">
                    {sections.map((section, index) => (
                        <motion.button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`relative p-3 rounded-full cursor-pointer transition-all duration-300 ${
                                activeSection === section.id
                                    ? 'bg-red-font text-white'
                                    : 'bg-white/50 text-red-font hover:bg-red-font/10'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                        >
                            <span className="text-lg">{section.icon}</span>
                            
                            {/* Tooltip */}
                            <motion.div
                                className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-red-font text-white px-3 py-1 rounded-lg text-sm font-body font-medium whitespace-nowrap opacity-0 pointer-events-none"
                                whileHover={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                            >
                                {section.label}
                                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-red-font border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                            </motion.div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default NavigationComponent;
