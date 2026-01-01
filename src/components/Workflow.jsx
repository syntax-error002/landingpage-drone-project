
import { motion } from 'framer-motion';
import { Upload, Plane, Crosshair, FileText } from 'lucide-react';

const steps = [
    {
        icon: <Upload />,
        title: "Deployment & Link",
        desc: "Connect the Android Vision Module via ADB Reverse Tethering. Initate the Flask server and confirm handshake."
    },
    {
        icon: <Plane />,
        title: "Autonomous Sortie",
        desc: "Drone executes pre-planned flight path. On-board mobile device captures 4K video stream at 60fps."
    },
    {
        icon: <Crosshair />,
        title: "Target Acquisition",
        desc: "YOLOv8 framework identifies biological signatures in real-time (#ms latency). Bounding boxes are rendered on the HUD."
    },
    {
        icon: <FileText />,
        title: "Data Synthesis",
        desc: "Mission logs, detected coordinates, and species confidence metrics are serialized and exported for analysis."
    }
];

const Workflow = () => {
    return (
        <section className="py-24 bg-drone-black border-t border-drone-slate/30 relative">
            {/* decorative background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-drone-green/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">OPERATIONAL <span className="text-drone-green font-medium">WORKFLOW</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Standard Operating Procedure (SOP) for field deployment and data extraction.
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
                                className="relative pl-20 md:pl-0 md:pt-16"
                            >
                                {/* Dot on the line */}
                                <div className="absolute left-6 md:left-1/2 md:-ml-3 top-8 md:top-6 w-5 h-5 rounded-full bg-drone-black border-2 border-drone-green z-20 md:-mt-2.5"></div>

                                {/* Icon Bubble */}
                                <div className="absolute left-0 top-0 md:left-1/2 md:-ml-8 md:-top-8 w-16 h-16 flex items-center justify-center rounded-full bg-drone-slate/50 border border-drone-green/30 text-drone-green backdrop-blur-sm z-10 shadow-[0_0_15px_rgba(10,255,0,0.1)]">
                                    {step.icon}
                                </div>

                                <h3 className="text-lg font-medium text-white mb-2 md:text-center mt-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light md:text-center">
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
