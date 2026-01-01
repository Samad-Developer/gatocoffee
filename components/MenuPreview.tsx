"use client"

import { ArrowRight, Coffee, IceCream, Wind, Flame } from "lucide-react"
import Link from "next/link"
import { useGatoModal } from "@/providers/ModalContext"

const TASTE_CATEGORIES = [
  {
    title: "The Bright Side",
    description: "Light roasts with floral notes, citrus acidity, and a tea-like finish.",
    icon: <Wind className="w-8 h-8 text-teal-500" />,
    color: "bg-teal-50",
    tag: "Fruity",
  },
  {
    title: "Deep Soul",
    description: "Medium to dark roasts featuring chocolate, caramel, and toasted nuts.",
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50",
    tag: "Bold",
  },
  {
    title: "Signature Cold",
    description: "Our 24-hour steeped cold brew and specialty iced GATOs.",
    icon: <IceCream className="w-8 h-8 text-teal-500" />,
    color: "bg-teal-50",
    tag: "Chilled",
  },
  {
    title: "Seasonal Lab",
    description: "Experimental batches and limited-edition micro-lots.",
    icon: <Coffee className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50",
    tag: "Unique",
  },
]

export function MenuPreview() {
  const { openModal } = useGatoModal();

  return (
    <section id="menu" className="py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] uppercase mb-6">
              Explore the <br />
              <span className="text-teal-500 italic font-serif lowercase">flavor</span> Palette
            </h2>
            <p className="text-lg text-slate-600">
              We don't just serve coffee; we curate vibes. From the zesty morning wake-up calls to the deep, chocolatey evening rituals.
            </p>
          </div>
          
          {/* External Link Button */}
          <button 
            onClick={() => openModal("Menu Launching Soon", "We are currently finalizing our seasonal bean selection. Check back in Q1 2026!")}
            className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-lg"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TASTE_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              className={`${cat.color} p-8 rounded-[2.5rem] border-2 border-transparent hover:border-slate-900 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:rotate-12 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-white px-3 py-1 rounded-full text-slate-400">
                  {cat.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 uppercase mb-3">
                {cat.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {cat.description}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-slate-900 group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Playful "Build your Drink" Teaser */}
        <div className="mt-12 p-8 md:p-12 bg-orange-500 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Decorative Icon in background */}
            <Coffee className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12" />
            
            <div className="relative z-10 text-center lg:text-left">
                <h4 className="text-3xl md:text-4xl font-black uppercase leading-none mb-2">Not sure what to pick?</h4>
                <p className="text-orange-100 font-medium">Follow our "Flavor Compass" to find your perfect GATO match.</p>
            </div>
            
            <button className="relative z-10 px-10 py-4 bg-white text-orange-600 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                Start Quiz
            </button>
        </div>
      </div>
    </section>
  )
}