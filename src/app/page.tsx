import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        أهلا بكم في موقع شباب أشرم
      </h1>
      <div className="space-x-4">
        <Link href="/register" className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
           
            تسجيل حساب
       
        </Link>
        <Link href="/login" className="text-lg text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg">
      
            تسجيل دخول
       
        </Link>
      </div>
    </div>
  );
}
