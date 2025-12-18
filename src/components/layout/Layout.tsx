import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Expand } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const ResizeIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide after 10 seconds automatically
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    const handleResize = () => {
      // If user starts resizing, maybe hide it then too?
      // Or just let it serve its purpose.
      // Let's hide it if the window width changes significantly (user acted on it)
      setIsVisible(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="hidden md:flex fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg items-center space-x-3 max-w-xs cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          <div className="bg-white/20 p-2 rounded-full">
            <Expand size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Try resizing!</span>
            <span className="text-xs opacity-90">See the layout adapt to your screen.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <ResizeIndicator />
      <Footer />
    </div>
  );
};
