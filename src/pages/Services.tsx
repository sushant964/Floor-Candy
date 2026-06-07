import { motion } from 'motion/react';
import { Droplets, Sparkles, Gem, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Droplets size={32} strokeWidth={1.5} />,
    title: "Epoxy Coatings",
    desc: "Durable decorative epoxy systems with sleek modern aesthetics."
  },
  {
    icon: <Gem size={32} strokeWidth={1.5} />,
    title: "Natural Stone Polishing & Sealing",
    desc: "Restoration and protection solutions for premium natural stone surfaces."
  },
  {
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    title: "Polished Concrete",
    desc: "Luxury polished concrete finishes with a clean modern industrial look."
  },
  {
    icon: <div className="grid grid-cols-2 gap-1 w-8 h-8"><div className="bg-current rounded-sm"></div><div className="bg-current rounded-full"></div><div className="bg-current rounded-full"></div><div className="bg-current rounded-sm"></div></div>,
    title: "Decorative Systems",
    desc: "Custom decorative floor systems designed to create visually striking spaces."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Services() {
  return (
    <div className="w-full pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neon-gold uppercase tracking-[0.3em] font-medium text-sm mb-4 drop-shadow-[0_0_8px_rgba(255,179,0,0.5)]"
        >
          Expertise
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tighter"
        >
          Our Services.
        </motion.h1>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative bg-charcoal p-10 border border-white/5 hover:border-white/20 transition-colors duration-500 overflow-hidden flex flex-col h-full"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="text-neon-pink mb-8 group-hover:scale-110 group-hover:text-neon-gold transition-transform text-colors duration-500 origin-left drop-shadow-[0_0_8px_rgba(255,0,127,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(255,179,0,0.8)]">
              {service.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">{service.desc}</p>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-sm font-bold uppercase tracking-wider text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <span className="group-hover:text-neon-gold transition-colors">Learn More</span>
              <ArrowRight size={16} className="ml-2 text-neon-gold" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
        <div className="inline-block p-1 bg-gradient-neon hover-neon-glow transition-all duration-300">
          <div className="bg-matte-black px-12 py-12 flex flex-col items-center">
             <h3 className="text-3xl font-display font-bold mb-4">Need a specialized finish?</h3>
             <p className="text-gray-400 mb-8 max-w-md">Contact our team to discuss custom solutions tailored to your unique architectural requirements.</p>
             <Link 
              to="/contact" 
              className="bg-gradient-neon text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover-neon-glow transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
