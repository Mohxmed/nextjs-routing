import { boxStyles, buttonStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'

function Reset() {
  return (
    <>
    <p>الرئيسية / تسجيل الدخول /<span className='text-pink-500'>نسيت كلمة المرور</span></p>
    <h1 className="text-6xl mb-10">استعادة كلمة المرور</h1>
    <div className={boxStyles.placeholder}>صفحة نموذج لإستعادة كلمة المرور</div>
     <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>
    </>
    
  )
}

export default Reset