import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="md:col-span-1 space-y-6">
          <Link to="/" className="text-2xl font-bold tracking-widest text-white uppercase block font-display">
            Floor <span className="text-neon-pink">Candy</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium floor restoration, epoxy coatings, decorative concrete systems, and polished finishes.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61585930480462" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white font-display uppercase tracking-wider text-sm font-semibold">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-300">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-6">
          <h4 className="text-white font-display uppercase tracking-wider text-sm font-semibold">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors duration-300">Polished Concrete</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-300">Epoxy Coatings</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-300">Natural Stone Restoration</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-300">Concrete Grinding</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-display uppercase tracking-wider text-sm font-semibold">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <Phone size={16} className="mt-0.5 text-neon-gold flex-shrink-0" />
              <span>+61 435 193 845</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail size={16} className="mt-0.5 text-neon-gold flex-shrink-0" />
              <a href="mailto:Itzjfrestorations@outlook.com" className="hover:text-white transition-colors break-all">Itzjfrestorations@outlook.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="mt-0.5 text-neon-gold flex-shrink-0" />
              <span>Serving premium locations with luxury floor restoration.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center px-6">
        <p className="text-gray-500 text-xs tracking-wider uppercase font-medium">
          &copy; {new Date().getFullYear()} Floor Candy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
