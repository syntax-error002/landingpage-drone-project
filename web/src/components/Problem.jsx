
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Clock, EyeOff, BatteryWarning } from 'lucide-react';

const challenges = [
    {
        icon: <Clock className="text-drone-red" />,
        title: "Operational Latency",
        desc: "Manual video feed transmission introduces critical delays (300-500ms) inhibiting real-time reaction."
    },
    {
        icon: <EyeOff className="text-drone-red" />,
        title: "Cognitive Fatigue",
        desc: "Human operator accuracy drops by 40% after just 20 minutes of continuous aerial surveillance."
    },
    {
        icon: <BatteryWarning className="text-drone-red" />,
        title: "Resource Inefficiency",
        desc: "Streaming high-bandwidth raw video drains battery life, reducing effective flight time by up to 30%."
    }
];

const Problem = () => {
    return (
        <section className="py-24 bg-drone-slate/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute left-0 top-0 w-64 h-64 bg-drone-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* The Challenge (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-drone-red/20 rounded-full">
                                <AlertTriangle className="text-drone-red w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight">THE <span className="text-drone-red font-medium">CHALLENGE</span></h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                            Conventional aerial reconnaissance relies heavily on manual teleoperation and raw data streaming. This approach is fraught with inefficiencies that compromise mission success and data integrity.
                        </p>

                        <div className="space-y-6">
                            {challenges.map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded bg-drone-black/40 border border-drone-red/20">
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* The Solution (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 bg-drone-black border border-drone-cyan/30 p-8 md:p-12 relative"
                    >
                        {/* Decorative Corners */}
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-drone-cyan"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-drone-cyan"></div>

                        <div className="mb-8">
                            <h3 className="text-sm font-mono text-drone-cyan tracking-widest uppercase mb-2">Proposed Solution</h3>
                            <h2 className="text-3xl font-bold text-white mb-2">Edge-Native <span className="text-drone-cyan">Intelligence</span></h2>
                            <div className="h-1 w-20 bg-drone-cyan"></div>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 className="text-drone-cyan w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">On-Board Inference</h4>
                                    <p className="text-gray-400 font-light mt-1">Processing data locally eliminates transmission latency, enabling sub-20ms decision loops.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 className="text-drone-cyan w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">Autonomous Tracking</h4>
                                    <p className="text-gray-400 font-light mt-1">Computer vision algorithms maintain target lock indefinitely without degradation or fatigue.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 className="text-drone-cyan w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">Metadata-Only Uplink</h4>
                                    <p className="text-gray-400 font-light mt-1">Transmitting only serialized JSON coordinates reduces bandwidth usage by 99%.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
