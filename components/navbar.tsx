"use client"

import { ShoppingBag, Menu, X, Coffee, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useGatoModal } from "@/providers/ModalContext"
import { useState } from "react"

const navLinks = [
  { name: "Home", id: "Home" },
  { name: "About Us", id: "about" },
  { name: "Why Gato", id: "why-gato" },
  { name: "Menu", id: "menu" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact Us", id: "contact" },
];


export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useGatoModal();
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">
              GATO<span className="text-teal-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation - All in one line */}
          <div className="hidden lg:flex items-center gap-8 ml-auto mr-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`#${link.id}`}
                className="text-[13px] font-bold uppercase tracking-widest text-slate-600 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
             <button
              onClick={() => openModal("Orders Coming Soon", "We're not accepting orders just yet. Our roastery is in its final stages.")}
              className="w-full sm:w-auto px-5 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-orange-500 transition-all duration-300 active:scale-95"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-14 h-12 flex items-center justify-center bg-slate-900 text-white rounded-[12px]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-slate-900 transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={`#${link.name.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault(); // Stop the default jump-to-id behavior
                setMenuOpen(false); // Close mobile menu

              }}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-4xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-all block ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              {link.name}
            </Link>
          ))}


        </div>
      </div>
    </>
  )
}