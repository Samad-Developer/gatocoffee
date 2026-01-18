import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/product-preview"
import { BrandManifesto } from "@/components/BrandManifesto"
import { MenuPreview } from "@/components/MenuPreview"
import { Gallery } from "@/components/Gallery"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9]">
      {/* 1. NAVIGATION */}
      <Navbar />

      {/* 2. THE HOOK: Introduction & Immediate Value */}
      <Hero />
      
      {/* 3. THE PROOF: Brand Identity & Craftsmanship */}
      {/* AboutUs is usually the "Who we are", BrandManifesto is "Why we do it" */}
      <AboutUs />
      <BrandManifesto />

      {/* 4. THE EXPERIENCE: Seeing and Browsing */}
      <MenuPreview />
      <Gallery />

      {/* 5. THE CONVERSION: Getting in touch & Joining the list */}
      {/* <ContactUs /> */}
      <Newsletter />

      {/* 6. FOOTER */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
}