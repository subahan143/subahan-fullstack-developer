import React from 'react'

const Header = () => {
  return (
  <>
  <div className='w-full h-20 flex '>
   <div className='w-[35%] h-20 flex items-center justify-center text-7xl border-b-[5px] border-orange-400 font-black from-neutral-300 cursor-pointer '> subahan</div>
   <div  className='w-[65%]  flex items-center justify-center gap-[80px] text-2xl font-black'> <a  href='#about' className='hover:border-b-[5px] hover:border-red-600  text-red-500  hover:text-blue-600 cursor-pointer border-b-[5px] border-blue-800 '>About</a>
    <a href='#Experience' className='hover:cursor-pointer hover:border-red-500 hover:text-blue-800 '>Experience</a>
    <a href='#Projects' className='hover:text-blue-700 cursor-pointer'>Projects</a>
    <a href='#Contact' className='hover:text-blue-700 cursor-pointer'> Contact</a>
  </div>
  </div>

  
  </>
  )
}

export default Header
