import React from 'react'

function Home() {
  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500
     to-red-500 h-screen flex flex-col items-center
      justify-center text-white
      animate-pulse rounded-2xl
      '>
      <h1 className='text-5xl font-bold mb-4 block mx-auto'>Welcome to My Website</h1>
      <p className='text-xl mb-8'>This is a simple homepage built with React and Tailwind CSS.</p>
        <img src='/anoyar.jpg'
        alt='empty'
        className='rounded-full h-52 w-52 mx-auto'
        />
  


    </div>
  )
}

export default Home