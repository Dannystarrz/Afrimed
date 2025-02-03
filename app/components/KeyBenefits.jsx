import React from 'react';
import Image from 'next/image';

export default function KeyBenefits({svgSource, altText, header, description}) {
  return (
   <div className="rounded-lg group shadow-md hover:bg-[#5D34F3] md:py-10 py-5
    px-5 md:w-1/4 w-full md:h-[262px] h-[220px] flex flex-col md:gap-4 gap-2 justify-center">
   <Image
     src={svgSource}
     alt={altText}
     width={46}
     height={46}
     className="w-[46px] h-[46px]"
   />

   <h3 className="font-semibold text-base group-hover:text-[#FBF3F3] text-[#020202]]">
     {header}
   </h3>
   <p className="text-sm group-hover:text-[#EAE5E5] text-[#6B6666]">
     {description}
   </p>
 </div>
  )
}
