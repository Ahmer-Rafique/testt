import React from 'react'

const Nav = () => {
  return (
   <div className='py-3 flex justify-between gap-8 bg-pink-300'>
    <div className='px-5 whitespace-pre text-xl'>
      Ahmer Ali
    </div>
    <div className='flex justify-center  items-center w-full'>
    <ul className='flex space-x-20 font-medium text-xl text-blue-800'>
      <li >Home</li>
      <li>About</li>
      <li >Contact</li>
    </ul>
    </div>
   </div>
  )
}

export default Nav