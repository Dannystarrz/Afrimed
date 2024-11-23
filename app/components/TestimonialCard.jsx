import React from 'react'

export default function TestimonialCard({style}) {
  return (
    <div className={style}>
      <p className='text-[#6B6666] font-normal text-base'>
         "AI Medic has transformed the way I interact with patients. The chatbot's ability to guide patients through symptom assessment is impressive. It helps bridge the gap between appointments, enabling continuous and proactive patient engagement. An excellent addition to modern healthcare practices."
      </p>
      <div className='flex flex-col gap-2'>
         <p className='text-[#5D34F3] font-bold text-lg'>Dr. Michael Alex</p>
         <p className='text-[#6B6666] font-normal text-sm'>Heart Surgeon</p>
      </div>
    </div>
  )
}
