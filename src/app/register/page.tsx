 
import SigninForm from '@/components/authComponent/SigninForm'
import React from 'react'

export default function page() {
  return (
    <div className="flex pb-4  flex-row items-center justify-center w-1/2 mx-auto relative">
    <div className="h-full w-full bg-white relative overflow-hidden rounded-lg shadow-lg">
 
          <SigninForm />

    </div>
</div> 
  )
}
