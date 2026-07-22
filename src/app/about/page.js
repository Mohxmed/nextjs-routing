import { buttonStyles,boxStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
    <h1 className="text-6xl mb-10">الرئيسية/ماهذا </h1>
    <div className={boxStyles.placeholder}>تم انشاء هذه الصفحة بإستخدام نكست، وهذه المسارات تم انشاءها تلقائياً بـ App Router ولكنها في الحقيقة مجلدات داخل مجلد (App) الرئيسي</div>
    <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>

    </>
  )
}

export default About