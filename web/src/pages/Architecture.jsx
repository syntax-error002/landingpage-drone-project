
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
                        SYSTEM <span className="text-drone-cyan">INTERNALS</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Technical deep-dive into the Neural Network architecture, Data Processing Pipeline, and Telemetry Fusion algorithms.
                    </p>
                </header>

                {/* Architecture Diagram Visualization */}
                <section className="mb-24 relative">
                    <div className="absolute inset-0 border border-drone-slate/30 rounded-lg bg-grid-pattern opacity-30 pointer-events-none"></div>
                    <div className="bg-drone-black/50 border border-drone-slate/50 rounded-lg p-10 md:p-16 relative overflow-hidden">

                        {/* Flowchart Layout */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">

                            {/* Node 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-center w-full"
                            >
                                <div className="w-20 h-20 mx-auto bg-drone-slate rounded-full flex items-center justify-center mb-4 border-2 border-drone-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                                    <Cpu className="text-white w-10 h-10" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Sensor Fusion</h3>
                                <p className="text-xs text-gray-400">4K Video Stream + IMU Data</p>
                            </motion.div>

                            {/* Connector */}
                            <div className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-drone-cyan to-drone-green animate-pulse"></div>

                            {/* Node 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center w-full"
                            >
                                <div className="w-20 h-20 mx-auto bg-drone-slate rounded-full flex items-center justify-center mb-4 border-2 border-drone-green shadow-[0_0_20px_rgba(10,255,0,0.3)]">
                                    <Layers className="text-white w-10 h-10" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Preprocessing</h3>
                                <p className="text-xs text-gray-400">CLAHE & Resizing (640px)</p>
                            </motion.div>

                            {/* Connector */}
                            <div className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-drone-green to-drone-red animate-pulse"></div>

                            {/* Node 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-center w-full"
                            >
                                <div className="w-20 h-20 mx-auto bg-drone-slate rounded-full flex items-center justify-center mb-4 border-2 border-drone-red shadow-[0_0_20px_rgba(255,0,60,0.3)]">
                                    <GitBranch className="text-white w-10 h-10" />
                                </div>
                                <h3 className="font-bold text-white mb-2">YOLOv8 Inference</h3>
                                <p className="text-xs text-gray-400">Object Detection & Classif.</p>
                            </motion.div>

                            {/* Connector */}
                            <div className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-drone-red to-purple-500 animate-pulse"></div>

                            {/* Node 4 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-center w-full"
                            >
                                <div className="w-20 h-20 mx-auto bg-drone-slate rounded-full flex items-center justify-center mb-4 border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                                    <Network className="text-white w-10 h-10" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Telemetry Uplink</h3>
                                <p className="text-xs text-gray-400">JSON Serialization via WebSocket</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                            <Zap className="text-drone-cyan" /> Model Specifications
                        </h2>
                        <div className="bg-drone-slate/10 border border-drone-slate/30 p-6 rounded-lg space-y-4">
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2">
                                <span className="text-gray-400">Architecture</span>
                                <span className="font-mono text-drone-green">YOLOv8 (Large)</span>
                            </div>
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2">
                                <span className="text-gray-400">Input Resolution</span>
                                <span className="font-mono text-drone-cyan">640x640 px</span>
                            </div>
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2">
                                <span className="text-gray-400">Quantization</span>
                                <span className="font-mono text-white">FP16 (Half Precision)</span>
                            </div>
                            <div className="flex justify-between border-b border-drone-slate/30 pb-2">
                                <span className="text-gray-400">Inference Time (Edge)</span>
                                <span className="font-mono text-drone-green">~15ms</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="text-gray-400">mAP @ 0.5</span>
                                <span className="font-mono text-drone-red">0.89</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                            <Database className="text-purple-500" /> Data Payload
                        </h2>
                        <div className="bg-drone-black border border-drone-slate/50 p-6 rounded-lg font-mono text-sm overflow-x-auto relative group">
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
                    </div>
                </div>

                <TechStack />
            </div>
            <Footer />
        </main>
    );
};

export default Architecture;
