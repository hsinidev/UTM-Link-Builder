import React, { useEffect, useState } from 'react';
import type { ModalType } from '../types';

interface ThemeLayoutProps {
  children: React.ReactNode;
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-in fade-in duration-200" onClick={onClose}>
            <div className="bg-gray-900 border border-purple-500/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col transform transition-all scale-100" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-5 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-1.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6 text-gray-300 overflow-y-auto custom-scrollbar leading-relaxed">
                    {children}
                </div>
                <div className="p-4 border-t border-gray-800 bg-gray-900/50 flex justify-end">
                     <button onClick={onClose} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">Close</button>
                </div>
            </div>
        </div>
    );
};

const CosmicBackground: React.FC = () => {
    // Generate static stars to avoid hydration mismatch
    const [stars, setStars] = useState<{top: string, left: string, size: string, duration: string, delay: string}[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: 50 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`,
            duration: `${Math.random() * 3 + 2}s`,
            delay: `${Math.random() * 5}s`
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#050505]">
            {/* Deep Space Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-40"></div>
            
            {/* Nebula Clouds */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-[nebula-flow_20s_infinite_alternate]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-[nebula-flow_25s_infinite_alternate-reverse]"></div>
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-pink-900/20 rounded-full blur-[100px] animate-[nebula-flow_15s_infinite_linear]"></div>

            {/* Stars */}
            <div className="star-field">
                {stars.map((star, i) => (
                    <div 
                        key={i} 
                        className="star absolute rounded-full bg-white shadow-[0_0_4px_white]"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            opacity: Math.random() * 0.7 + 0.3,
                            animation: `pulse ${star.duration} ease-in-out infinite ${star.delay}`
                        }}
                    />
                ))}
            </div>
            
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
        </div>
    );
};

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children, activeModal, openModal, closeModal }) => {
    
    const getModalContent = (modal: ModalType) => {
        switch (modal) {
            case 'about':
                return { 
                    title: 'About Doodax', 
                    content: (
                        <div className="space-y-4">
                            <p>Welcome to <strong>Doodax</strong>, a premier digital marketing utility designed for modern marketers.</p>
                            <p>Our UTM Link Builder is engineered to solve a common problem: the complexity and messiness of campaign tracking. We believe that robust analytics shouldn't come at the cost of usability or privacy.</p>
                            <p>This tool allows you to instantly generate clean, standardized URLs for Google Analytics, ensuring your data is accurate and actionable. Best of all, it operates 100% client-side, meaning your campaign data never leaves your browser.</p>
                            <p>Powered by the vision of HSINI MOHAMED, Doodax aims to simplify the technical aspects of digital marketing.</p>
                        </div>
                    ) 
                };
            case 'contact':
                return { 
                    title: 'Contact Us', 
                    content: (
                        <div className="space-y-4">
                            <p>We value your feedback and are here to assist with any inquiries regarding the Doodax UTM Link Builder.</p>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <h4 className="font-semibold text-white mb-2">Get in Touch</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="text-purple-400 mr-2">🌐</span>
                                        <span className="font-medium text-gray-200">Website:</span>
                                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400 hover:text-blue-300">doodax.com</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-purple-400 mr-2">📧</span>
                                        <span className="font-medium text-gray-200">Email:</span>
                                        <a href="mailto:hsini.web@gmail.com" className="ml-2 text-blue-400 hover:text-blue-300">hsini.web@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-sm text-gray-400">We aim to respond to all inquiries within 24-48 business hours.</p>
                        </div>
                    ) 
                };
            case 'guide':
                return { 
                    title: 'Quick Start Guide', 
                    content: (
                        <div className="space-y-4">
                            <p>Generating trackable links is simple with Doodax:</p>
                            <ol className="list-decimal list-inside space-y-3 ml-2">
                                <li><strong>Website URL:</strong> Enter the page you want to link to (e.g., your landing page).</li>
                                <li><strong>Campaign Source:</strong> Who is sending the traffic? (e.g., google, newsletter, facebook).</li>
                                <li><strong>Campaign Medium:</strong> What type of link is it? (e.g., cpc, email, banner).</li>
                                <li><strong>Campaign Name:</strong> A unique identifier for your promo (e.g., summer_sale).</li>
                                <li><strong>Generate:</strong> Click the button to create your URL.</li>
                                <li><strong>Copy & Use:</strong> Copy the link and paste it into your ad or post.</li>
                            </ol>
                            <p className="mt-4 text-sm bg-gray-800 p-3 rounded"><strong>Tip:</strong> Be consistent with your naming conventions (lowercase is recommended) to keep your analytics data clean.</p>
                        </div>
                    ) 
                };
            case 'privacy':
                return { 
                    title: 'Privacy Policy', 
                    content: (
                        <div className="space-y-4 text-sm">
                            <p><strong>Last Updated: May 2024</strong></p>
                            <p>At Doodax (doodax.com), we prioritize your privacy. This policy outlines how we handle your information.</p>
                            <h4 className="font-bold text-white mt-4">1. Data Collection</h4>
                            <p>This application functions entirely client-side. We do not collect, store, or transmit any of the data you enter into the UTM builder forms to our servers. All URL generation happens locally within your web browser.</p>
                            <h4 className="font-bold text-white mt-4">2. Cookies</h4>
                            <p>We do not use tracking cookies or persistent storage mechanisms to monitor your individual usage of this tool.</p>
                            <h4 className="font-bold text-white mt-4">3. External Links</h4>
                            <p>Our website may contain links to external sites (e.g., GitHub). We are not responsible for the privacy practices of these external sites.</p>
                            <h4 className="font-bold text-white mt-4">4. Contact</h4>
                            <p>If you have questions about this policy, please contact us at hsini.web@gmail.com.</p>
                        </div>
                    ) 
                };
            case 'terms':
                return { 
                    title: 'Terms of Service', 
                    content: (
                        <div className="space-y-4 text-sm">
                             <p><strong>Effective Date: May 2024</strong></p>
                             <p>By accessing Doodax.com, you agree to the following terms:</p>
                             <h4 className="font-bold text-white mt-4">1. Usage</h4>
                             <p>This tool is provided for personal and commercial use to generate marketing URLs. You may not use this tool for any illegal or malicious purposes, including generating spam or phishing links.</p>
                             <h4 className="font-bold text-white mt-4">2. Disclaimer of Warranties</h4>
                             <p>The service is provided "as is" without warranty of any kind. Doodax disclaims all warranties, express or implied. We do not guarantee that the tool will be error-free or uninterrupted.</p>
                             <h4 className="font-bold text-white mt-4">3. Limitation of Liability</h4>
                             <p>Doodax and its creators shall not be liable for any damages arising out of the use or inability to use this service, including but not limited to direct, indirect, or consequential damages.</p>
                        </div>
                    ) 
                };
            case 'dmca':
                return { 
                    title: 'DMCA Policy', 
                    content: (
                        <div className="space-y-4">
                            <p>Doodax respects the intellectual property rights of others. All content on this tool, including code, design, and text, is original or used with permission.</p>
                            <p>If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:</p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
                                <li>A description of the copyrighted work.</li>
                                <li>A description of where the material is located on the site.</li>
                                <li>Your contact information (address, telephone number, and email).</li>
                                <li>A statement by you that you have a good faith belief that the disputed use is not authorized.</li>
                            </ul>
                            <p className="mt-4"><strong>Contact Email:</strong> hsini.web@gmail.com</p>
                        </div>
                    ) 
                };
            default:
                return { title: '', content: null };
        }
    };

    const { title, content } = getModalContent(activeModal);
    
    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white flex flex-col font-sans">
            <CosmicBackground />
            
            <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg">
                <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">D</div>
                        <div className="text-2xl font-black tracking-tight text-white">
                            Doodax
                        </div>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <button onClick={() => openModal('guide')} className="text-gray-300 hover:text-white transition-colors relative group">
                            Guide
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                        </button>
                        <button onClick={() => openModal('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
                        <button onClick={() => openModal('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
                    </div>

                    {/* Mobile Menu Button - simplified for this implementation */}
                    <div className="md:hidden">
                        <button onClick={() => openModal('guide')} className="text-gray-300">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </nav>
            </header>

            <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
                {children}
            </div>

            <footer className="relative z-10 py-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-white text-lg mb-4">Doodax UTM Builder</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The professional's choice for clean, accurate, and secure marketing URL generation. Optimized for Google Analytics.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-bold text-white text-lg mb-4">Resources</h4>
                            <button onClick={() => openModal('guide')} className="text-gray-400 hover:text-purple-400 text-left transition-colors text-sm">How to Use</button>
                            <button onClick={() => openModal('about')} className="text-gray-400 hover:text-purple-400 text-left transition-colors text-sm">About Us</button>
                            <button onClick={() => openModal('contact')} className="text-gray-400 hover:text-purple-400 text-left transition-colors text-sm">Contact Support</button>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-bold text-white text-lg mb-4">Legal</h4>
                            <button onClick={() => openModal('privacy')} className="text-gray-400 hover:text-purple-400 text-left transition-colors text-sm">Privacy Policy</button>
                            <button onClick={() => openModal('terms')} className="text-gray-400 hover:text-purple-400 text-left transition-colors text-sm">Terms of Service</button>
                            <button onClick={() => openModal('dmca')} className="text-gray-400 hover:text-purple-400 text-left transition-colors text-sm">DMCA</button>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                             <span>Powered by</span>
                             <a 
                                href="https://github.com/hsinidev" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-bold text-[#FFD700] hover:text-yellow-300 transition-colors flex items-center gap-1"
                            >
                                HSINI MOHAMED
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                             </a>
                        </div>
                    </div>
                </div>
            </footer>
            
            <Modal isOpen={!!activeModal} onClose={closeModal} title={title}>
                {content}
            </Modal>
        </div>
    );
};

export default ThemeLayout;