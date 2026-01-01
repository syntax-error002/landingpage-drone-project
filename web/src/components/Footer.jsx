
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-drone-black border-t border-drone-slate/30 py-8 text-center text-sm text-gray-500">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    &copy; {new Date().getFullYear()} Drone Vision Systems. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-drone-cyan transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-drone-cyan transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
