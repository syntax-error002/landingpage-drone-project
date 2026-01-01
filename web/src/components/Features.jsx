
import { motion } from 'framer-motion';
import { Eye, Monitor, Activity, Cpu, Disc, Wifi } from 'lucide-react';

const features = [
    {
        icon: <Eye className="w-8 h-8 text-drone-cyan" />,
        title: "Computer Vision Pipeline",
        desc: "Utilizing YOLOv8 (Large) architecture for high-fidelity inference with a mean Average Precision (mAP) of 0.89."
    },
    {
        icon: <Monitor className="w-8 h-8 text-drone-green" />,
        title: "Telemetry Visualization",
        desc: "Real-time overlay of serialized data streams, visualizing bounding boxes and confidence intervals on the edge."
    },
    {
        icon: <Activity className="w-8 h-8 text-drone-red" />,
        title: "Predictive Tracking",
        desc: "Kalman filter-based state estimation for smoothing bounding box trajectories and reducing jitter."
    },
    {
        icon: <Cpu className="w-8 h-8 text-purple-500" />,
        title: "Edge Optimization",
        desc: "Mobile-grade quantization ensuring steady inference rates on restrained thermal envelopes."
    },
    {
        icon: <Disc className="w-8 h-8 text-yellow-400" />,
        title: "Operational Modes",
        desc: "Discrete control states allowing for single-shot high-resolution analysis or continuous survey throughput."
    },
    {
        icon: <Wifi className="w-8 h-8 text-blue-500" />,
        title: "Low-Latency Transport",
        desc: "Optimized WebSocket protocol adhering to strict millisecond-level round-trip time (RTT) constraints."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-drone-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight">TECHNICAL <span className="text-drone-cyan font-medium">SPECIFICATIONS</span></h2>
                    <div className="h-0.5 w-24 bg-drone-slate mx-auto" />
                </div>

                {/* Desktop/Tablet Grid View */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-lg bg-drone-slate/20 border border-drone-slate/50 hover:border-drone-cyan/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] h-full"
                        >
                            <div className="mb-6 p-4 rounded-full bg-drone-black/50 w-fit border border-drone-slate group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-drone-cyan transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Marquee View */}
                <div className="md:hidden flex flex-col gap-6 relative w-full -mx-4 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-drone-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-drone-black to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Right to Left */}
                    <motion.div
                        className="flex gap-4 px-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {[...features.slice(0, 3), ...features.slice(0, 3)].map((feature, index) => (
                            <div
                                key={`row1-${index}`}
                                className="w-[70vw] sm:w-80 p-6 rounded-lg bg-drone-slate/20 border border-drone-slate/50"
                            >
                                <div className="mb-4 p-3 rounded-full bg-drone-black/50 w-fit border border-drone-slate">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-xs">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2: Right to Left */}
                    <motion.div
                        className="flex gap-4 px-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25,
                        }}
                    >
                        {[...features.slice(3, 6), ...features.slice(3, 6)].map((feature, index) => (
                            <div
                                key={`row2-${index}`}
                                className="w-[70vw] sm:w-80 p-6 rounded-lg bg-drone-slate/20 border border-drone-slate/50"
                            >
                                <div className="mb-4 p-3 rounded-full bg-drone-black/50 w-fit border border-drone-slate">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-xs">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
