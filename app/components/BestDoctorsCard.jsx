import React from 'react'
import Image from 'next/image'
import { star } from '../icons'

export default function BestDoctorsCard({imageSource}) {
  return (
    <div className='p-6 hover:bg-[#F6F4FF] bg-[#FAFAFE] shadow-sm flex gap-4 flex-col items-center'>

      <Image src={imageSource} alt='best doctors' height={211} width={170} className='' />

      <div className='flex items-center w-full justify-between'>
         <div className='flex flex-col md:gap-3 gap-1'>
            <p className='text-sm font-medium text-[#020202]'>Dr.  Victor Testimony</p>
            <button className='text-xs bg-[#5D34F3] text-white rounded-lg px-3 w-fit py-1 font-normal'>Radiologist</button>
         </div>
         <div className='flex items-center gap-1'>
            {star}
            <p className='text-[#4E4E4E] font-normal text-xs'>4.8 (150)</p>
         </div>
      </div>
      <div className='flex md:gap-16 max-md:justify-between max-md:w-full'>
         <p className='font-normal text-xs text-[#4E4E4E] text-nowrap'>
            At Louis hospital, Ikeja
         </p>
         <p className='font-normal text-xs text-[#4E4E4E] text-nowrap'>
            +200 Patients
         </p>
      </div>

    </div>
  )
}
