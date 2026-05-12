import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';

const destinations = [
  { name: "Australia", desc: "Monash, UNSW, UQ", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=400" },
  { name: "United Kingdom", desc: "Oxford, Cambridge, UCL", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=400" },
  { name: "Japan", desc: "Tokyo, Kyoto, Osaka", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400" },
  { name: "United States", desc: "Harvard, MIT, Stanford", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=400" },
  { name: "Singapore", desc: "NUS, NTU, SMU", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=400" },
  { name: "Europe", desc: "Germany, France, Italy", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=400" }
];

const Destinations = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-bold uppercase text-primary-light tracking-widest text-xs">Destinasi Studi</span>
            <h2 className="text-4xl md:text-5xl font-outfit text-slate-900">Pilih Negara Impian Anda</h2>
          </div>
          <p className="text-slate-600 max-w-sm mb-2 font-medium">Bekerjasama dengan institusi terkemuka dunia untuk membantu masa depan Anda.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg text-primary-dark">
                  <Globe size={20} />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h4 className="text-2xl font-bold font-outfit text-slate-900 mb-2">{dest.name}</h4>
                <p className="text-slate-600 font-medium mb-6">{dest.desc}</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between group-hover:text-primary-light transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest">Detail Program</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
