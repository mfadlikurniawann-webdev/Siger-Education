import React from 'react';
import { CheckCircle2, Star, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="tentangkami" className="py-24 bg-white overflow-hidden">
      <div className="container grid lg:grid-cols-2 items-center gap-20">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
            alt="Success Students" 
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-neutral-100 hidden md:block">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center">
                <Star className="text-primary-light fill-primary-light" size={32} />
              </div>
              <div>
                <h4 className="text-4xl font-bold font-outfit text-black leading-none">4.9/5</h4>
                <p className="text-[11px] uppercase tracking-[0.2em] font-black text-neutral-400 mt-1">STUDENT SATISFACTION</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="font-bold uppercase text-primary-light tracking-widest text-xs">
              Tentang Siger Education
            </span>
            <h2 className="text-4xl md:text-6xl font-outfit text-black leading-[1.1]">
              Pintu Gerbang Anda Menuju Kesuksesan Global
            </h2>
          </div>
          
          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              Siger Education lahir dari visi untuk memberikan akses pendidikan berkualitas bagi putra-putri daerah, khususnya di Lampung. Kami percaya bahwa setiap individu memiliki potensi besar yang bisa dikembangkan melalui pendidikan yang tepat.
            </p>
            <p>
              Dengan jaringan kemitraan yang luas dan tim konsultan berpengalaman, kami berkomitmen untuk mendampingi Anda di setiap tahap—mulai dari perencanaan studi hingga keberangkatan.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {[
              { icon: <CheckCircle2 className="text-primary-light" />, title: "Integritas Tinggi" },
              { icon: <Zap className="text-primary-light" />, title: "Proses Cepat" },
              { icon: <Users className="text-primary-light" />, title: "Mentor Ahli" },
              { icon: <Star className="text-primary-light" />, title: "Terakreditasi" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center border-b border-neutral-100 pb-4">
                {item.icon}
                <h4 className="font-bold text-black text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
