import { buttonStyles, boxStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <>
    <p>الرئيسية / <span className='text-pink-500'>التسجيل</span></p>
    <h1 className="text-6xl mb-10">انشاء حساب</h1>
    <div className={boxStyles.placeholder}>هنا سيتم وضع نموذج إنشاء حساب والتواصل مع السيرفر وقاعدة البيانات</div>
    <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>
    </>
  )
}

export default Register