import Link from 'next/link';
import React from 'react';

import Image from "next/image"; 

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center  w-full h-screen bg-gray-100">
      <div className="text-center px-8 py-4 bg-white shadow-md rounded-md">
        <Image src="/info.jpg" alt="Logo" width={500} height={200} />
        <h1 className="text-4xl text-green-700 font-bold mb-4">
          الموقع قيد البناء
        </h1>
        <p className="text-lg text-green-700">
          نشكر صبركم ونتمنى أن نلبي تطلعاتكم في موقع شباب أشرم1 للبناء.
        </p>
      </div>
      <Link href="./home/profile" className="text-lg text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg">
    الملف الشخصي
      </Link>
     
    </div>
  );
}
