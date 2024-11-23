import React from 'react';
import Image from 'next/image';

export default function KeyBenefits({svgSource, altText, header, description}) {
  return (
   <div className="rounded-lg group shadow-md hover:bg-[#5D34F3] py-10 px-5 w-1/4 h-[262px] flex flex-col gap-4">
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
