import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function TrustBanner() {
  const items = [
    "Veteran-Owned",
    "Military Precision",
    "Flawless Results",
    "Fully Mobile Service",
    "Ceramic Coating Experts",
    "Interior & Exterior",
  ];

  return (
    <div className="w-full bg-primary py-3 overflow-hidden flex relative z-20 border-y border-white/10">
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-6 text-white font-bold uppercase tracking-widest text-sm">
            <span>{item}</span>
            <Star size={12} className="ml-12 opacity-50 fill-current" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
