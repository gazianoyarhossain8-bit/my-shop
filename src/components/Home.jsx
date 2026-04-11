import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500
     to-red-500 h-screen flex flex-col items-center
      justify-center text-white
      animate-pulse rounded-2xl
      '>
      <h1 className='text-5xl font-bold mb-4 block mx-auto'>Welcome to My Shop</h1>
      <p className='text-xl mb-8'>This is a simple homepage built with React and Tailwind CSS.</p>
        <img src='/shop.png'
        alt='empty'
        className='rounded-full h-52 w-52 mx-auto'
        />
        <button
          onClick={() => navigate('/products')}
          className='mt-8 px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg 
          shadow-md hover:bg-gray-100 transition duration-300'>View Products</button>
  


    </div>
  )
}

export default Home