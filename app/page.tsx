import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery--section"
import PartnershipsSection from "@/components/partnerships-section"
import RegistrationForm from "@/components/registration-form"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20">
         <HeroSection />
      </div>

      <AboutSection />
      <GallerySection />
      <PartnershipsSection />
      
      <div className="py-20 bg-gray-50">
        <RegistrationForm />
      </div>
    </main> 
  )
}
