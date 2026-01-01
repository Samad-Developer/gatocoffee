"use client"

import React, { createContext, useContext, useState } from "react"
import { Coffee, X } from "lucide-react"

type ModalContextType = {
  openModal: (title?: string, message?: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState({ title: "", message: "" })

  const openModal = (title = "Coming Soon", message = "We're almost ready! Stay tuned for our official launch.") => {
    setContent({ title, message })
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {/* GLOBAL REUSABLE MODAL UI */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          />
          
          {/* Modal Card */}
          <div className="w-full max-w-[320px] md:max-w-sm bg-white border-[4px] border-slate-900 p-8 rounded-[2rem] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] animate-pop-in relative z-[110]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-900" />
            </button>

            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6 text-orange-600" />
            </div>

            <h3 className="font-black text-2xl text-slate-900 mb-2 uppercase leading-tight">
              {content.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {content.message}
            </p>

            <button
              onClick={closeModal}
              className="w-full py-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 transition-colors uppercase text-xs tracking-widest"
            >
              Got It
            </button>
          </div>

          <style jsx>{`
            @keyframes pop-in {
              0% { transform: scale(0.8) translateY(20px); opacity: 0; }
              100% { transform: scale(1) translateY(0); opacity: 1; }
            }
            .animate-pop-in {
              animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
          `}</style>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export const useGatoModal = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error("useGatoModal must be used within a ModalProvider")
  return context
}