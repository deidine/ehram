import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center  gap-4 min-h-screen bg-gray-100">
      
      <div className="mb-8">
          <Image src="/logo2.jpg" width={400} height={100} alt="Logo" />
        </div>
        <h1 className="text-4xl text-center text-wrap font-bold text-green-700 mb-8">
        أهلا بكم في موقع نادي شباب أشرم1 للبناء
      </h1>
      <div className="space-x-4">
        <Link href="/register" className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
           
            تسجيل انتساب
       
        </Link>
        <Link href="/login" className="text-lg text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg">
      
            تسجيل دخول
       
        </Link>
      </div>
    </div>
  );
}
