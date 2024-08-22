import React from "react";
import SignupForm from "@/components/authComponent/SignupForm";

export default function page() {
  return (
    <div className="  pb-4   h-[100%]  w-full   ">
      <div className=" h-[99vh] w-full bg-white     rounded-lg shadow-lg">
        <SignupForm />
      </div>
    </div>
  );
}
