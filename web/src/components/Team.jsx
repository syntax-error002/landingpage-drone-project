
import { motion } from 'framer-motion';

import { User, Github, Linkedin, Mail } from 'lucide-react';

const team = [
    {
        name: "Shaswat Kureel",
        role: "Lead Researcher & Architect",
        desc: "Specialized in Edge AI optimization and autonomous systems.",
        img: "/shaswat.png"
    },
    {
        name: "Rishi Solanki",
        role: "Computer Vision Research",
        desc: "Focusing on real-time object detection pipelines and telemetry.",
        img: "/rishi.png"
    },
    {
        name: "Krish Patel",
        role: "Systems Integration",
        desc: "Expertise in hardware-software bridging and drone flight dynamics.",
        img: "/krish.jpeg"
    },
    {
        name: "Pragati Rana",
        role: "Research Contributor",
        desc: "Assistive research in dataset analysis and model validation.",
        img: "/pragati.jpeg"
    }
];

const Team = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-drone-black relative border-t border-drone-slate/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-drone-cyan/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-drone-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-light mb-4 tracking-tight"
                    >
                        RESEARCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-drone-cyan to-blue-500 font-bold">TEAM</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-0.5 w-24 bg-gradient-to-r from-transparent via-drone-cyan to-transparent mx-auto"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative bg-drone-slate/10 backdrop-blur-md border border-drone-slate/30 p-8 rounded-2xl w-full text-center transition-all duration-300 hover:border-drone-cyan/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]"
                        >
                            {/* Hover Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-drone-cyan transition-colors duration-300 rounded-tl-lg" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-drone-cyan transition-colors duration-300 rounded-tr-lg" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-drone-cyan transition-colors duration-300 rounded-bl-lg" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-drone-cyan transition-colors duration-300 rounded-br-lg" />

                            {/* Image Container with Rotating Ring */}
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-dashed border-drone-cyan/30"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 rounded-full border border-dotted border-drone-slate/50"
                                />

                                <div className="absolute inset-1 rounded-full overflow-hidden border border-drone-cyan/20 bg-drone-black z-10">
                                    {member.img ? (
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-drone-cyan transition-colors">
                                            <User size={40} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-drone-cyan transition-colors">{member.name}</h3>
                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">{member.role}</div>
                            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                {member.desc}
                            </p>

                            {/* Social Placeholders */}
                            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
                                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
                                <a href="#" className="text-gray-500 hover:text-drone-cyan transition-colors"><Mail size={18} /></a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
