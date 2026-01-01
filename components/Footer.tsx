import Link from "next/link"
import { Instagram, Twitter, ArrowUp, Mail, MapPin, Coffee } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white relative overflow-hidden">
      {/* Background Brand Mark */}
      <div className="absolute -bottom-24 -right-24 text-[20rem] font-black text-white/[0.03] select-none pointer-events-none uppercase italic">
        Gato
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black uppercase tracking-tighter">Gato.</span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed">
              Redefining specialty coffee in Karachi through precision roasting and playful culture. Join the grin.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-teal-500 mb-8">Navigation</h4>
            <ul className="space-y-4 font-bold uppercase tracking-tighter text-lg">
              <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#menu" className="text-slate-400 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="#why-gato" className="text-slate-400 hover:text-white transition-colors">The Experience</Link></li>
              <li><Link href="#gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#newsletter" className="text-slate-400 hover:text-white transition-colors">Waitlist</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-8">Locate Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-slate-300 font-medium">Tahami Commercial, 36c Zulfiqar Street No. 3, D.H.A. Phase 8 Zulfiqar & Al Murtaza Commercial Area Phase 8 Defence Housing Authority, Karachi, 75500</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-slate-300 font-medium">brew@gatocoffee.com</span>
              </li>
            </ul>
          </div>

      
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Gato Coffee Karachi. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}