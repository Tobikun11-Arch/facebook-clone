import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function HeaderComponent() {
  return (
    <div className='mx-5 my-2'>
        <div className='flex justify-between mb-3 md:mt-5'>
            <h1 className='font-bold text-2xl md:hidden'>Friends</h1>
            <h1 className='font-bold text-2xl hidden md:block'>Friend Requests</h1>
            <p className='text-blue-500 hidden md:block'>See all</p>
            <span className='w-10 h-10 md:hidden rounded-full bg-slate-700 flex items-center text-xl justify-center font-bold'><FaMagnifyingGlass></FaMagnifyingGlass></span>
        </div>
        
        <div className='md:hidden'>
            <button className='font-bold px-3 py-2 bg-slate-700 rounded-full mr-4'>Suggestions</button>
            <button className='font-bold px-3 py-2 bg-slate-700 rounded-full'>Your friends</button>
        </div>

        <div className='flex justify-between md:justify-end mt-5 md:hidden'>
            <p className='font-bold'>Friend requests (16)</p>
            <p className='text-blue-500 '>See all</p>
        </div>
    </div>
  )
}
