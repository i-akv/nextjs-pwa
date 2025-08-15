"use client"
import React from 'react'

const IndexPage = () => {
  return (
    <div className='flex flex-col w-[90%] mx-auto gap-2 py-3'>
      <a href="/share" className='p-3 border-2 rounded-lg'>Share API</a>
      <a href="/install" className='p-3 border-2 rounded-lg'>Install as App</a>
      <a href="/install-ios" className='p-3 border-2 rounded-lg'>Install as App (iOS)</a>
      <a href="/notifications" className='p-3 border-2 rounded-lg'>Notifications</a>
    </div>
  )
}

export default IndexPage