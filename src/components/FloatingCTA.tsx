import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit, hide if near bottom to not overlap footer
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      if (scrollY > 300 && scrollY < docHeight - winHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-40 md:hidden p-2 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-none"
        >
          <div className="flex gap-3 pointer-events-auto">
            <a 
              href="tel:+12533466105"
              className="flex-1 bg-white text-dark py-3.5 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
            >
              <Phone size={18} />
              Call
            </a>
            <a 
              href="sms:+12533466105"
              className="flex-1 bg-primary text-white py-3.5 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg box-glow"
            >
              <MessageSquare size={18} />
              Text
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
