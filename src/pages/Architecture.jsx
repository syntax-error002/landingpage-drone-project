
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Network, Layers, GitBranch, Zap } from 'lucide-react';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const Architecture = () => {
    return (
        <main className="min-h-screen bg-drone-black text-white selection:bg-drone-cyan selection:text-drone-black font-sans">
            <nav className="p-6 border-b border-drone-slate/30 bg-drone-black/80 backdrop-blur fixed top-0 w-full z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-drone-cyan transition-colors">
                        <ArrowLeft size={20} /> <span className="font-mono text-sm">BACK TO MISSION CONTROL</span>
                    </Link>
                    <div className="text-drone-cyan font-mono text-xs border border-drone-cyan/30 px-2 py-1 rounded bg-drone-cyan/10">
                        CLASSIFIED: LEVEL 4
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-20 container mx-auto px-4">
                <header className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        HOW <span className="text-drone-cyan">IT WORKS</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        A look under the hood at how the drone sees, thinks, and communicates.
                    </p>
                </header>

                {/* Architecture Diagram Visualization */}
                <section className="mb-24 relative">
                    <div className="absolute inset-0 border border-drone-slate/30 rounded-lg bg-grid-pattern opacity-30 pointer-events-none"></div>
                    <div className="bg-drone-black/50 border border-drone-slate/50 rounded-lg p-10 md:p-16 relative overflow-hidden">

                        {/* Flowchart Layout */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
                            {[
                                { icon: <Cpu className="text-white w-8 h-8" />, title: "Combining Inputs", desc: "Video + Drone Movement Data", color: "drone-cyan" },
                                { icon: <Layers className="text-white w-8 h-8" />, title: "Preparing Images", desc: "Enhancing & Resizing Images", color: "drone-green" },
                                { icon: <GitBranch className="text-white w-8 h-8" />, title: "AI Detection", desc: "Finding Objects & People", color: "amber-500" },
                                { icon: <Network className="text-white w-8 h-8" />, title: "Sending Data", desc: "Sending Results to Ground", color: "purple-500" }
                            ].map((node, i) => (
                                <div key={i} className="contents">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="text-center w-full relative group"
                                    >
                                        <div className="w-24 h-24 mx-auto mb-4 relative flex items-center justify-center">
                                            {/* Hexagon Shape */}
                                            <div className={`absolute inset-0 bg-drone-black border-2 border-${node.color} opacity-80 group-hover:opacity-100 transition-opacity clip-path-hexagon shadow-[0_0_15px_rgba(245,158,11,0.2)]`} style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", willChange: "opacity" }}></div>
                                            <div className="relative z-10 p-4 rounded-full bg-drone-slate/20">
                                                {node.icon}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-white mb-1">{node.title}</h3>
                                        <p className="text-xs text-gray-400">{node.desc}</p>
                                    </motion.div>

                                    {/* Connector Line (except last) */}
                                    {i < 3 && (
                                        <div className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-drone-slate via-amber-500 to-drone-slate animate-pulse opacity-50"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Walkthrough */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <div className="bg-drone-slate/20 p-6 rounded border border-drone-slate/40">
                        <div className="font-bold text-drone-cyan mb-2">1. Combining Inputs</div>
                        <p className="text-sm text-gray-300">The drone doesn't just look; it feels where it is. We combine video with flight data so we know exactly where every object is on the map.</p>
                    </div>
                    <div className="bg-drone-slate/20 p-6 rounded border border-drone-slate/40">
                        <div className="font-bold text-drone-green mb-2">2. Preparing Images</div>
                        <p className="text-sm text-gray-300">Before analyzing, we clean up the video. We adjust the lighting and resize the images so the AI can read them faster.</p>
                    </div>
                    <div className="bg-drone-slate/20 p-6 rounded border border-drone-slate/40">
                        <div className="font-bold text-drone-red mb-2">3. AI Detection</div>
                        <p className="text-sm text-gray-300">This is the brain. The drone uses a smart program trained to recognize people and objects, just like a human would.</p>
                    </div>
                    <div className="bg-drone-slate/20 p-6 rounded border border-drone-slate/40">
                        <div className="font-bold text-purple-500 mb-2">4. Sending Data</div>
                        <p className="text-sm text-gray-300">The drone doesn't send heavy video. It sends a lightweight text message with the results, so you get the info instantly.</p>
                    </div>
                </div>

                {/* Additional Visual Logic Flows */}
                <section className="mb-24 space-y-24">
                    {/* 1. AI Decision Logic */}
                    <div className="bg-drone-slate/5 border border-drone-slate/20 rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <GitBranch size={100} className="text-drone-cyan" />
                        </div>

                        <div className="text-center mb-12 relative z-10">
                            <h3 className="text-2xl font-bold mb-2">AI Decision Process</h3>
                            <p className="text-gray-400 font-light">How the drone separates signal from noise.</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-drone-black border border-drone-slate flex items-center justify-center mb-3">
                                    <Cpu className="text-white" />
                                </div>
                                <span className="text-xs font-mono text-gray-400">INPUT FRAME</span>
                            </div>

                            <div className="h-8 w-0.5 md:w-16 md:h-0.5 bg-drone-slate"></div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-drone-cyan/10 border border-drone-cyan flex items-center justify-center mb-3">
                                    <Layers className="text-drone-cyan" />
                                </div>
                                <span className="text-xs font-mono text-drone-cyan">YOLO SCAN</span>
                            </div>

                            <div className="h-8 w-0.5 md:w-16 md:h-0.5 bg-drone-slate"></div>

                            {/* Step 3 (Decision) */}
                            <div className="relative">
                                <div className="w-24 h-24 rotate-45 border-2 border-drone-green flex items-center justify-center bg-drone-black/50 z-10 relative">
                                    <div className="-rotate-45 text-center">
                                        <div className="text-[10px] text-gray-400">CONFIDENCE</div>
                                        <div className="font-bold text-drone-green">&gt; 70%?</div>
                                    </div>
                                </div>
                            </div>

                            {/* Branching Paths */}
                            {/* Branching Paths Container */}
                            <div className="flex flex-row items-center">
                                {/* Desktop Connector & Fork */}
                                <div className="hidden md:flex items-center">
                                    <div className="w-8 h-0.5 bg-drone-slate"></div>
                                    <div className="w-0.5 h-20 bg-drone-slate relative">
                                        <div className="absolute top-0 left-0 w-4 h-0.5 bg-drone-red/50"></div>
                                        <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-drone-green"></div>
                                    </div>
                                </div>

                                {/* Mobile Connector */}
                                <div className="h-8 w-0.5 bg-drone-slate md:hidden"></div>

                                {/* Branching Options */}
                                <div className="flex md:flex-col justify-between h-auto md:h-20 gap-4 md:gap-0">
                                    {/* No Path (Top) */}
                                    <div className="flex flex-col md:flex-row items-center gap-2">
                                        <div className="md:w-2"></div> {/* Spacer for fork */}
                                        <div className="px-3 py-1 rounded bg-drone-red/10 border border-drone-red/30 text-xs text-drone-red">DISCARD</div>
                                    </div>

                                    {/* Yes Path (Bottom) */}
                                    <div className="flex flex-col md:flex-row items-center gap-2">
                                        <div className="md:w-2"></div> {/* Spacer for fork */}
                                        <div className="px-3 py-1 rounded bg-drone-green/10 border border-drone-green/30 text-xs text-drone-green font-bold shadow-[0_0_15px_rgba(0,255,0,0.2)]">SEND ALERT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Mission Control Loop */}
                    <div className="bg-drone-slate/5 border border-drone-slate/20 rounded-xl p-8 relative overflow-hidden">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold mb-2">The Feedback Loop</h3>
                            <p className="text-gray-400 font-light">Continuous communication between sky and ground.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            <div className="text-center relative">
                                <div className="w-20 h-20 rounded-full bg-drone-black border-2 border-drone-cyan flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                                    <Database className="text-drone-cyan w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-white">DRONE</h4>
                                <p className="text-xs text-gray-500 mt-1">Sends Data</p>
                            </div>

                            <div className="hidden md:flex items-center text-drone-slate/50">
                                <span className="text-4xl">→</span>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-drone-black border-2 border-purple-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                    <Network className="text-purple-500 w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-white">SERVER</h4>
                                <p className="text-xs text-gray-500 mt-1">Processes</p>
                            </div>

                            <div className="hidden md:flex items-center text-drone-slate/50">
                                <span className="text-4xl">→</span>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-drone-black border-2 border-drone-green flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(50,255,50,0.2)]">
                                    <Zap className="text-drone-green w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-white">PILOT</h4>
                                <p className="text-xs text-gray-500 mt-1">Reacts</p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <div className="inline-block px-4 py-2 rounded-full bg-drone-slate/20 border border-drone-slate text-xs text-gray-400">
                                Round Trip Time: <span className="text-white font-mono">150ms</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                            <Zap className="text-drone-cyan" /> Model Specifications
                        </h2>
                        <div className="bg-gradient-to-br from-drone-slate/10 via-drone-black to-drone-slate/10 border border-amber-500/30 p-6 rounded-lg space-y-4 mb-4 relative overflow-hidden">
                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 p-2"><div className="w-2 h-2 bg-amber-500 rounded-full"></div></div>
                            <div className="absolute bottom-0 left-0 p-2"><div className="w-2 h-2 bg-amber-500 rounded-full"></div></div>

                            <div className="flex justify-between border-b border-drone-slate/30 pb-2 group hover:bg-white/5 transition-colors p-2 rounded">
                                <span className="text-gray-400">Architecture</span>
                                <span className="font-mono text-drone-green">YOLOv8 (Large)</span>
                            </div>
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2 group hover:bg-white/5 transition-colors p-2 rounded">
                                <span className="text-gray-400">Input Resolution</span>
                                <span className="font-mono text-drone-cyan">640x640 px</span>
                            </div>
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2 group hover:bg-white/5 transition-colors p-2 rounded">
                                <span className="text-gray-400">Quantization</span>
                                <span className="font-mono text-white">FP16 (Half Precision)</span>
                            </div>
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2 group hover:bg-white/5 transition-colors p-2 rounded">
                                <span className="text-gray-400">Inference Time (Edge)</span>
                                <span className="font-mono text-amber-500 font-bold">~15ms</span>
                            </div>
                            <div className="flex justify-between pb-2 group hover:bg-white/5 transition-colors p-2 rounded">
                                <span className="text-gray-400">mAP @ 0.5</span>
                                <span className="font-mono text-drone-red">0.89</span>
                            </div>
                        </div>

                        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded relative">
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-amber-500 rounded-r"></div>
                            <h4 className="text-amber-500 font-bold text-sm mb-1 pl-2">What does this mean?</h4>
                            <p className="text-gray-400 text-sm pl-2">
                                In simple terms: The drone's brain is fast, sharp, and accurate. It processes images in the blink of an eye (15 milliseconds)!
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                            <Database className="text-purple-500" /> Data Payload
                        </h2>
                        <div className="bg-drone-black border border-drone-slate/50 p-6 rounded-lg font-mono text-sm overflow-x-auto relative group mb-4">
                            <div className="absolute top-2 right-4 text-xs text-gray-500">JSON-OUT</div>
                            <pre className="text-gray-400">
                                {`{
  "timestamp": 1678901234,
  "telemetry": {
    "alt": 45.2,
    "lat": 34.0522,
    "lon": -118.2437
  },
  "objects": [
    {
      "id": "trk_01",
      "class": "person",
      "conf": 0.94,
      "bbox": [120, 405, 60, 180]
    }
  ]
}`}
                            </pre>
                            <div className="absolute inset-0 bg-drone-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>

                        <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded">
                            <h4 className="text-purple-400 font-bold text-sm mb-1">Translation</h4>
                            <p className="text-gray-400 text-sm">
                                This is the digital message sent to you. It reads: "At this time, at this location, I see a person with 94% certainty."
                            </p>
                        </div>
                    </div>
                </div>

                <TechStack />
            </div>
            <Footer />
        </main>
    );
};

export default Architecture;
