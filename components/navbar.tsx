"use client"

import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useGatoModal } from "@/providers/ModalContext"
import { useState } from "react"

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Why Gato", id: "why-gato" },
  { name: "Menu", id: "menu" },
  { name: "Gallery", id: "gallery" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useGatoModal();

  // 1. Centralized Scroll Logic for Mobile
  const handleMobileClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu

    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex w-20 h-20 rounded-full items-center justify-center overflow-hidden">
              <Image src="/gato.jpg" alt="Gato Logo" width={64} height={64} className="object-cover rounded-full" />
            </div>
            {/* <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">
              GATO<span className="text-teal-500">.</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
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
            {/* <button
              onClick={() => openModal("Orders Coming Soon", "We're not accepting orders just yet. Our roastery is in its final stages.")}
              className="flex px-4 py-3 cursor-pointer bg-[#B96D4B] text-white rounded-[12px] font-bold items-center justify-center gap-3 hover:bg-[#a05e3f] transition-all duration-300 active:scale-95"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </button> */}

            {/* Balanced Mobile Menu Button (Perfect Circle) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-50 text-black rounded-full transition-all active:scale-90 relative z-[110]"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <X className={`absolute w-6 h-6 transition-all duration-300 ${menuOpen ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 rotate-90"}`} />
                <Menu className={`absolute w-6 h-6 transition-all duration-300 ${menuOpen ? "scale-50 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-slate-900 transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleMobileClick(e, link.id)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-4xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-all block ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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