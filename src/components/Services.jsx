import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, CreditCard, Award, Languages, Users, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Compass size={28} />,
    title: "Konsultasi Pendidikan",
    description: "Panduan mendalam untuk memilih program studi dan universitas yang tepat sesuai minat dan bakat Anda."
  },
  {
    icon: <BookOpen size={28} />,
    title: "Pendaftaran Universitas",
    description: "Bantuan profesional dalam proses pendaftaran ke berbagai universitas ternama di berbagai negara."
  },
  {
    icon: <CreditCard size={28} />,
    title: "Bantuan Visa Pelajar",
    description: "Layanan pengurusan dokumen dan persiapan wawancara visa untuk memastikan keberhasilan studi Anda."
  },
  {
    icon: <Languages size={28} />,
    title: "Persiapan Bahasa",
    description: "Kursus intensif persiapan IELTS, TOEFL, dan bahasa asing lainnya untuk memenuhi syarat akademik."
  },
  {
    icon: <Award size={28} />,
    title: "Info Beasiswa",
    description: "Akses informasi terbaru dan bantuan pendaftaran berbagai skema beasiswa bergengsi dunia."
  },
  {
    icon: <Users size={28} />,
    title: "Bimbingan Karir",
    description: "Konsultasi jalur karir masa depan setelah lulus pendidikan tinggi untuk kesuksesan jangka panjang."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-neutral-50" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-bold uppercase text-primary-light tracking-widest text-xs">Layanan Unggulan</span>
          <h2 className="text-4xl md:text-5xl font-outfit text-black">Solusi Pendidikan Lengkap</h2>
          <p className="text-neutral-600 text-lg">Pilih layanan yang paling sesuai dengan kebutuhan persiapan studi Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-10 rounded-2xl border border-neutral-200 hover:border-primary-light transition-all duration-300 group shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-neutral-100 text-black group-hover:bg-primary-light group-hover:text-white rounded-xl flex items-center justify-center mb-8 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-outfit font-bold text-black mb-4 group-hover:text-primary-light transition-colors">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-8">{service.description}</p>
              
              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-sm text-black hover:text-primary-light transition-colors uppercase tracking-widest">
                Detail Layanan <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
