
import { motion } from 'framer-motion';
import { Database, Cpu, Scan, Map } from 'lucide-react';

const steps = [
    {
        icon: <Scan className="w-6 h-6 text-drone-cyan" />,
        title: "Capturing Video",
        desc: "The drone's camera captures high-quality video (4K) while flying."
    },
    {
        icon: <Cpu className="w-6 h-6 text-amber-400" />,
        title: "AI Processing",
        desc: "The on-board computer improves the image and uses AI to find objects instantly."
    },
    {
        icon: <Map className="w-6 h-6 text-drone-cyan" />,
        title: "Location Mapping",
        desc: "Calculates the exact GPS location of every object found on the ground."
    },
    {
        icon: <Database className="w-6 h-6 text-amber-500" />,
        title: "Sending Results",
        desc: "Sends a small text file with the results to the ground station immediately."
    }
];

const Methodology = () => {
    return (
        <section className="py-24 bg-drone-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">System Architecture</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        A simple modular system designed for autonomous scouting and real-time analysis.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-drone-slate/50 -translate-y-1/2 hidden lg:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group p-6"
                            >
                                {/* Nakasi Border */}
                                <div className="absolute inset-0 bg-gradient-to-br from-drone-cyan/30 via-transparent to-amber-500/30 rounded-lg p-[1px]">
                                    <div className="absolute inset-0 bg-drone-black rounded-lg m-[1px]" />
                                </div>

                                {/* Step Number - Gold Hexagon */}
                                <div className="absolute -top-4 -right-2 w-10 h-10 flex items-center justify-center z-20">
                                    <div className="absolute inset-0 bg-drone-black border border-amber-500 clip-path-hexagon shadow-[0_0_10px_rgba(245,158,11,0.3)]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
                                    <span className="relative z-10 text-amber-400 font-mono font-bold">0{index + 1}</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-4 bg-drone-slate/10 w-fit p-3 rounded-lg border border-drone-slate/30 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{step.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 bg-drone-cyan rotate-45"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
