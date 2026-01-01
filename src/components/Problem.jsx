
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Clock, EyeOff, BatteryWarning } from 'lucide-react';

const challenges = [
    {
        icon: <Clock className="text-drone-red" />,
        title: "Video Lag",
        desc: "Regular video feeds have delays (300-500ms), making it hard to react quickly."
    },
    {
        icon: <EyeOff className="text-drone-red" />,
        title: "Pilot Fatigue",
        desc: "Human accuracy drops by 40% after just 20 minutes of staring at a drone feed."
    },
    {
        icon: <BatteryWarning className="text-drone-red" />,
        title: "Draining Battery",
        desc: "Streaming live video uses a lot of power, reducing flight time by up to 30%."
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
                            Flying drones manually and watching raw video is tiring and inefficient. It's hard to spot everything, and easy to make mistakes.
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

                    {/* The Solution (Right) - Nakasi Gold Tablet */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative group"
                    >
                        {/* Gold Tablet Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-xl p-[2px] shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                            <div className="absolute inset-0 bg-drone-black rounded-[10px]" />
                        </div>

                        <div className="relative bg-drone-black/90 p-8 md:p-12 rounded-xl border border-amber-500/20">
                            {/* Ornamental Corners */}
                            <div className="absolute top-0 right-0 p-3 opacity-80">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M40 0V40H38V2H0V0H40Z" fill="#F59E0B" />
                                    <path d="M30 10V30H28V12H10V10H30Z" fill="#F59E0B" fillOpacity="0.5" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-3 rotate-180 opacity-80">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M40 0V40H38V2H0V0H40Z" fill="#F59E0B" />
                                    <path d="M30 10V30H28V12H10V10H30Z" fill="#F59E0B" fillOpacity="0.5" />
                                </svg>
                            </div>

                            <div className="mb-10 text-center md:text-left relative z-10">
                                <h3 className="text-sm font-mono text-amber-500 tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                                    <span className="w-8 h-px bg-amber-500/50"></span>
                                    THE FIX
                                    <span className="w-8 h-px bg-amber-500/50"></span>
                                </h3>
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    Smart On-Board <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">AI</span>
                                </h2>
                                {/* Decorative Underline */}
                                <div className="h-1 w-24 bg-gradient-to-r from-drone-cyan to-amber-500 rounded-full"></div>
                            </div>

                            <ul className="space-y-8 relative z-10">
                                {[
                                    { title: "Instant Processing", desc: "The drone processes data itself, so there's no delay in decision making." },
                                    { title: "Auto-Tracking", desc: "The AI never gets tired and keeps tracking targets perfectly." },
                                    { title: "Efficient Data Sending", desc: "Sends only important info (like coordinates), saving 99% of bandwidth." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-5 items-start group/item">
                                        <div className="mt-1 p-1 bg-amber-500/10 rounded-full border border-amber-500/30 group-hover/item:border-amber-400 group-hover/item:shadow-[0_0_10px_rgba(245,158,11,0.2)] transition-all">
                                            <CheckCircle2 className="text-amber-500 w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg group-hover/item:text-amber-300 transition-colors">{item.title}</h4>
                                            <p className="text-gray-400 font-light mt-1 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
