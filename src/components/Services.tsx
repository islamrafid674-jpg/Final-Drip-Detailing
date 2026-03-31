import { motion } from 'motion/react';
import { Droplets, Sparkles, Shield, Car } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "interior",
      title: "Interior Detailing",
      icon: <Car size={24} />,
      image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/627478287_17862990453590155_1692062603848879823_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzgyODgzMTk4MTMyNTY0MDY5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=yxxgBg7-CVIQ7kNvwEFssRI&_nc_oc=AdpS1KuL4Yqj9oeJsdvlUaboh6hSmaEtn8XclWP-GsXKNMXhPSTbYwAlD_2e7Z1hTJU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_Afy1CHSH0u7A_-4n-aSLF8oKIIxddd5cPmqZ1DFeT_NspQ&oe=69D1FCB0",
      features: ["Deep vacuuming & carpet care", "Stain removal & odor elimination", "Surface cleaning & conditioning"],
      colSpan: "lg:col-span-2"
    },
    {
      id: "exterior",
      title: "Exterior Detailing",
      icon: <Droplets size={24} />,
      image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/626257742_17861869014590155_3572761482493841019_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzgyMzM1MzI0OTI4NjcwNDYwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PPXnl47p6XYQ7kNvwFEdGc4&_nc_oc=Adoim49aNjRa6Hcom_fMDzQQrLD0k80nmYTPpXLIBkVdfPoZp_7vXVYZa25qAGZNkQU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_Afw7NQZBXfEKdrMOQRb93RKt2yXlnjzoCPYSrGshtOMZXA&oe=69D205BB",
      features: ["Hand wash & streak-free finish", "Wheel & tire cleaning", "Paint-safe protection & buffing"],
      colSpan: "lg:col-span-1"
    },
    {
      id: "buff-wax",
      title: "Buff & Wax",
      icon: <Sparkles size={24} />,
      image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/615740622_17859194016590155_4770365525757637592_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzgxMDM3NDMwNTE5NzEwNTEwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MjA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ymGrMeUbmeAQ7kNvwETkJHn&_nc_oc=Adousb3klzJsla2YsuBaDGg2Osps3mhJhWr02GTuwLaFGR_5npHOQCC-tNIOUv2yQ5A&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_Afww0EzZJiLNsSrr_2_bMEWufybFa9P_zdBUOWs19-gfJA&oe=69D1FBD2",
      features: ["Gloss restoration", "Minor scratch reduction", "Protective finish"],
      colSpan: "lg:col-span-1"
    },
    {
      id: "ceramic",
      title: "Ceramic Coating",
      icon: <Shield size={24} />,
      image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t39.30808-6/607006605_122148303254934814_7431158278682626336_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzc5Nzg0Mzk1MDQ2OTEwMjAzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=pKZwZYdV0UQQ7kNvwHD0SyQ&_nc_oc=Ado63-HtfnqnAEyoxXS3x3jwG7LjHW4umUBD5tyl7fmEBxAW9QNWq-HcQ2Y2txb2qdI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=94hkJNHL7hn-LKHzXFBwLw&_nc_ss=7a32e&oh=00_Afwc5DfHEc-0fd8x2VR3qUQvmeF7LEQCJmmx719hRxfXGA&oe=69D2043B",
      features: ["Long-term paint protection", "Hydrophobic surface", "Maximum shine & durability"],
      colSpan: "lg:col-span-2"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0a0a0a] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Arsenal</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">Elite Services</h3>
        </div>

        {/* Desktop Bento Grid / Mobile Horizontal Snap */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 gap-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative min-w-[85vw] sm:min-w-[300px] lg:min-w-0 h-[380px] lg:h-[450px] snap-center rounded-xl overflow-hidden group ${service.colSpan}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center text-primary mb-6 border border-primary/30">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-wider mb-4">{service.title}</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-gray-300 text-sm font-light flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
