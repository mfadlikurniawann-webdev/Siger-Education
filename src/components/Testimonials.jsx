import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmad Fauzi",
    school: "Monash University, Australia",
    text: "Siger Education sangat membantu proses pendaftaran saya dari awal hingga akhir. Konsultasinya sangat mendalam dan mereka tahu persis apa yang saya butuhkan.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Siti Aminah",
    school: "University of Tokyo, Japan",
    text: "Persiapan JLPT di Siger Education luar biasa. Gurunya sabar dan materinya sangat relevan. Sekarang saya sudah kuliah di Jepang impian saya!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rizky Ramadhan",
    school: "University of Birmingham, UK",
    text: "Layanan visa dari Siger Education sangat profesional. Semua dokumen diurus dengan rapi sehingga prosesnya terasa sangat mudah dan cepat.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white" id="testimony">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-bold uppercase text-primary-light tracking-widest text-xs">Testimoni Alumni</span>
          <h2 className="text-4xl md:text-5xl font-outfit text-primary-dark leading-tight">Apa Kata Mereka Tentang Kami?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-slate-50 p-10 rounded-2xl border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute top-6 right-6 text-slate-200 group-hover:text-primary-light/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F15A29" color="#F15A29" />)}
              </div>

              <p className="text-slate-600 mb-8 italic leading-relaxed text-lg">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary-dark">{item.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{item.school}</p>
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
