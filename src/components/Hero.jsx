
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

            {/* Rotating Tech-Mandala Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                    className="w-[800px] h-[800px] border border-drone-slate/30 rounded-full flex items-center justify-center"
                >
                    <div className="w-[600px] h-[600px] border border-drone-slate/30 rotate-45" />
                    <div className="absolute w-[700px] h-[700px] border border-dashed border-drone-cyan/20 rounded-full" />
                </motion.div>
            </div>

            {/* Animated Scan Line */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 scan-line" />

            {/* Nakasi-Tech Filigree Corners */}
            <div className="absolute inset-4 sm:inset-10 pointer-events-none z-10 hidden sm:block">
                {/* Top Left */}
                <div className="absolute top-0 left-0">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 60V2H60" stroke="#00F3FF" strokeWidth="2" />
                        <path d="M10 20L20 10" stroke="#F59E0B" strokeWidth="2" />
                        <circle cx="5" cy="5" r="3" fill="#F59E0B" />
                    </svg>
                </div>
                {/* Top Right */}
                <div className="absolute top-0 right-0 rotate-90">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 60V2H60" stroke="#00F3FF" strokeWidth="2" />
                        <path d="M10 20L20 10" stroke="#F59E0B" strokeWidth="2" />
                        <circle cx="5" cy="5" r="3" fill="#F59E0B" />
                    </svg>
                </div>
                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0 -rotate-90">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 60V2H60" stroke="#00F3FF" strokeWidth="2" />
                        <path d="M10 20L20 10" stroke="#F59E0B" strokeWidth="2" />
                        <circle cx="5" cy="5" r="3" fill="#F59E0B" />
                    </svg>
                </div>
                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0 rotate-180">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 60V2H60" stroke="#00F3FF" strokeWidth="2" />
                        <path d="M10 20L20 10" stroke="#F59E0B" strokeWidth="2" />
                        <circle cx="5" cy="5" r="3" fill="#F59E0B" />
                    </svg>
                </div>
            </div>

            <motion.div style={{ opacity, y: y2 }} className="container mx-auto px-4 z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-drone-cyan/30 bg-gradient-to-r from-drone-black to-drone-cyan/10 text-amber-400 text-xs tracking-[0.2em] mb-8 backdrop-blur-md font-mono shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                    <span>ROYAL PROTOTYPE v2.4</span>
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 relative"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">SMART</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-drone-cyan via-white to-amber-400 font-light drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                        VISION
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    A fusion of high-performance engineering and elite intelligence.
                    <br className="hidden md:block" />
                    Integrating <span className="text-amber-400 font-medium">ROYAL AI</span> for precision target detection.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="relative group px-8 py-3 bg-white text-black font-medium text-sm w-full sm:w-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">VIEW DOCUMENTATION</span>
                    </button>


                    <Link to="/architecture" className="px-8 py-3 bg-transparent border border-drone-cyan/50 text-drone-cyan font-medium text-sm hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group">
                        <span className="group-hover:tracking-wider transition-all">HOW IT WORKS</span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Floating Info Stats - Nakasi Style */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ y: y1 }}
                className="absolute top-1/4 right-10 hidden lg:flex flex-col gap-6"
            >
                <div className="p-1 bg-gradient-to-br from-drone-cyan/50 to-amber-500/50 rounded-lg">
                    <div className="p-4 rounded bg-drone-black/90 backdrop-blur-sm w-48 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1 opacity-50"><Zap size={10} className="text-amber-400" /></div>
                        <div className="text-xs text-gray-400 mb-1 tracking-widest">FPS</div>
                        <div className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-drone-green to-emerald-300">60.0</div>
                    </div>
                </div>

                <div className="p-1 bg-gradient-to-br from-drone-cyan/50 to-amber-500/50 rounded-lg">
                    <div className="p-4 rounded bg-drone-black/90 backdrop-blur-sm w-48 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1 opacity-50"><Crosshair size={10} className="text-amber-400" /></div>
                        <div className="text-xs text-gray-400 mb-1 tracking-widest">LATENCY</div>
                        <div className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-drone-cyan to-blue-300">12ms</div>
                    </div>
                </div>

                <div className="p-1 bg-gradient-to-br from-drone-cyan/50 to-amber-500/50 rounded-lg">
                    <div className="p-4 rounded bg-drone-black/90 backdrop-blur-sm w-48 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1 opacity-50"><Target size={10} className="text-amber-400" /></div>
                        <div className="text-xs text-gray-400 mb-1 tracking-widest">ACCURACY</div>
                        <div className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-drone-red to-orange-400">99.8%</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
