"use client"
import React, { useState } from 'react'
import { SignInFlow } from '../types'
import SignInCard from './sign-in-card'
import SignUpCard from './sign-up-card'
import Image from 'next/image'

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn")

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">

      {/* ویدیو بک‌گراند */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* لوگوی بالا سمت چپ */}
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="https://romaktrading.com/wp-content/uploads/2021/07/romak-logo-1.png"
          alt="Romak Logo"
          width={120}
          height={40}
          priority
        />
      </div>

      {/* محتوای فرم */}
      <div className="relative z-10 w-full md:w-[420px] px-4">
        {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
      </div>
    </div>
  )
}

export default AuthScreen
