"use client"

import type React from "react"
import { useState } from "react"
import { Coffee, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simulate success
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="newsletter" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-100 rounded-full blur-[100px] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-[20px_20px_0px_0px_rgba(20,184,166,0.3)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8 w-fit">
                <Sparkles className="w-3 h-3" />
                Limited Availability
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.85] tracking-tighter mb-8">
                GET ON <br />
                THE <span className="text-teal-400 italic">LIST.</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Be the first to experience GATO. Early subscribers get exclusive first-access to our Q1 2026 limited micro-lots.
              </p>
            </div>

            {/* RIGHT: INTERACTIVE FORM */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white/5 relative">
              {status === "success" ? (
                <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic">You're In!</h3>
                  <p className="text-slate-400">Welcome to the inner circle. We'll reach out when the beans are ready.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-teal-500">
                      Newsletter Signup
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-2xl py-5 px-6 text-white outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all placeholder:text-slate-500 font-bold"
                        required
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                        <Coffee className="w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-teal-500 text-slate-900 font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-xl shadow-teal-500/10 active:scale-[0.98]"
                  >
                    Join the Waiting List
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-center">
                    No spam. Just pure caffeine joy.
                  </p>
                </form>
              )}
            </div>

          </div>

          {/* Bottom Branding Ticker */}
          <div className="bg-teal-500 py-3 flex overflow-hidden whitespace-nowrap border-t border-slate-800">
            <div className="flex animate-marquee-slow gap-8 items-center text-slate-900 font-black text-[10px] uppercase tracking-[0.4em]">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="flex gap-8 items-center">
                  <span>Karachi Roastery 2026</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Stay Playful</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Stay Professional</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 30s linear infinite;
        }
      `}</style>
    </section>
  )
}