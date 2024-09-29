import React from 'react'

export default function 
() {
  return (
    <div className='flex w-[100%] my-5'>
        <img src="https://picsum.photos/300/300" alt="" className='h-24 w-24 rounded-full'/>

        <div className='w-[100%] pl-2 flex flex-col justify-center'>
            <div className='flex justify-between py-2'>
                <p>Lucky Estrada</p>
                <p className='text-slate-300 text-sm'>4w</p>
            </div>
            <div className='flex justify-stretch items-stretch gap-2'>
                <button className='bg-blue-500 w-[100%] py-1 rounded-md font-bold'>Confirm</button>
                <button className='bg-slate-600 w-[100%] py-1 rounded-md font-bold'>Delete</button>
            </div>
        </div>
        
    </div>
  )
}
