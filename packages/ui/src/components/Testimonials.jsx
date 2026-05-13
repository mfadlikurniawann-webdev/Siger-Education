"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Monash University, Australia",
    content: "Siger Education sangat membantu proses pendaftaran saya dari awal hingga akhir. Konsultasinya sangat mendalam dan mereka tahu persis apa yang saya butuhkan.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Siti Aminah",
    role: "University of Tokyo, Japan",
    content: "Persiapan JLPT di Siger Education luar biasa. Gurunya sabar dan materinya sangat relevan. Sekarang saya sudah kuliah di Jepang impian saya!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Rizky Ramadhan",
    role: "University of Birmingham, UK",
    content: "Layanan visa dari Siger Education sangat profesional. Semua dokumen diurus dengan rapi sehingga prosesnya terasa sangat mudah dan cepat.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white" id="testimony">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-bold uppercase text-primary-light tracking-widest text-xs">Testimoni Alumni</span>
          <h2 className="text-4xl md:text-5xl font-outfit text-black">Apa Kata Mereka Tentang Kami?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="relative p-10 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-10 right-10 text-neutral-200 group-hover:text-primary-light/20 transition-colors">
                <Quote size={60} strokeWidth={3} />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} className="text-primary-light fill-primary-light" />
                ))}
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-10 relative z-10 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-transparent group-hover:border-primary-light" />
                <div>
                  <h4 className="font-bold text-black text-lg">{t.name}</h4>
                  <p className="text-neutral-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
