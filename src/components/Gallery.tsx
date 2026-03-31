import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/645820966_17866325550590155_2525072367195637024_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzg0MzY2NDMyMjQ4NDc2NTc0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PowHTW90vNIQ7kNvwGAUyeA&_nc_oc=AdqpoSBc090MchXPVtO6TuuVdLDNevaKBya8bqPp3U9X_1PkKauhPH3oXdoxH7Ux9No&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_AfzjtMluN4ml5kCvHeQqJdJg3mDPXDLw5hYFaf27bZ8ocg&oe=69D1F8E2",
    "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/627478287_17862990453590155_1692062603848879823_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzgyODgzMTk4MTMyNTY0MDY5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=yxxgBg7-CVIQ7kNvwEFssRI&_nc_oc=AdpS1KuL4Yqj9oeJsdvlUaboh6hSmaEtn8XclWP-GsXKNMXhPSTbYwAlD_2e7Z1hTJU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_Afy1CHSH0u7A_-4n-aSLF8oKIIxddd5cPmqZ1DFeT_NspQ&oe=69D1FCB0",
    "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/626257742_17861869014590155_3572761482493841019_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzgyMzM1MzI0OTI4NjcwNDYwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PPXnl47p6XYQ7kNvwFEdGc4&_nc_oc=Adoim49aNjRa6Hcom_fMDzQQrLD0k80nmYTPpXLIBkVdfPoZp_7vXVYZa25qAGZNkQU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_Afw7NQZBXfEKdrMOQRb93RKt2yXlnjzoCPYSrGshtOMZXA&oe=69D205BB",
    "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/615740622_17859194016590155_4770365525757637592_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzgxMDM3NDMwNTE5NzEwNTEwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MjA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ymGrMeUbmeAQ7kNvwETkJHn&_nc_oc=Adousb3klzJsla2YsuBaDGg2Osps3mhJhWr02GTuwLaFGR_5npHOQCC-tNIOUv2yQ5A&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=PFCZGrcR1oe8fMCfq2KAtQ&_nc_ss=7a32e&oh=00_Afww0EzZJiLNsSrr_2_bMEWufybFa9P_zdBUOWs19-gfJA&oe=69D1FBD2",
    "https://instagram.fdac3-2.fna.fbcdn.net/v/t39.30808-6/607006605_122148303254934814_7431158278682626336_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzc5Nzg0Mzk1MDQ2OTEwMjAzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=pKZwZYdV0UQQ7kNvwHD0SyQ&_nc_oc=Ado63-HtfnqnAEyoxXS3x3jwG7LjHW4umUBD5tyl7fmEBxAW9QNWq-HcQ2Y2txb2qdI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=94hkJNHL7hn-LKHzXFBwLw&_nc_ss=7a32e&oh=00_Afwc5DfHEc-0fd8x2VR3qUQvmeF7LEQCJmmx719hRxfXGA&oe=69D2043B",
    "https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/571781828_122137096706934814_2820735589273731102_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc1NTEzNTUyMDYwMzY2MjAzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Od08lsk0e30Q7kNvwFmCzOa&_nc_oc=AdpX7YreiVlhNx_f7vtLOzAEkZLrW7wfw3heKT9zvvuMnY-B5zE_SNhwHYMFSR_0cik&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=94hkJNHL7hn-LKHzXFBwLw&_nc_ss=7a32e&oh=00_AfxrEeuAT6C6mzTxEiZsgbOk0VhmKDnKxCddRkF216I8Pg&oe=69D1E9FA",
    "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/622439117_122154387314934814_7548902478302429587_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=PXWs27dWrsgQ7kNvwG-ct8A&_nc_oc=AdrsrYEL88aZpNIXUimbjDBHWji5bFUguebDDnPMLQoF_4K7hZLHGz1CL8MDNXUV6KY&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=uIOvVsjCNAL7e23Xj1RdTA&_nc_ss=7a389&oh=00_AfySLBl_Jmv432FkViqnMt4E8-jyCwJ24kwfcCLOKE4HSg&oe=69D20F29",
    "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/626801068_122155338020934814_7411909912510518722_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=5OMuz-w6dFYQ7kNvwHZV7Dx&_nc_oc=Adrhy3f02vpdxL-oHHgXkGSy34S8f1YQcFKaUDiHBuqc7SDTu1eUImWyuZlN4KrBxks&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=uIOvVsjCNAL7e23Xj1RdTA&_nc_ss=7a389&oh=00_AfzQ5JEyN3CKH6KbixLBfIU4fE82f2P_KJsGCXqczzuYcg&oe=69D1F50D"
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Results</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">Flawless Finish</h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden group break-inside-avoid rounded-lg"
            >
              <img 
                src={src} 
                alt={`Detailing Work ${i + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
