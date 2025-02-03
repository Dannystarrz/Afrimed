import React from 'react'

export default function TestimonialCard({style}) {
  return (
    <div className={style}>
      <p className='text-[#6B6666] font-normal md:text-base text-sm'>
         "AI Medic has transformed the way I interact with patients. The chatbot's ability to guide patients through symptom assessment is impressive. It helps bridge the gap between appointments, enabling continuous and proactive patient engagement. An excellent addition to modern healthcare practices."
      </p>
      <div className='flex flex-col md:gap-2 gap-1'>
         <p className='text-[#5D34F3] font-bold md:text-lg text-md'>Dr. Michael Alex</p>
         <p className='text-[#6B6666] font-normal md:text-sm text-xs'>Heart Surgeon</p>
      </div>
    </div>
  )
}
