"use client";
import React from 'react';
import { Mail, Phone, MapPin, Camera, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24" id="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <img
              src="/logo.png"
              alt="Siger Education"
              className="h-16 brightness-0 invert"
              onError={(e) => e.target.src = 'https://via.placeholder.com/150x50?text=Siger+Education'}
            />
            <p className="text-neutral-400 max-w-xs leading-relaxed">
              Solusi pendidikan terpercaya di Lampung. Kami mendampingi Anda meraih masa depan gemilang melalui pendidikan berkualitas di dalam dan luar negeri.
            </p>
            <div className="flex gap-4">
              {[Camera, Globe, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-primary-light hover:border-primary-light transition-all duration-300 group">
                  <Icon size={20} className="text-neutral-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-outfit font-bold text-xl mb-10 relative">
              Tautan Cepat
              <span className="absolute bottom-[-10px] left-0 w-10 h-1 bg-primary-light rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Testimoni'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-neutral-400 hover:text-primary-light transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-outfit font-bold text-xl mb-10 relative">
              Layanan Kami
              <span className="absolute bottom-[-10px] left-0 w-10 h-1 bg-primary-light rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              {['Study Abroad', 'Persiapan IELTS/TOEFL', 'Visa Assistance', 'Scholarship Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-primary-light transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-outfit font-bold text-xl mb-10 relative">
              Hubungi Kami
              <span className="absolute bottom-[-10px] left-0 w-10 h-1 bg-primary-light rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-neutral-400 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-light transition-colors">
                  <MapPin size={18} className="text-primary-light group-hover:text-white" />
                </div>
                <span className="pt-2">Bandar Lampung, Indonesia</span>
              </li>
              <li className="flex gap-4 items-start text-neutral-400 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-light transition-colors">
                  <Phone size={18} className="text-primary-light group-hover:text-white" />
                </div>
                <span className="pt-2">+62 812-3456-7890</span>
              </li>
              <li className="flex gap-4 items-start text-neutral-400 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-light transition-colors">
                  <Mail size={18} className="text-primary-light group-hover:text-white" />
                </div>
                <span className="pt-2">info@sigereducation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-10 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Siger Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
