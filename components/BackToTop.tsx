"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button
        onClick={scrollToTop}
        className={`
          group flex items-center justify-center w-14 h-14 
          bg-teal-500 text-slate-900 rounded-2xl 
          border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]
          transition-all duration-500 hover:-translate-y-1 active:scale-95
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"}
        `}
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </div>
  )
}