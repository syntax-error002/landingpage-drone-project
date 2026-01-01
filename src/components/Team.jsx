
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
                            className="group relative"
                        >
                            {/* Gold/Cyan Gradient Border Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-drone-cyan via-purple-500 to-amber-500 rounded-2xl p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"></div>

                            <div className="relative h-full bg-drone-black/90 backdrop-blur-xl border border-drone-slate/30 p-8 rounded-2xl w-full text-center overflow-hidden">

                                {/* Royal Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-drone-cyan/30 group-hover:border-amber-400 transition-colors duration-500 rounded-tl-xl" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-drone-cyan/30 group-hover:border-amber-400 transition-colors duration-500 rounded-tr-xl" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-drone-cyan/30 group-hover:border-amber-400 transition-colors duration-500 rounded-bl-xl" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-drone-cyan/30 group-hover:border-amber-400 transition-colors duration-500 rounded-br-xl" />

                                {/* Image Container with Gold/Cyan Ring */}
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-2 border-dashed border-drone-cyan/30 group-hover:border-amber-400/50 transition-colors duration-500"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute -inset-2 rounded-full border border-dotted border-drone-slate/50 group-hover:border-amber-200/30 transition-colors duration-500"
                                    />

                                    <div className="absolute inset-1.5 rounded-full overflow-hidden border-2 border-drone-slate bg-drone-black z-10 group-hover:border-amber-400 transition-colors duration-500">
                                        {member.img ? (
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-amber-400 transition-colors">
                                                <User size={40} />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors tracking-wide">{member.name}</h3>
                                <div className="text-transparent bg-clip-text bg-gradient-to-r from-drone-cyan to-blue-400 group-hover:from-amber-200 group-hover:to-yellow-500 text-xs font-mono uppercase tracking-widest mb-4 font-bold transition-all duration-500">{member.role}</div>
                                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {member.desc}
                                </p>

                                {/* Social Placeholders */}
                                <div className="flex justify-center gap-4 opacity-50 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <a href="#" className="p-2 rounded-full bg-drone-slate/10 hover:bg-white hover:text-black transition-all"><Github size={16} /></a>
                                    <a href="#" className="p-2 rounded-full bg-drone-slate/10 hover:bg-[#0077b5] hover:text-white transition-all"><Linkedin size={16} /></a>
                                    <a href="#" className="p-2 rounded-full bg-drone-slate/10 hover:bg-amber-500 hover:text-black transition-all"><Mail size={16} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
