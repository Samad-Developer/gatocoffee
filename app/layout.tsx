import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
import { Playfair_Display, Inter } from "next/font/google"
import { ModalProvider } from "@/providers/ModalContext"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "GATO | Crafted Coffee for Thoughtful Mornings",
  description: "Premium artisanal coffee roasted with care for your daily ritual.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ModalProvider>
          {children}
          <Toaster />
          <Analytics />
        </ModalProvider>
      </body>
    </html>
  )
}
