"use client"
import { ArrowRight } from "lucide-react"
import { useGatoModal } from "@/providers/ModalContext"

export function HeroOrderButton() {
  const { openModal } = useGatoModal()

  return (
    <button
      onClick={() => openModal("Orders Coming Soon", "We're not accepting orders just yet. Our roastery is in its final stages.")}
      className="w-full sm:w-auto px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-orange-200 active:scale-95"
    >
      Order Now
      <ArrowRight className="w-5 h-5" />
    </button>
  )
}