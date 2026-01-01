
import { motion } from 'framer-motion';
import { Upload, Plane, Crosshair, FileText } from 'lucide-react';

const steps = [
    {
        icon: <Upload />,
        title: "Connect & Start",
        desc: "Connect your device to the drone via USB and start the app."
    },
    {
        icon: <Plane />,
        title: "Fly & Scan",
        desc: "The drone flies automatically and captures clear video."
    },
    {
        icon: <Crosshair />,
        title: "Detect Objects",
        desc: "The AI instantly spots people and objects. You see them highlighted on your screen."
    },
    {
        icon: <FileText />,
        title: "Save & Report",
        desc: "All findings and locations are saved and ready to be viewed."
    }
];

const Workflow = () => {
    return (
        <section className="py-24 bg-drone-black border-t border-drone-slate/30 relative">
            {/* decorative background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-drone-green/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">OPERATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-drone-green to-amber-400 font-medium">WORKFLOW</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Simple steps to deploy the drone and get results.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Mobile */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-drone-slate/50 md:hidden"></div>
                    {/* Horizontal Line for Desktop */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-drone-slate/50 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-20 md:pl-0 md:pt-16 group"
                            >
                                {/* Dot on the line - Techno-Gem */}
                                <div className="absolute left-6 md:left-1/2 md:-ml-3 top-8 md:top-6 w-6 h-6 z-20 md:-mt-3 flex items-center justify-center">
                                    <div className="w-full h-full bg-drone-black border-2 border-amber-500 rotate-45 shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:bg-amber-500 transition-colors duration-300"></div>
                                </div>

                                {/* Icon Bubble - Ornate */}
                                <div className="absolute left-0 top-0 md:left-1/2 md:-ml-8 md:-top-8 w-16 h-16 flex items-center justify-center rounded-lg bg-drone-black border border-drone-cyan/30 text-drone-cyan backdrop-blur-md z-10 shadow-[0_0_15px_rgba(0,243,255,0.1)] group-hover:border-amber-400 group-hover:text-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 rotate-3 group-hover:rotate-0">
                                    {step.icon}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 md:text-center mt-2 group-hover:text-amber-400 transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light md:text-center group-hover:text-gray-400">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
