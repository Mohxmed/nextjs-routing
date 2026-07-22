import React from 'react'
import Link from 'next/link'
import { boxStyles, buttonStyles } from '@/lib/styles'

function Login() {
  return (
   <>
       <h1 className="text-6xl mb-10">الرئيسية/تسجيل الدخول</h1>
    <div className={boxStyles.placeholder}>هنا، سيتم وضح صفحة إدخال البيانات لإستكمال عملية تسجيل الدخول</div>
    <Link className='text-blue-700 underline mb-10' href='login/reset-password'>نسيت كلمة المرور؟</Link>
    <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>
   </>
  )
}

export default Login