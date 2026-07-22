import { buttonStyles,boxStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
    <p>الرئيسية / <span className='text-pink-500'>التوثيق</span></p>
    <h1 className="text-6xl mb-10">ماهذا</h1>
    <div className={boxStyles.placeholder}>تم انشاء هذه الصفحة بإستخدام نكست، وهذه المسارات تم انشاءها تلقائياً بـ App Router ولكنها في الحقيقة مجلدات داخل مجلد (App) الرئيسي</div>
    <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>

    </>
  )
}

export default About