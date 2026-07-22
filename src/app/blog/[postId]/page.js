import React from 'react'

export default async function Post({params}) {
    const postId = (await params).postId
  return (
    <div>Post {postId}</div>
  )
}

