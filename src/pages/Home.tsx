import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium Polished Concrete Flooring" 
            className="w-full h-full object-cover opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-neon-gold uppercase tracking-[0.3em] font-medium text-sm mb-6">
              Floor Candy Restoration
            </motion.p>
            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
              Concrete, <span className="text-gradient">Reimagined.</span>
            </motion.h1>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Premium floor restoration, epoxy coatings, decorative concrete systems, and polished finishes designed to transform ordinary surfaces into standout spaces.
            </motion.p>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-3 bg-gradient-neon text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover-neon-glow transition-all duration-300"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-y border-white/5 py-12"
          >
            {[
              "Premium Decorative Finishes",
              "Professional Grinding & Restoration",
              "Durable Long-Lasting Coatings",
              "Luxury Concrete & Stone Finishes",
              "Clean & Reliable Workmanship"
            ].map((point, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3">
                <CheckCircle2 size={24} className="text-neon-purple drop-shadow-[0_0_8px_rgba(178,0,255,0.8)]" strokeWidth={1.5} />
                <span className="text-sm font-display tracking-wide text-gray-300 uppercase">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Service Segment */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Luxury Polished <br/>Concrete Systems</h2>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              We specialize in transforming dull, worn floors into sleek, highly-reflective surfaces that define modern luxury. Our premium polished concrete systems offer unmatched durability and an industrial-chic aesthetic that elevates any residential or commercial space.
            </p>
            <Link to="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-neon-pink transition-colors border-b border-white hover:border-neon-pink pb-1 group">
              Explore Services
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform text-neon-pink" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-white/5">
              <img 
                src="https://i.ibb.co/G4r7YnDK/45e8984adfed765c4afeaad6be3eedf1.jpg" 
                alt="Polished Concrete Floor Example" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-dark opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">Ready to Elevate Your Space?</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-3 bg-gradient-neon text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover-neon-glow transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
