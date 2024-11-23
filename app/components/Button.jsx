import React from 'react'

export default function Button({buttonStyle, actionText, buttonType, buttonIcon}) {
  return (
   <button
   type={buttonType||'submit'}
   className={buttonStyle||'border border-black w-full flex gap-3 items-center bg-black text-white rounded-lg py-4'}
   >
      {buttonIcon&&buttonIcon}{actionText||"change me"}
   </button>
  )
}
