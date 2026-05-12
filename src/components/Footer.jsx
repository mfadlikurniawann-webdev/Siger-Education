import React from 'react';
import { Mail, Phone, MapPin, Globe, Share2, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-20" id="contact">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        <div className="space-y-6">
          <img 
            src="/logo.png" 
            alt="Siger Education" 
            className="h-12 brightness-0 invert" 
            onError={(e) => e.target.src = 'https://via.placeholder.com/150x50?text=Siger+Education'} 
          />
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Solusi pendidikan terpercaya di Lampung. Kami mendampingi Anda meraih masa depan gemilang melalui pendidikan berkualitas di dalam dan luar negeri.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sigereducation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:-translate-y-1">
              <Globe size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:-translate-y-1">
              <Share2 size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:-translate-y-1">
              <Users size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xl mb-8">Tautan Cepat</h4>
          <ul className="space-y-4">
            <li><a href="#home" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Beranda</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Layanan</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Tentang Kami</a></li>
            <li><a href="#testimony" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Testimoni</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl mb-8">Layanan Kami</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Study Abroad</a></li>
            <li><a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Persiapan IELTS</a></li>
            <li><a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Visa Assistance</a></li>
            <li><a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:pl-2">Scholarship Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl mb-8">Hubungi Kami</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start text-gray-400">
              <MapPin size={20} className="text-primary-light shrink-0" />
              <span>Bandar Lampung, Indonesia</span>
            </li>
            <li className="flex gap-4 items-start text-gray-400">
              <Phone size={20} className="text-primary-light shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex gap-4 items-start text-gray-400">
              <Mail size={20} className="text-primary-light shrink-0" />
              <span>info@sigereducation.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Siger Education. All Rights Reserved. Built with ❤️ in Lampung.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
