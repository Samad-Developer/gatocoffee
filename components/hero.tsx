import Image from "next/image"
import { Coffee, Sparkles, ArrowRight, Sun, Zap, X } from "lucide-react"
import { HeroOrderButton } from "./HeroOrderButton"

export function Hero() {


  return (
    <section className="relative min-h-screen bg-[#FFFDF9] overflow-hidden pt-24 pb-12">

      {/* Playful Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-200/40 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-100/40 rounded-full blur-[60px] md:blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: CONTENT AREA */}
        <div className="lg:col-span-6 z-10 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Karachi's Brightest Brew
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              SIP. <br />
              <span className="text-orange-500">GRIN.</span> <br />
              GATO<span className="text-teal-500">!</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 max-w-md leading-relaxed">
            Premium coffee, playful soul. We’re bringing world-class roasting to Karachi with a side of pure joy.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <HeroOrderButton/>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 relative overflow-hidden">
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">500+ Happy Sippers</p>
            </div>
          </div>
        </div>

        {/* RIGHT: BENTO GRID AREA */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4 w-full">

            {/* Top Wide Image */}
            <div className="col-span-2 relative h-[250px] md:h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/hero/hero1.jpg"
                alt="Professional Barista"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest bg-orange-500 px-3 py-1 rounded-full">New Batch</span>
              </div>
            </div>

            {/* Teal Info Card */}
            <div className="bg-teal-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-between aspect-square -rotate-2 hover:rotate-0 transition-all duration-500 shadow-lg relative overflow-hidden">
              <Zap className="w-12 h-12 fill-white mb-4 z-10" />

              {/* New Image inside the card */}
              <Image
                src="/hero/hero2.jpg" // replace with your desired image
                alt="Coffee beans"
                fill
                className="absolute inset-0 object-cover rounded-[2.5rem] z-0"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-[2.5rem] z-5" />

              <div className="relative z-10">
                <p className="text-3xl font-black leading-none mb-1">FAST</p>
                <p className="text-sm font-medium opacity-90 leading-tight">Roast-to-Cup <br />in 24 Hours</p>
              </div>
            </div>

            {/* Orange Info Card */}
            <div className="bg-orange-100 p-8 rounded-[2.5rem] text-orange-600 flex flex-col justify-between aspect-square rotate-2 hover:rotate-0 transition-all duration-500 border-2 border-orange-200 shadow-lg relative overflow-hidden">
              <Sun className="w-12 h-12 mb-4 z-10" />

              {/* New Image inside the card */}
              <Image
                src="/hero/hero3.jpg" // replace with your desired image
                alt="Happy coffee cup"
                fill
                className="absolute inset-0 object-cover rounded-[2.5rem] z-0"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-[2.5rem] z-5" />

              <div className="relative z-10">
                <p className="text-3xl font-black text-slate-900 leading-none mb-1">JOY</p>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Karachi Soul</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}