import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-32 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8"
        >
          About <span className="text-white italic px-2 bg-gradient-neon neon-glow drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">Us.</span>
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-10 max-w-5xl"
        >
          <div className="overflow-hidden border border-white/5 relative aspect-video">
            <img 
              src="https://i.ibb.co/5XjryJcN/055f30f7713d506d4c4f529569be97d4.jpg" 
              alt="Floor Candy Philosophy" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000"
            />
          </div>
          <h2 className="text-3xl font-display uppercase tracking-widest text-neon-gold drop-shadow-[0_0_8px_rgba(255,179,0,0.4)]">Our Philosophy</h2>
          
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            <p>
              At Floor Candy, we specialize in transforming concrete and stone surfaces into modern premium finishes built to impress.
            </p>
            <p>
              From polished concrete and decorative epoxy systems to natural stone restoration and concrete sealing, our focus is delivering high-quality craftsmanship with long-lasting durability and modern aesthetics.
            </p>
            <p>
              We believe flooring should do more than serve a purpose — it should elevate the entire space.
            </p>
            <p>
              Every project is approached with precision, attention to detail, and a commitment to premium results.
            </p>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-6">
            <a href="tel:+61435193845" className="flex items-center space-x-3 text-sm uppercase tracking-wider font-bold hover:text-neon-pink transition-colors">
              <Phone size={18} className="text-neon-pink" />
              <span>+61 435 193 845</span>
            </a>
            <a href="mailto:Itzjfrestorations@outlook.com" className="flex items-center space-x-3 text-sm uppercase tracking-wider font-bold hover:text-neon-pink transition-colors">
              <Mail size={18} className="text-neon-pink" />
              <span>Itzjfrestorations@outlook.com</span>
            </a>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}
