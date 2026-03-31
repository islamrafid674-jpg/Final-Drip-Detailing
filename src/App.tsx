/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import About from './components/About';
import Services from './components/Services';
import ParallaxBreak from './components/ParallaxBreak';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-primary selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <TrustBanner />
      <About />
      <Services />
      <ParallaxBreak />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
