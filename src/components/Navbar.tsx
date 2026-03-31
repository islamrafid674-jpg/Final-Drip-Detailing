import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/518954033_122109649490934814_632185139296127088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=r54KGOSAd14Q7kNvwG3HBeC&_nc_oc=AdoIZND1N27XuXoYgHtg4Hzl4BePtcI_2bOpSPpmGJgaGLb5xbdUe2iGXfJfQrcgqRc&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=byhjulX_FDi3wOzSZv6bkQ&_nc_ss=7a389&oh=00_AfzFhTbrIBd6qTkMAqy7nzgn2RXyhN35dS2Yl-DGC6so7A&oe=69D20084" 
              alt="Final Drip Detailing" 
              className="h-12 md:h-20 w-auto rounded-sm"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
              <a href="https://www.instagram.com/finaldrip_detail/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://web.facebook.com/people/Final-Drip-Detailing/61578044445711/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a 
                href="tel:+12533466105"
                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-none text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center">
                <img 
                  src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/518954033_122109649490934814_632185139296127088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=r54KGOSAd14Q7kNvwG3HBeC&_nc_oc=AdoIZND1N27XuXoYgHtg4Hzl4BePtcI_2bOpSPpmGJgaGLb5xbdUe2iGXfJfQrcgqRc&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=byhjulX_FDi3wOzSZv6bkQ&_nc_ss=7a389&oh=00_AfzFhTbrIBd6qTkMAqy7nzgn2RXyhN35dS2Yl-DGC6so7A&oe=69D20084" 
                  alt="Final Drip Detailing" 
                  className="h-12 w-auto rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button 
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold uppercase tracking-wider text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <div className="p-8 border-t border-white/10 flex flex-col gap-4">
              <a 
                href="tel:+12533466105"
                className="bg-primary text-white py-4 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Phone size={20} />
                <span>+1 253-346-6105</span>
              </a>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://www.instagram.com/finaldrip_detail/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
                <a href="https://web.facebook.com/people/Final-Drip-Detailing/61578044445711/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
