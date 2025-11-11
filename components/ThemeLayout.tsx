import React from 'react';
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
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-gray-900 border border-purple-500/50 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-gray-900">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6 text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
};

const CosmicBackground: React.FC = () => (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-0 right-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
    </div>
);

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children, activeModal, openModal, closeModal }) => {
    
    const getModalContent = (modal: ModalType) => {
        switch (modal) {
            case 'about':
                return { title: 'About Us', content: <p>This UTM Link Builder is a powerful, client-side tool designed to help digital marketers create trackable URLs for their campaigns with ease. Built with modern web technologies for a seamless experience. Powered by HSINI MOHAMED.</p> };
            case 'contact':
                return { title: 'Contact Information', content: <div><p>For inquiries, please reach out via:</p><ul className="list-disc list-inside mt-2"><li>Website: doodax.com</li><li>Email: hsini.web@gmail.com</li></ul></div> };
            case 'guide':
                return { title: 'How to Use This Tool', content: <div><p>1. Enter your base website URL.</p><p>2. Fill in the UTM source, medium, and campaign name.</p><p>3. Optionally add term and content for granular tracking.</p><p>4. Click 'Generate' and copy your new trackable link!</p></div> };
            case 'privacy':
                return { title: 'Privacy Policy', content: <p>This application is entirely client-side. No data you enter is ever sent to or stored on a server. Your privacy is 100% guaranteed.</p> };
            case 'terms':
                return { title: 'Terms of Service', content: <p>This tool is provided free of charge. Use it at your own risk. The creators are not responsible for any issues that arise from its use.</p> };
            case 'dmca':
                return { title: 'DMCA Policy', content: <p>All content is original. If you believe there is a copyright infringement, please contact us at hsini.web@gmail.com with the necessary details.</p> };
            default:
                return { title: '', content: null };
        }
    };

    const { title, content } = getModalContent(activeModal);
    
    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white flex flex-col">
            <CosmicBackground />
            
            <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-lg border-b border-gray-800/50">
                <nav className="container mx-auto flex items-center justify-between p-4">
                    <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        UTM Builder
                    </div>
                    <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
                        <button onClick={() => openModal('about')} className="text-gray-300 hover:text-pink-400 transition-colors">About</button>
                        <button onClick={() => openModal('contact')} className="text-gray-300 hover:text-pink-400 transition-colors">Contact</button>
                        <button onClick={() => openModal('guide')} className="text-gray-300 hover:text-pink-400 transition-colors">Guide</button>
                        <button onClick={() => openModal('privacy')} className="text-gray-300 hover:text-pink-400 transition-colors">Privacy</button>
                        <button onClick={() => openModal('terms')} className="text-gray-300 hover:text-pink-400 transition-colors">Terms</button>
                        <button onClick={() => openModal('dmca')} className="text-gray-300 hover:text-pink-400 transition-colors">DMCA</button>
                    </div>
                </nav>
            </header>

            <div className="relative z-10 flex-grow">
                {children}
            </div>

            <footer className="relative z-10 py-8 border-t border-gray-800/50 bg-black/30">
                <div className="container mx-auto text-center text-gray-400">
                    <p>Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>HSINI MOHAMED</a></p>
                    <div className="mt-2 text-sm space-x-4">
                        <span>doodax.com</span>
                        <span>&bull;</span>
                        <span>hsini.web@gmail.com</span>
                    </div>
                    <div className="mt-4 text-xs space-x-4">
                         <button onClick={() => openModal('privacy')} className="hover:text-white">Privacy Policy</button>
                         <span>&bull;</span>
                         <button onClick={() => openModal('terms')} className="hover:text-white">Terms of Service</button>
                         <span>&bull;</span>
                         <button onClick={() => openModal('dmca')} className="hover:text-white">DMCA</button>
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