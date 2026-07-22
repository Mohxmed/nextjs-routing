import { buttonStyles } from "@/lib/styles";
import Style from "./ui/home.module.css"

export default function Home() {
  return (
    <>
    <h1 className="text-6xl mb-10">مرحباً بالعالم،</h1>
    <div className="flex gap-2">
    <a className={buttonStyles.secondary} href="/about">ما هذا؟</a>
    <a className={buttonStyles.primary} href="/login">تسجيل الدخول</a>
    <a className={buttonStyles.primary} href="/register">انشاء حساب</a>
    <a className={buttonStyles.primary} href="/blog">المدونة</a>
    </div>
    <div className={`${Style.shape} mt-10 mb-2`}/>
    <p className="text-xs text-center">بواسطة : محمد عمرو <br/> 2026</p>
    </>
  );
}
