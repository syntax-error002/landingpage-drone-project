
import { motion } from 'framer-motion';

const techs = [
    { name: "React Native", role: "Mobile Frontend" },
    { name: "Python 3.10", role: "AI Backend" },
    { name: "YOLOv8", role: "Object Detection" },
    { name: "Flask", role: "API Server" },
    { name: "OpenCV", role: "Vision Processing" },
    { name: "Expo", role: "Simulaton" }
];

const TechStack = () => {
    return (
        <section className="py-20 bg-drone-slate/10 border-t border-drone-slate/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-gray-500 tracking-widest uppercase">Powered By</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
                    {techs.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-2xl font-black text-white mb-1 hover:text-drone-green cursor-default transition-colors">{tech.name}</div>
                            <div className="text-xs text-drone-cyan font-mono">{tech.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
