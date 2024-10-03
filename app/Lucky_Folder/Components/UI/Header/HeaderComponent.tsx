import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function HeaderComponent() {
  return (
    <div className=' mx-5 my-2'>
        <div className='flex justify-between mb-3'>
            <h1 className='font-bold text-2xl'>Friends</h1>
            <span className='w-10 h-10 rounded-full bg-slate-700 flex items-center text-xl justify-center font-bold'><FaMagnifyingGlass></FaMagnifyingGlass></span>
        </div>
        
        <div>
            <button className='font-bold px-3 py-2 bg-slate-700 rounded-full mr-4'>Suggestions</button>
            <button className='font-bold px-3 py-2 bg-slate-700 rounded-full'>Your friends</button>
        </div>
    </div>
  )
}
