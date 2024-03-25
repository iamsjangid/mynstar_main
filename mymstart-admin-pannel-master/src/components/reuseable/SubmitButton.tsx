import React from 'react'
import { ImSpinner } from 'react-icons/im'

type Button = {
    className?:string | undefined,
    title:string ,
    loading?:boolean | undefined,
    full?:boolean
}

const SubmitButton = ({ className,title,loading=false,full=true }: Button) => {
  return (
    <>
      <button type="submit" disabled={loading} className={`flex ${full ?'w-full':''} justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90  inline-flex ${className}`}>
             {title} {!loading ?  '' : <ImSpinner className='animate-spin text-2xl text-white transition-all duration-300' />}
          </button>
    </>
  )
}

export default SubmitButton