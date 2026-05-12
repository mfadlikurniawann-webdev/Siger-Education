import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, CheckCircle } from 'lucide-react';

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
          
          <h1 className="text-5xl md:text-7xl font-outfit text-slate-900 leading-[1.1]">
            Siap Kuliah <br/> 
            Ke Luar Negeri? <br/>
            <span className="text-primary-light">Siger Education</span> Solusinya.
          </h1>
          
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            Dapatkan bimbingan intensif dari persiapan bahasa hingga pendaftaran universitas terbaik dunia. Kami bantu wujudkan impian pendidikan global Anda.
          </p>
          
          <ul className="space-y-3">
            {['Pendaftaran ke 600+ Universitas Dunia', 'Persiapan IELTS/TOEFL dengan Mentor Ahli', 'Layanan Visa 100% Dibantu Hingga Selesai'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="text-emerald-500" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary text-lg px-12 py-5">
              Konsultasi Gratis <ArrowRight size={22} className="ml-2" />
            </button>
            <button className="btn border-2 border-slate-200 text-slate-700 hover:bg-slate-50 text-lg px-12 py-5">
              Lihat Layanan
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              alt="Education Success" 
              className="w-full aspect-[4/5] object-cover" 
            />
            {/* STRONGER OVERLAY FOR READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 text-white space-y-3 z-10">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => <CheckCircle key={i} size={18} className="text-orange-400 fill-orange-400" />)}
              </div>
              <h4 className="text-3xl font-outfit font-bold text-white">500+ Siswa Berhasil</h4>
              <p className="text-lg text-white/90 font-medium">Kuliah di Top Universitas Dunia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
