
import { motion } from 'framer-motion';
import { Eye, Monitor, Activity, Cpu, Disc, Wifi } from 'lucide-react';

const features = [
    {
        icon: <Eye className="w-8 h-8 text-drone-cyan" />,
        title: "Smart Object Detection",
        desc: "Uses advanced AI (YOLOv8) to spot people and objects with high accuracy."
    },
    {
        icon: <Monitor className="w-8 h-8 text-drone-green" />,
        title: "Live Data Overlay",
        desc: "See exactly what the drone sees with boxes drawn around detected objects in real-time."
    },
    {
        icon: <Activity className="w-8 h-8 text-drone-red" />,
        title: "Smooth Target Tracking",
        desc: "Keeps track of moving objects smoothly, even if they move fast or are partly hidden."
    },
    {
        icon: <Cpu className="w-8 h-8 text-purple-500" />,
        title: "Battery Efficient",
        desc: "Designed to run on the drone without draining the battery too quickly."
    },
    {
        icon: <Disc className="w-8 h-8 text-yellow-400" />,
        title: "Flexible Modes",
        desc: "Switch between detailed analysis or fast scanning depending on what you need."
    },
    {
        icon: <Wifi className="w-8 h-8 text-blue-500" />,
        title: "Instant Connection",
        desc: "Sends data back to you instantly so you know what's happening right now."
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
                            className="group relative h-full"
                        >
                            {/* Nakasi - Carved Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-drone-cyan/40 via-purple-500/20 to-amber-500/40 rounded-lg p-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ willChange: "opacity" }}>
                                <div className="absolute inset-0 bg-drone-black rounded-lg m-[1px]" />
                            </div>

                            <div className="relative h-full bg-drone-black/80 backdrop-blur-md p-8 rounded-lg overflow-hidden">
                                {/* Geometric Pattern Overlay */}
                                <div className="absolute inset-0 opacity-5 pointer-events-none">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="hex" x="0" y="0" width="20" height="34.6" patternUnits="userSpaceOnUse">
                                                <path d="M10 0L20 5V15L10 20L0 15V5L10 0Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-drone-cyan" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#hex)" />
                                    </svg>
                                </div>

                                {/* Nakasi Corner Accents */}
                                <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M0 0H20V20" stroke="#F59E0B" strokeWidth="2" />
                                        <rect x="14" y="4" width="2" height="2" fill="#F59E0B" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 p-2 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M0 0H20V20" stroke="#F59E0B" strokeWidth="2" />
                                        <rect x="14" y="4" width="2" height="2" fill="#F59E0B" />
                                    </svg>
                                </div>

                                <div className="mb-6 relative">
                                    {/* Icon Halo */}
                                    <div className="absolute -inset-4 bg-drone-cyan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative p-4 rounded-lg bg-gradient-to-br from-drone-slate/30 to-drone-black border border-drone-slate/50 w-fit group-hover:border-amber-400/50 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors tracking-wide">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors relative z-10">
                                    {feature.desc}
                                </p>
                            </div>
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
