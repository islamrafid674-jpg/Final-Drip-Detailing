import { motion } from 'motion/react';
import { Phone, Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Book Your Mission</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Don't Settle <br/> For Less.
            </h3>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Your car deserves elite care. Schedule your appointment today and experience military-level attention to detail.
            </p>

            <div className="space-y-6">
              <a href="tel:+12533466105" className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Call or Text</p>
                  <p className="text-xl font-bold tracking-wider">+1 253-346-6105</p>
                </div>
              </a>
              
              <a href="mailto:Finaldripdetail@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold tracking-wider">Finaldripdetail@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass-panel flex items-center justify-center text-primary">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-lg font-bold tracking-wider">Flexible Scheduling</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <h4 className="text-2xl font-black uppercase tracking-wider mb-8">Request A Quote</h4>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="fname" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" placeholder="First Name" required />
                  <label htmlFor="fname" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-dark peer-valid:px-1 uppercase tracking-wider">First Name</label>
                </div>
                <div className="relative group">
                  <input type="text" id="lname" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" placeholder="Last Name" required />
                  <label htmlFor="lname" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-dark peer-valid:px-1 uppercase tracking-wider">Last Name</label>
                </div>
              </div>
              
              <div className="relative group">
                <input type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" placeholder="Phone Number" required />
                <label htmlFor="phone" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-dark peer-valid:px-1 uppercase tracking-wider">Phone Number</label>
              </div>
              
              <div className="relative group">
                <select id="service" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none uppercase tracking-wider text-sm">
                  <option value="" className="bg-dark text-gray-500">Select Service</option>
                  <option value="interior" className="bg-dark">Interior Detailing</option>
                  <option value="exterior" className="bg-dark">Exterior Detailing</option>
                  <option value="full" className="bg-dark">Full Detail (Int + Ext)</option>
                  <option value="ceramic" className="bg-dark">Ceramic Coating</option>
                </select>
              </div>

              <div className="relative group">
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none" placeholder="Vehicle Make/Model & Details" required></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-dark peer-valid:px-1 uppercase tracking-wider">Vehicle Details</label>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-4 font-bold uppercase tracking-widest transition-all active:scale-95 box-glow">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
