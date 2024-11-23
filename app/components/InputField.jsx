import React from 'react'

export default function InputField({labelText, inputStyle, onchangeFunction}) {
  return (
    <div className='w-[24.5625rem] rounded-lg border border-[#1B1D21] opacity-30 bg-[#F3F2F2] relative'>
      <input
      className={inputStyle||'w-full py-4 pl-4 rounded-lg text-black'}
      onChange={onchangeFunction}
      />
      <p className='bg-white px-1 rounded text-[#1B1D21] font-normal text-sm absolute -top-3 left-4'>{labelText||'label'}</p>
    </div>
  )
}
