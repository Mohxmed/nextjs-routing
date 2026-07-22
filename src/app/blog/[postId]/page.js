import React from 'react'
import Link from 'next/link';
import { posts } from '@/data/posts';
import { buttonStyles } from '@/lib/styles';
import { notFound } from 'next/navigation';

export default async function Post({params}) {
    // Finding Post by ID From Mock Data
    const {postId} = await params;
    const post = posts.find((p)=> p.id === postId);
    // If post is not found navigate to 404
    if(!post) {
        notFound();
    }

  return (
    <div className='flex justify-center items-center w-260'>
    <div className='flex flex-col gap-5'>
        <p>الرئيسية / المدونة / <span className='text-pink-500'>{post.title}</span></p>
        <h1 className='text-4xl font-black'>{post.title}</h1>
        <div className='flex gap-2 w-full'>
        <span className='text-sm text-blue-600'>{post.author}</span>
        <p>{post.date}</p>
        <span>-</span>
        <p className='bg-blue-600 px-2 rounded-full text-white'>{post.category}</p>
        </div>
        <article className='text-xl'>{post.content}</article>
        <Link className={`${buttonStyles.primary} w-64 text-center`} href='/blog'>العودة للمدونة </Link>
    </div>
    </div>
  )
}

