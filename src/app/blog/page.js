import { boxStyles, buttonStyles } from '@/lib/styles'
import Link from 'next/link'
import React from 'react'
import { posts } from '@/data/posts'

function Blog() {
  return (
    <>
    <p>الرئيسية / <span className='text-pink-500'>المدونة</span></p>
    <h1 className="text-6xl mb-10">المدونة</h1>
    <div className={boxStyles.placeholder}>
        <ul>
        {posts.map((post)=>(
        <li key={post.id} className='text-lg underline text-blue-700 hover:text-blue-950'>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
            
        ))}
        </ul>
    </div>
     <Link className={buttonStyles.primary} href='/'>العودة للصفحة الرئيسية</Link>
    </>
    
  )
}

export default Blog