import React from 'react'
import { FiHome } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbBrandMessenger } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { MdOutlineStorefront } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
//used react-icons
//npm install react-icons --save

export default function NavbarComponent() {
  return (
    <nav className='border-b-2 border-black md:flex md:justify-between px-5 items-center md:border-slate-300 md:bg-[rgb(36,37,38)]'>

      <div className='hidden md:flex items-center gap-2'>
        <div className='bg-white rounded-full'>
          <svg className="w-10 h-auto" viewBox="0 0 24 24" id="meteor-icon-kit__regular-facebook" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width=""></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#0866FF"></path></g></svg>
        </div>
        <div className='relative flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search ml-3 absolute"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type='text' className='bg-[#3A3B3C] rounded-full px-9 py-2 w-[100%]' placeholder='Search Facebook'></input>
        </div>
      </div>

      <ul className='flex justify-evenly items-center md:gap-7'>
            <li className='p-5 text-2xl'><FiHome/></li>
            <li className='p-5 text-2xl'><BsFillPeopleFill/></li>
            <li className='p-5 text-2xl md:hidden'><TbBrandMessenger/></li>
            <li className='p-5 text-2xl hidden md:block'><MdLiveTv/></li>
            <li className='p-5 text-2xl hidden md:block'><GoBell/></li>
            <li className='p-5 text-2xl '><MdOutlineStorefront/></li>
      </ul>

      <div className='hidden md:flex items-center gap-2'>
        <div className='p-3 rounded-full bg-[#3A3B3C]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu h-auto md:block w-5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></div>
        <div className='p-3 rounded-full bg-[#3A3B3C]'><FaFacebookMessenger className=' h-auto md:block w-5'/></div>
        <div className='p-3 rounded-full bg-[#3A3B3C]'><IoNotifications className='h-auto md:block w-5'/></div>
        <img src="https://picsum.photos/300/300" alt="" className='h-10 w-10 rounded-full'/>
      </div>

    </nav>
  )
}
