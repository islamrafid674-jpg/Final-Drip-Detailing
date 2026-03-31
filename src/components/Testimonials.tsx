import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Michael T.",
      role: "Local Resident",
      text: "Incredible attention to detail. My truck looks better than the day I bought it off the lot. The ceramic coating is flawless."
    },
    {
      name: "Sarah J.",
      role: "Veteran",
      text: "Love supporting a veteran-owned business, especially when the work is this good. They came right to my office and handled everything."
    },
    {
      name: "David L.",
      role: "Car Enthusiast",
      text: "The military precision is real. They didn't miss a single spot on the interior. Highly recommend the full detail package."
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#0a0a0a] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Word on the Street</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">Trusted By Locals</h3>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 gap-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-center relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={64} />
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 font-light italic mb-8 relative z-10">"{review.text}"</p>
              <div>
                <h5 className="font-bold uppercase tracking-wider text-sm">{review.name}</h5>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
