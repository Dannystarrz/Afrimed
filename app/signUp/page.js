'use client'
''
import React from 'react'
import Form from '../components/Form'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { appleLogo, facebookLogo, googleLogo } from '../icons'
import { useRouter } from 'next/navigation'

export default function page() {

   const navigate = useRouter()

  return (
    <div className='w-full h-screen bg-[url("/onboardingBg.svg")] bg-cover bg-no-repeat flex items-center justify-center overflow-y-auto py-10'>

      <Form formStyle={'bg-white border border-[#F1F1F1] rounded-lg mt-[34rem] px-10 py-8 w-fit flex flex-col gap-4 items-center'}
      formHeader={'Create Account'}
      formSubHeading={'Sign Up for your Afrimed account'}
      formLogo={"/AfrimedLogo.svg"}
      formLogoAlt={"Afrimed logo"}
      >
         
         <div className='flex flex-col gap-5 mb-6'>
            <InputField labelText={'Full Name'}/>
            <InputField labelText={'Email'}/>
            <InputField labelText={'Password'}/>
            <InputField labelText={'Confirm Password'}/>
            <div className='flex items-center gap-5'>
               <input className='w-6 h-6' type='checkbox'/>
               <p className='text-[#3D3A3A] font-medium hover:cursor-pointer'>Agree to the <span className='text-[#5D34F3]'>Terms</span> and <span className='text-[#5D34F3]'>Condition</span></p>
            </div>
         </div>
         <Button 
         buttonStyle={'bg-[#5D34F3] text-white w-full rounded-lg py-4 text-sm font-medium'}
         actionText={'Sign Up as a Patient'}
         />
         <Button 
         buttonStyle={'border border-[#5D34F3] text-[#5D34F3] w-full rounded-lg py-4 text-sm font-medium'}
         actionText={'Sign Up as a Doctor'}
         />

         <p className='text-[#3D3A3A] font-medium my-2 hover:cursor-pointer'
         onClick={()=>navigate.push('/login')}
         >Already have an account? <span className='text-[#5D34F3]'>Login</span></p>

         <div className='relative w-[90%] border-b my-10'>
            <p className='absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2'>Or continue with</p>
         </div>
         <div className='flex flex-col gap-4 w-full items-center'>
            <Button 
            buttonStyle={'border border-[#D9D9D9] text-[#3D3A3A] flex gap-3 items-center justify-center w-[60%] rounded-lg h-12 text-sm font-medium'}
            buttonIcon={googleLogo}
            actionText={'Google'}
            />
            <Button 
            buttonStyle={'border border-[#D9D9D9] text-[#3D3A3A] flex gap-3 items-center justify-center w-[60%] rounded-lg h-12 text-sm font-medium'}
            buttonIcon={facebookLogo}
            actionText={'Google'}
            />
            <Button 
            buttonStyle={'border border-[#D9D9D9] text-[#3D3A3A] flex gap-3 items-center justify-center w-[60%] rounded-lg h-12 text-sm font-medium'}
            buttonIcon={appleLogo}
            actionText={'Google'}
            />
         </div>
         
         

      </Form>

    </div>
  )
}
