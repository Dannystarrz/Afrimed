'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function MobileNavCard() {

   const navigate = useRouter()

  return (
    <div className='max-md:flex flex-col gap-4 hidden w-fit py-6 pl-8 pr-14 rounded shadow-md absolute right-0 bg-white translate-y-[60%] border'>
          <p className="text-[#15226C] md:text-base text-sm font-bold hover:cursor-pointer">
            Home
          </p>
          <p className="md:text-base text-sm font-normal hover:text-[#15226C] hover:font-bold hover:cursor-pointer">
            Features
          </p>
          <p className="md:text-base text-sm font-normal hover:text-[#15226C] hover:font-bold hover:cursor-pointer">
            Ai-Chat
          </p>
          <p className="md:text-base text-sm font-normal hover:text-[#15226C] hover:font-bold hover:cursor-pointer">
            Testimonials
          </p>
        
        <div className="flex flex-col gap-2 items-center w-full">
          <button className="bg-none rounded-xl hover:bg-[#E8E2FD] hover:rounded-xl w-full px-5 py-2 md:text-base text-sm font-medium text-[#5D34F3] border border-[#5D34F3]"
          onClick={()=>{navigate.push('/login')}}
          >
            Login
          </button>
          <button className="rounded-xl px-5 py-2 bg-[#5D34F3] hover:bg-[#3A0DDE] w-full md:text-base text-sm font-medium text-[#F6F6F6]"
          onClick={()=>{navigate.push('/signUp')}}
          >
            Sign up
          </button>
        </div>
    </div>
  )
}
