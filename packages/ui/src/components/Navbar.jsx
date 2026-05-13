"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-white py-4 shadow-xl border-b border-neutral-100' : 'bg-white/90 backdrop-blur-md py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Siger Education" 
            className={`transition-all duration-300 object-contain ${scrolled ? 'h-12' : 'h-16'}`} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150x50?text=Siger+Education'; }} 
          />
        </div>

        <div className={`fixed inset-0 bg-white flex flex-col justify-center items-center gap-10 transition-all duration-300 md:static md:flex-row md:bg-transparent md:gap-10 ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
          {[
            { name: 'Beranda', link: '#home' },
            { name: 'Tentang Kami', link: '#tentangkami' },
            { name: 'Layanan', link: '#services' },
            { name: 'Testimoni', link: '#testimony' }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.link} 
              className="font-bold text-black hover:text-primary-light transition-all duration-200 uppercase tracking-widest text-[11px]" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn bg-primary-light text-white !px-6 !py-3 rounded-lg flex gap-2 items-center text-xs uppercase tracking-widest hover:bg-black transition-colors">
            <span>Konsultasi</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="md:hidden cursor-pointer text-black z-[1100]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
