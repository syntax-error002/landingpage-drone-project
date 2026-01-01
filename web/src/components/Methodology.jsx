
import { motion } from 'framer-motion';
import { Database, Cpu, Scan, Map } from 'lucide-react';

const steps = [
    {
        icon: <Scan className="w-6 h-6 text-drone-cyan" />,
        title: "Input Acquisition",
        desc: "High-resolution video feed capture via on-board drone camera (1080p/4K @ 60fps) with mechanical gimbal stabilization."
    },
    {
        icon: <Cpu className="w-6 h-6 text-drone-green" />,
        title: "Preprocessing & Inference",
        desc: "Adaptive histogram equalization followed by quantized YOLOv8l inference on the Edge AI accelerator."
    },
    {
        icon: <Map className="w-6 h-6 text-purple-500" />,
        title: "Spatial Localization",
        desc: "Mapping scale-invariant bounding boxes to geodetic coordinates using telemetry and altitude sensor fusion."
    },
    {
        icon: <Database className="w-6 h-6 text-yellow-400" />,
        title: "Data Serialization",
        desc: "JSON-based metadata packet transmission via low-latency HTTP/WebSocket bridge to the ground station."
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
                        A modular pipeline designed for autonomous aerial reconnaissance and real-time biological target analysis.
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
                                className="relative bg-drone-black border border-drone-slate p-6 rounded-sm hover:border-drone-cyan/50 transition-colors group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-drone-slate text-xs font-mono rounded-full border border-drone-black group-hover:bg-drone-cyan group-hover:text-black transition-colors">
                                    0{index + 1}
                                </div>

                                <div className="mb-4 bg-drone-slate/20 w-fit p-3 rounded-sm group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
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

export default Methodology;
