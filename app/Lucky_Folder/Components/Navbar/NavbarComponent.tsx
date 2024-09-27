import React from 'react'
import { FiHome } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbBrandMessenger } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { MdOutlineStorefront } from "react-icons/md";

export default function NavbarComponent() {
  return (
    <nav>
        <ul className='flex justify-evenly items-center border-b-2 border-black'>
            <li className='p-5 text-2xl'><FiHome/></li>
            <li className='p-5 text-2xl'><BsFillPeopleFill/></li>
            <li className='p-5 text-2xl'><TbBrandMessenger/></li>
            <li className='p-5 text-2xl'><GoBell/></li>
            <li className='p-5 text-2xl'><MdOutlineStorefront/></li>
        </ul>
    </nav>
  )
}
