import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ProgressComponent = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'produtos', 'contato'];
            let totalHeight = 0;
            let currentHeight = 0;

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    totalHeight += element.offsetHeight;
                    if (window.scrollY >= element.offsetTop - window.innerHeight / 2) {
                        currentHeight += element.offsetHeight;
                    }
                }
            });

            const progress = totalHeight > 0 ? (currentHeight / totalHeight) * 100 : 0;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div 
            className="fixed top-0 left-0 w-full h-1 bg-white/20 z-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-red-font to-softpink-bg origin-left"
                style={{ scaleX: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
            />
        </motion.div>
    );
};

export default ProgressComponent;
