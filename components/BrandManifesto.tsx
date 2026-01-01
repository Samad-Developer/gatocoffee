import { Coffee, ShieldCheck, Zap, Heart } from "lucide-react"

const FEATURES = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Roast-to-Cup Speed",
    desc: "We deliver within 24-72 hours of roasting. Freshness isn't a goal; it's our rule.",
    color: "bg-orange-500"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Precision Sourcing",
    desc: "Direct trade relationships with farmers. We pay above fair-trade prices for top-tier beans.",
    color: "bg-teal-500"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Data-Driven Roast",
    desc: "Every batch is logged and analyzed. We use science to unlock the playful flavors inside.",
    color: "bg-orange-500"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Karachi's Soul",
    desc: "Designed and roasted in the heart of the city, bringing global standards to our local streets.",
    color: "bg-teal-500"
  }
]

export function BrandManifesto() {
  return (
    <section id="why-gato" className="py-24 bg-white border-t-4 border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Huge Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1.5 bg-orange-500 rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">The GATO Code</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase leading-[0.85] tracking-tighter mb-8">
              WHY <br />
              <span className="text-teal-500 italic font-serif lowercase">the</span> <br />
              GRIN?
            </h2>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-sm">
              We stripped away the snobbery of specialty coffee and kept the excellence. 
            </p>
          </div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            {FEATURES.map((item, idx) => (
              <div 
                key={idx}
                className="group flex flex-col md:flex-row gap-8 p-8 md:p-12 rounded-[3rem] bg-slate-50 border-2 border-transparent hover:border-slate-900 hover:bg-white hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all duration-500"
              >
                <div className={`${item.color} w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                  {item.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium italic">
                    "{item.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Big Quote */}
        <div className="mt-32 p-12 md:p-20 bg-teal-50 rounded-[4rem] text-center">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-tight max-w-4xl mx-auto">
              "We believe that serious coffee <span className="text-orange-500">doesn't have to be boring.</span> It should make you grin."
            </h3>
            <div className="mt-8 flex items-center justify-center gap-2 font-black uppercase tracking-widest text-teal-600">
                <div className="w-2 h-2 rounded-full bg-teal-600" />
                The GATO Team
                <div className="w-2 h-2 rounded-full bg-teal-600" />
            </div>
        </div>

      </div>
    </section>
  )
}