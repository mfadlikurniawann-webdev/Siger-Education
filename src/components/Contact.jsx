import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-bold uppercase text-primary-light tracking-widest text-xs">Hubungi Kami</span>
              <h2 className="text-4xl md:text-6xl font-outfit text-slate-900 leading-tight">Konsultasikan Impian Anda</h2>
              <p className="text-slate-600 text-lg">Tim kami siap membantu menjawab pertanyaan Anda seputar studi ke luar negeri. Hubungi kami kapan saja.</p>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {[
                { icon: <Phone />, title: "WhatsApp Kami", val: "+62 812-3456-7890" },
                { icon: <Mail />, title: "Email Kami", val: "info@sigereducation.com" },
                { icon: <MapPin />, title: "Kunjungi Kami", val: "Bandar Lampung, Indonesia" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary-dark text-white rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-2xl border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-light text-slate-900 font-medium" placeholder="Masukkan nama Anda" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900">Alamat Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-light text-slate-900 font-medium" placeholder="email@anda.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Layanan Yang Diminati</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-light text-slate-900 font-medium">
                  <option>Pilih Layanan</option>
                  <option>Study Abroad</option>
                  <option>Persiapan IELTS/TOEFL</option>
                  <option>Visa Assistance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Pesan / Pertanyaan</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-light text-slate-900 font-medium" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>

              <button className="btn btn-primary w-full py-5 flex gap-2 items-center justify-center text-lg shadow-xl shadow-orange-100 hover:scale-[1.01] transition-transform">
                <span>Kirim Sekarang</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
