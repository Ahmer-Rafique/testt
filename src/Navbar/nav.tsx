"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Nav = () => {
  const [isNavOpen,setNav]=useState<boolean>(false);
  return (
   <div className='py-3 flex justify-between gap-8 bg-pink-300'>
    <div className='px-5 whitespace-pre text-red-700 text-xl'>
      Ahmer Ali
    </div>
    <div className=' hidden lg:flex justify-center  items-center w-full'>
    <ul className='flex space-x-20 font-medium cursor-pointer text-xl text-blue-800'>
      <li >Home</li>
      <li>About</li>
      <li >Contact</li>
    </ul>
    </div>
    <div className="cursor-pointer" onClick={() => setNav(!isNavOpen)}>
                        {isNavOpen ?
                            <div className="flex lg:hidden">
                                <IoMdClose color="red" size={29} />
                            </div>
                            :
                            <div className="flex lg:hidden ">
                                <RxHamburgerMenu size={25}  />
                            </div>
                        }
                    </div>
                    {
                    isNavOpen && <MobileNavbar />
                }
   </div>
  )
}

export default Nav
const MobileNavbar = () => {
  return (
      <div className="columns-1 bg-gray-100">
         <ul className='  font-medium cursor-pointer text-xl text-blue-800'>
      <li >Home</li>
      <li>About</li>
      <li >Contact</li>
    </ul>
      </div>
  )
}