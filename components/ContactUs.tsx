"use client"

import { Send, MapPin, Mail, Phone, Clock, Instagram, Twitter } from "lucide-react"

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for form submission
  }

  return (
    <section id="contact" className="py-24 bg-[#FFFDF9] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border-[4px] border-slate-900 rounded-[3rem] overflow-hidden shadow-[16px_16px_0px_0px_rgba(15,23,42,1)]">
          
          {/* LEFT COLUMN: CONTACT INFO (PLAYFUL) */}
          <div className="lg:col-span-5 bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none uppercase font-black text-6xl break-all leading-none italic">
              Gato Gato Gato Gato Gato Gato Gato Gato Gato Gato Gato Gato Gato
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Say <span className="text-orange-500">Hello!</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xs">
                Have a question about our beans? Or just want to talk coffee? We’re all ears.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <MapPin className="w-6 h-6 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Visit Us</p>
                    <p className="font-bold text-lg">DHA Phase 6, Karachi</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Mail className="w-6 h-6 text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Us</p>
                    <p className="font-bold text-lg">hello@gatocoffee.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <Clock className="w-6 h-6 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Brewing Hours</p>
                    <p className="font-bold text-lg">Mon - Sun: 8am - 11pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12 flex gap-4">
              <div className="p-3 bg-white/5 rounded-xl hover:bg-orange-500 transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="p-3 bg-white/5 rounded-xl hover:bg-teal-500 transition-all cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM (PROFESSIONAL) */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Ali Khan"
                    className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-slate-900 focus:outline-none transition-all font-bold placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="ali@example.com"
                    className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-slate-900 focus:outline-none transition-all font-bold placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subject</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-slate-900 focus:outline-none transition-all font-bold text-slate-600 appearance-none">
                  <option>General Inquiry</option>
                  <option>Wholesale Partnership</option>
                  <option>Events & Catering</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us what's on your mind..."
                  className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-slate-900 focus:outline-none transition-all font-bold placeholder:text-slate-300 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-orange-100 active:scale-95"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}