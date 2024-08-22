"use client";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";

export default function UserProfile() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch or retrieve user data from localStorage
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData[0]); // Access the first item in the array
    }
  }, []);

  const downloadPDF = () => {
    const input = document.getElementById("user-profile");
    html2canvas(input!).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 100, 100, "image", "NONE");
      pdf.save("شباب_اشرم.pdf");
    });
  };

  if (!userData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      {userData.nom == "MalekAdmin" && userData.phone == "48659742" &&
      
      <Link href="admin/all" className="text-lg text-white bg-red-500 hover:bg-green-600 px-6 py-2 rounded-lg">
   admin site
      </Link>
      }<div
        id="user-profile"
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >

        <h1 className="text-3xl font-bold text-center mb-6">الملف الشخصي</h1>
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-green-700">الاسم:</span><br />
            <span className="ml-2 text-green-700">{userData.nom}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">اللقب:</span><br />
            <span className="ml-2 text-green-700">{userData.prenom}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">رقم الهوية:</span><br />
            <span className="ml-2 text-green-700">{userData.nni}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">رقم الهاتف:</span><br />
            <span className="ml-2 text-green-700">{userData.phone}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">البريد الإلكتروني:</span><br />
            <span className="ml-2 text-green-700">{userData.email}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">تاريخ التسجيل:</span><br />
            <span className="ml-2 text-green-700">
              {new Date(userData.created_at).toLocaleDateString("ar-EG")}
            </span>
          </div>
        </div>
      </div>
     <div>
     <button
        onClick={downloadPDF}
        className="mt-8 bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        تحميل كملف PDF
      </button>
     </div>
    </div>
  );
}
