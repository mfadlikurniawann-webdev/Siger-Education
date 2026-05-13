import React from 'react';
import { Mail, Phone, MapPin, Send, Camera, MessageCircle, Globe, Share2 } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-neutral-50" id="contact">
      <div className="container">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-neutral-100">
          <div className="grid lg:grid-cols-5 items-stretch">
            {/* Contact Info Panel - STRICT BLACK */}
            <div className="lg:col-span-2 bg-black p-12 lg:p-16 text-white space-y-12">
              <div className="space-y-4">
                <span className="font-bold uppercase text-primary-light tracking-widest text-xs">Hubungi Kami</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-bold">Konsultasikan Impian Anda</h2>
                <p className="text-neutral-400 text-lg">Siap melangkah ke panggung dunia? Tim ahli kami siap mendampingi Anda di setiap proses.</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <MessageCircle className="text-primary-light" />, title: "WhatsApp Kami", val: "+62 812-3456-7890" },
                  { icon: <Mail className="text-primary-light" />, title: "Email Resmi", val: "info@sigereducation.com" },
                  { icon: <MapPin className="text-primary-light" />, title: "Lokasi Kantor", val: "Bandar Lampung, Indonesia" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-light group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-neutral-400 group-hover:text-primary-light transition-colors">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="font-bold mb-4 uppercase tracking-widest text-xs">Ikuti Kami</p>
                <div className="flex gap-4">
                  {[Camera, Globe, Share2].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary-light hover:border-primary-light transition-all cursor-pointer">
                      {/* @ts-ignore */}
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Panel - STRICT WHITE/ORANGE */}
            <div className="lg:col-span-3 p-12 lg:p-20 bg-white">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-black">Nama Lengkap</label>
                    <input type="text" className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-orange-50 text-black font-medium transition-all" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-black">Alamat Email</label>
                    <input type="email" className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-orange-50 text-black font-medium transition-all" placeholder="email@anda.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-black">Layanan Yang Diminati</label>
                  <select className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-orange-50 text-black font-medium transition-all appearance-none">
                    <option>Pilih Layanan Konsultasi</option>
                    <option>Study Abroad (S1/S2/S3)</option>
                    <option>Persiapan IELTS/TOEFL</option>
                    <option>Layanan Visa Pelajar</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-black">Pesan Anda</label>
                  <textarea rows="4" className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-orange-50 text-black font-medium transition-all" placeholder="Tuliskan detail pertanyaan Anda di sini..."></textarea>
                </div>

                <button className="btn btn-primary w-full py-5 flex gap-3 items-center justify-center text-lg shadow-2xl shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span>Kirim Pesan Sekarang</span>
                  <Send size={22} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;
