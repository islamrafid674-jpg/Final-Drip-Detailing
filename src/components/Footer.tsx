import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#" className="mb-6 inline-block">
              <img 
                src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/518954033_122109649490934814_632185139296127088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=r54KGOSAd14Q7kNvwG3HBeC&_nc_oc=AdoIZND1N27XuXoYgHtg4Hzl4BePtcI_2bOpSPpmGJgaGLb5xbdUe2iGXfJfQrcgqRc&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=byhjulX_FDi3wOzSZv6bkQ&_nc_ss=7a389&oh=00_AfzFhTbrIBd6qTkMAqy7nzgn2RXyhN35dS2Yl-DGC6so7A&oe=69D20084" 
                alt="Final Drip Detailing" 
                className="h-24 md:h-32 w-auto rounded-sm"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-gray-500 text-sm max-w-xs font-light">
              Veteran-owned mobile detailing service delivering military precision to every vehicle.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/finaldrip_detail/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-panel flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors rounded-full">
              <Instagram size={18} />
            </a>
            <a href="https://web.facebook.com/people/Final-Drip-Detailing/61578044445711/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-panel flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors rounded-full">
              <Facebook size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Final Drip Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
