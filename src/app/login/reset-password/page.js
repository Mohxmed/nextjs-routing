import { boxStyles, buttonStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'

function Reset() {
  return (
    <>
    <h1 className="text-6xl mb-10">تسجيل الدخول/استعادة كلمة المرور</h1>
    <div className={boxStyles.placeholder}>صفحة نموذج لإستعادة كلمة المرور</div>
     <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>
    </>
    
  )
}

export default Reset