import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, CheckCircle2, Star } from 'lucide-react';
import Button from './UI/Button';

const Hero = () => {
  return (
    <section className="relative pt-44 pb-24 bg-white" id="home">
      <div className="container grid lg:grid-cols-2 items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 text-primary-light font-bold text-xs uppercase tracking-widest bg-orange-50 px-4 py-2 rounded-lg">
            <GraduationCap size={16} />
            <span>Consultant Pendidikan Terpercaya</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-outfit text-black leading-[1.1]">
            Siap Kuliah <br/> 
            Ke Luar Negeri? <br/>
            <span className="text-primary-light">Siger Education</span> Solusinya.
          </h1>
          
          <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
            Dapatkan bimbingan intensif dari persiapan bahasa hingga pendaftaran universitas terbaik dunia. Kami bantu wujudkan impian pendidikan global Anda.
          </p>
          
          <ul className="space-y-3">
            {['Pendaftaran ke 600+ Universitas Dunia', 'Persiapan IELTS/TOEFL dengan Mentor Ahli', 'Layanan Visa 100% Dibantu Hingga Selesai'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-black font-medium">
                <CheckCircle2 className="text-emerald-500" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" className="text-lg px-12 py-5" icon={ArrowRight}>
              Konsultasi Gratis
            </Button>
            <Button variant="outline" className="text-lg px-12 py-5">
              Lihat Layanan
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              alt="Education Success" 
              className="w-full aspect-[4/5] object-cover" 
            />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white p-8 rounded-2xl shadow-2xl border border-neutral-100 z-20">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-outfit font-bold text-black leading-tight">500+ Siswa Berhasil</h4>
                  <p className="text-lg text-neutral-600 font-medium">Kuliah di Top Universitas Dunia</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
