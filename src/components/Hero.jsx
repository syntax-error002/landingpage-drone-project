
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Crosshair, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background3D from './Background3D';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-drone-black bg-grid-pattern bg-[size:40px_40px]">
            <Background3D />
            {/* Radial Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-drone-black via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-drone-black/80 pointer-events-none" />

            {/* Animated Scan Line */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 scan-line" />

            {/* HUD Corners */}
            <div className="absolute inset-4 sm:inset-10 border border-drone-dim pointer-events-none z-10 hidden sm:block">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-drone-cyan"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-drone-cyan"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-drone-cyan"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-drone-cyan"></div>
            </div>

            <motion.div style={{ opacity, y: y2 }} className="container mx-auto px-4 z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-drone-cyan/30 bg-drone-cyan/10 text-drone-cyan text-xs tracking-wider mb-6 backdrop-blur-md font-mono"
                >
                    <span>RESEARCH PROTOTYPE v2.4</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter mb-6 relative"
                >
                    AERIAL <span className="text-drone-cyan font-light">PERCEPTION</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                >
                    A high-performance computer vision framework for autonomous UAVs.
                    Integrating <span className="text-gray-200 font-medium">YOLOv8 ARCHITECTURE</span> for real-time biological target acquisition and telemetry.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="px-8 py-3 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto rounded-sm">
                        VIEW DOCUMENTATION
                    </button>


                    <Link to="/architecture" className="px-8 py-3 bg-transparent border border-gray-700 text-gray-300 font-medium text-sm hover:border-drone-cyan hover:text-drone-cyan transition-all duration-300 w-full sm:w-auto rounded-sm flex items-center justify-center gap-2">
                        SYSTEM ARCHITECTURE
                    </Link>
                </motion.div>
            </motion.div>

            {/* Floating Info Stats */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ y: y1 }}
                className="absolute top-1/4 right-10 hidden lg:flex flex-col gap-4"
            >
                <div className="p-4 rounded border border-drone-dim bg-drone-slate/30 backdrop-blur-sm w-48">
                    <div className="text-xs text-gray-400 mb-1">FPS</div>
                    <div className="text-2xl font-mono text-drone-green">60.0</div>
                </div>
                <div className="p-4 rounded border border-drone-dim bg-drone-slate/30 backdrop-blur-sm w-48">
                    <div className="text-xs text-gray-400 mb-1">LATENCY</div>
                    <div className="text-2xl font-mono text-drone-cyan">12ms</div>
                </div>
                <div className="p-4 rounded border border-drone-dim bg-drone-slate/30 backdrop-blur-sm w-48">
                    <div className="text-xs text-gray-400 mb-1">ACCURACY</div>
                    <div className="text-2xl font-mono text-drone-red">99.8%</div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
