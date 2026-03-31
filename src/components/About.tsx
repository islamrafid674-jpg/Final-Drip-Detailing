import { motion } from 'motion/react';
import { Target, Clock, MapPin } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Military Discipline",
      desc: "Run by an active-duty service member applying extreme care to every vehicle."
    },
    {
      icon: <MapPin className="text-primary" size={32} />,
      title: "Fully Mobile",
      desc: "We come to you. No travel hassle, just professional detailing in your driveway."
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Flexible Scheduling",
      desc: "We work around your lifestyle to ensure your vehicle gets the attention it needs."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Final Drip Standard</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Every Car Is <br/> Treated Like <br/> A Mission.
            </h3>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              Final Drip Detailing isn't just a car wash. It's a commitment to excellence. As a veteran-owned business, we bring the same precision, dedication, and attention to detail required in the military straight to your vehicle.
            </p>
            <div className="glass-panel p-6 border-l-4 border-l-primary inline-block">
              <p className="font-bold uppercase tracking-wider text-sm">
                🎖️ Veteran & Military Discounts Available
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 flex gap-6 group hover:bg-white/[0.05] transition-colors"
              >
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-wider mb-2">{feature.title}</h4>
                  <p className="text-gray-400 font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
