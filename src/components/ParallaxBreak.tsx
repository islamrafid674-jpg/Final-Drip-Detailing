import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="h-[50vh] md:h-[60vh] relative overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 w-full h-[140%]"
      >
        <img 
          src="https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/571781828_122137096706934814_2820735589273731102_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc1NTEzNTUyMDYwMzY2MjAzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Od08lsk0e30Q7kNvwFmCzOa&_nc_oc=AdpX7YreiVlhNx_f7vtLOzAEkZLrW7wfw3heKT9zvvuMnY-B5zE_SNhwHYMFSR_0cik&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=94hkJNHL7hn-LKHzXFBwLw&_nc_ss=7a32e&oh=00_AfxrEeuAT6C6mzTxEiZsgbOk0VhmKDnKxCddRkF216I8Pg&oe=69D1E9FA" 
          alt="Ceramic Coating Detail" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
          From First Wash To <br/>
          <span className="text-primary text-glow">Full Ceramic Coating</span>
        </h2>
        <p className="text-xl text-gray-300 font-light">Final Drip Detailing delivers perfection.</p>
      </div>
    </section>
  );
}
