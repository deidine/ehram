import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

<div><h1>
  أهلا بكم في موقع شباب اشرم</h1>
  <Link href="/register">تسجيل حساب</Link>
  <Link href="/login">تسجيل دخول</Link>
</div>
  );
}
