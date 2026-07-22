import { boxStyles, buttonStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'

function Blog() {
  return (
    <>
    <h1 className="text-6xl mb-10">الرئيسية/المدونة</h1>
    <div className={boxStyles.placeholder}>
        <ul>
            <li><Link href={"/blog/1"}>تدوينة 1</Link></li>
            <li><Link href={"/blog/2"}>تدوينة 2</Link></li>
            <li><Link href={"/blog/3"}>تدوينة 3</Link></li>
        </ul>
    </div>
     <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>
    </>
    
  )
}

export default Blog