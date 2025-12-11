import React, { useState } from 'react';
import ThemeLayout from './components/ThemeLayout';
import UTMLinkBuilderTool from './components/UTMLinkBuilderTool';
import SeoArticle from './components/SeoArticle';
import type { ModalType } from './types';

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <ThemeLayout activeModal={activeModal} openModal={openModal} closeModal={closeModal}>
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-4xl">
            <UTMLinkBuilderTool />
        </div>
        <div id="article" className="mt-16 md:mt-24 w-full max-w-4xl">
           <SeoArticle />
        </div>
      </main>
    </ThemeLayout>
  );
}

export default App;