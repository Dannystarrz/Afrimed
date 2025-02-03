'use client'
import React, { useState } from 'react'
import Hamburger from './Hamburger'
import MobileNavCard from './MobileNavCard'
import Image from 'next/image'
import Close from './Close'

export default function MobileNav() {

  const [showNav, setShowNav] = useState(false)
  function flip(){
    console.log('working')
    setShowNav(!showNav)
  }

  return (
    <div className="w-full px-6 py-4 flex justify-between items-center md:hidden relative">
      <Image
        src={"/AfrimedLogo.svg"}
        alt="Afrimed logo"
        height={32}
        width={99}
      />
      {!showNav?<Hamburger setState={flip} />:<Close setState={flip}/> }
      {showNav && <MobileNavCard />}
    </div>
  );
}
