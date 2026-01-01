import Image from "next/image"
import { Instagram, Sparkles } from "lucide-react"

const GALLERY_IMAGES = [
  {
    url: "/gallery/gato1.jpg",
    size: "col-span-2 row-span-2",
    label: "The Pour",
  },
  {
    url: "/gallery/gato2.jpg",
    size: "col-span-1 row-span-1",
    label: "Fresh Beans",
  },
  {
    url: "/gallery/gato3.jpg",
    size: "col-span-1 row-span-2",
    label: "Morning Ritual",
  },
  {
    url: "/gallery/gato4.jpg",
    size: "col-span-1 row-span-1",
    label: "Karachi Vibe",
  },
  {
    url: "/gallery/gato5.jpg",
    size: "col-span-2 row-span-1",
    label: "The Lab",
  },
];


export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Vibe Check
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase leading-none">
            Captured <span className="text-teal-500 italic font-serif lowercase">at</span> Gato
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium">
            A glimpse into the craftsmanship, the energy, and the colorful coffee culture we're building in Karachi.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`${img.size} relative group overflow-hidden rounded-[2rem] border-4 border-transparent hover:border-slate-900 transition-all duration-500 cursor-pointer`}
            >
              <Image
                src={img.url}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
              />
              
              {/* Overlay Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-black uppercase tracking-tighter text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.label}
                </p>
                <div className="w-8 h-1 bg-orange-500 mt-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Follow the journey</p>
          <a 
            href="https://www.instagram.com/gato.khi/" 
            target="_blank"
            className="group flex items-center gap-4 px-10 py-5 bg-slate-50 rounded-full border-2 border-slate-100 hover:border-orange-500 hover:bg-white transition-all duration-300"
          >
            <Instagram className="w-6 h-6 text-slate-900 group-hover:text-orange-500" />
            <span className="font-black text-slate-900 uppercase tracking-tighter">@gato.khi</span>
          </a>
        </div>

      </div>
    </section>
  )
}