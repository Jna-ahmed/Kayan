import React from 'react'
import { ArrowLeft } from "lucide-react"

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-green-500"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.postimg.cc/VvyzVrhK/image-5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-50 text-center text-white px-4">
        <h1 className="text-5xl font-black mb-4">اختبار ظهور القسم</h1>
        <p className="text-xl mb-8">لو شايفة لون أخضر، يبقى اللينك بتاع الصورة هو اللي فيه مشكلة</p>
        
        <div className="flex gap-4 justify-center">
          <div className="bg-[#C5A059] p-4 text-black font-bold rounded">زرار تجريبي</div>
        </div>
      </div>
    </section>
  )
}
