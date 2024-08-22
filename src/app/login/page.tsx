import React from 'react' 
import SignupForm from '@/components/authComponent/SignupForm';

export default function page() {
    return (
        <div className="flex pb-4  flex-row items-center justify-center h-[91vh] w-full relative">
        <div className="h-full w-full bg-white relative overflow-hidden rounded-lg shadow-lg">
     
            <SignupForm />
        </div>
</div> 
      );
}
