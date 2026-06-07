import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Facebook, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
             <div>
                <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight">
                  Let's Transform <br/><span className="text-gradient">Your Floors.</span>
                </h1>
                <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
                  Get in touch today for premium flooring, restoration, and decorative concrete solutions tailored to your space.
                </p>
             </div>

             <div className="space-y-8">
                <a href="tel:+61435193845" className="flex items-start space-x-5 group">
                  <div className="w-12 h-12 bg-charcoal border border-white/5 flex items-center justify-center group-hover:bg-gradient-neon group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                    <p className="text-lg">+61 435 193 845</p>
                  </div>
                </a>

                <a href="mailto:Itzjfrestorations@outlook.com" className="flex items-start space-x-5 group">
                  <div className="w-12 h-12 bg-charcoal border border-white/5 flex items-center justify-center group-hover:bg-gradient-neon group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-lg">Itzjfrestorations@outlook.com</p>
                  </div>
                </a>

                <a href="https://www.facebook.com/profile.php?id=61585930480462" target="_blank" rel="noreferrer" className="flex items-start space-x-5 group">
                  <div className="w-12 h-12 bg-charcoal border border-white/5 flex items-center justify-center group-hover:bg-gradient-neon group-hover:text-white group-hover:border-neon-pink transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                    <Facebook size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Social</p>
                    <p className="text-lg">Follow us on Facebook</p>
                  </div>
                </a>
             </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-charcoal p-10 md:p-14 border border-white/5 relative overflow-hidden">
               {/* Decorative structural elements */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 -translate-y-16 blur-2xl"></div>
               
               <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-[#888] font-bold">First Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 p-3 text-xs focus:border-neon-gold focus:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)] outline-none text-white transition-all rounded-none placeholder-gray-700" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Last Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 p-3 text-xs focus:border-neon-gold focus:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)] outline-none text-white transition-all rounded-none placeholder-gray-700" placeholder="Doe" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Email Address</label>
                   <input type="email" className="w-full bg-white/5 border border-white/10 p-3 text-xs focus:border-neon-gold focus:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)] outline-none text-white transition-all rounded-none placeholder-gray-700" placeholder="john@example.com" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Phone Number</label>
                   <input type="tel" className="w-full bg-white/5 border border-white/10 p-3 text-xs focus:border-neon-gold focus:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)] outline-none text-white transition-all rounded-none placeholder-gray-700" placeholder="+61 XXX XXX XXX" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Project Details</label>
                   <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-3 text-xs focus:border-neon-gold focus:drop-shadow-[0_0_8px_rgba(255,179,0,0.5)] outline-none text-white transition-all rounded-none placeholder-gray-700 resize-none mt-2" placeholder="Tell us about your space and requirements..."></textarea>
                 </div>

                 <button type="submit" className="w-full bg-gradient-neon text-white text-[10px] uppercase tracking-widest font-bold hover-neon-glow transition-all py-4 mt-4 flex justify-center items-center space-x-2">
                   <span>Submit Inquiry</span>
                   <ArrowRight size={16} />
                 </button>
               </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
