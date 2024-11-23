'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Form({children, formStyle, submitFunction, formHeader, formSubHeading, formLogo, formLogoSrc, formLogoAlt, formLogoHeight, formLogoWeight}) {

   const navigate = useRouter()

  return (
    <form
    className={formStyle}
    onSubmit={submitFunction}
    >
         {formLogo && (<Image
               src={formLogoSrc||"/AfrimedLogo.svg"}
               alt={formLogoAlt||"logo"}
               height={formLogoHeight||32}
               width={formLogoWeight||99}
               onClick={()=>navigate.push('/')}
               />)}
      <div className='flex flex-col items-center mb-6'>
         <p className='text-2xl font-medium text-[#272728]'>{formHeader||'header here'}</p>
         <p className='font-normal text-base text-[#575758]'>{formSubHeading||'sub-heading here'}</p>
      </div>
      {children}
      
    </form>
  )
}
