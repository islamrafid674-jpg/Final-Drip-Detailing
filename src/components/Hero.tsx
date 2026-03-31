import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/645820966_17866325550590155_2525072367195637024_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzg0MzY2NDMyMjQ4NDc2NTc0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PowHTW90vNIQ7kNvwGAUyeA&_nc_oc=AdqpoSBc090MchXPVtO6TuuVdLDNevaKBya8bqPp3U9X_1PkKauhPH3oXdoxH7Ux9No&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_AfzjtMluN4ml5kCvHeQqJdJg3mDPXDLw5hYFaf27bZ8ocg&oe=69D1F8E2" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"></div>
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="glass-panel px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <ShieldCheck size={14} />
              Veteran-Owned Business
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Your Car <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Deserves</span> <br/>
            <span className="text-primary text-glow">Military-Level</span><br/>
            Attention
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed"
          >
            We bring professional detailing straight to you—flexible, convenient, and precise. Every car is treated like a mission.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 box-glow"
            >
              Book Your Mission
              <ChevronRight size={18} />
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto glass-panel hover:bg-white/10 text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center justify-center transition-all active:scale-95"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
