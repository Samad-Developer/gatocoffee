"use client"

import Image from "next/image"
import { Sparkles, Heart, Globe, ShieldCheck } from "lucide-react"

const VALUES = [
  {
    icon: <Heart className="w-6 h-6 text-orange-500" />,
    title: "Made with Joy",
    desc: "We believe happy roasters make better coffee. Our Karachi lab is a space of pure creativity.",
  },
  {
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    title: "Directly Sourced",
    desc: "No middleman. We work directly with farmers from Ethiopia to Brazil to ensure fair pay.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
    title: "Quality First",
    desc: "Every batch is cupped and tested. If it’s not perfect, it doesn’t leave the roastery.",
  },
]

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: The Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            {/* Decorative "Blob" background */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -z-10" />
            
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e" 
                alt="Our Roastery"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Playful Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-full shadow-xl rotate-12 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black italic uppercase leading-none">Est.</span>
              <span className="text-xl font-bold">2025</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              The GATO Story
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] uppercase">
              Professional <br />
              Coffee, <br />
              <span className="text-orange-500">Playful Soul.</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              GATO started in a small kitchen in Karachi with one simple goal: to make specialty coffee accessible, fun, and vibrantly flavorful.
            </p>
            
            <div className="space-y-4">
               <p className="text-slate-500">
                We realized that the world of high-end coffee often felt too serious. We wanted to change that. At GATO, we obsess over moisture levels, roast curves, and extraction times so that all you have to do is enjoy the sip.
               </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value, idx) => (
            <div 
              key={idx} 
              className="p-10 rounded-[2.5rem] bg-slate-50 border-2 border-transparent hover:border-orange-200 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase mb-4">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed italic">
                "{value.desc}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats / Final CTA Area */}
        <div className="mt-32 relative bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
          {/* Background Text Effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none">
             <span className="text-[20vw] font-black text-white uppercase italic tracking-tighter">KARACHI</span>
          </div>

          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
              Ready to join the <span className="text-teal-400">Coffee Revolution?</span>
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-white">
              <div>
                <p className="text-5xl font-black text-orange-500">8+</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Single Origins</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <p className="text-5xl font-black text-teal-400">24h</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Fresh Delivery</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <p className="text-5xl font-black text-orange-500">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Joy Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}