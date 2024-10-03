import React from 'react'

export default function 
() {
  return (
    <>
      <div className='flex w-[100%] my-5 md:hidden'>
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

        <div className='hidden md:flex flex-col items-center justify-center bg-[#242526] rounded-lg w-[12rem] border-[.91px] border-slate-600'>
          <div className='w-full'><img src="https://picsum.photos/500/500" alt="" className=' h-auto object-contain w-full rounded-t-lg'/></div>
            <div className='flex flex-col p-4 w-full'>
                <div className='flex items-start flex-col relative'>
                    <p className='font-bold'>Lucky Estrada</p>
                    <p className='mutuals py-2 absolute'></p>
                </div>
                <div className='flex flex-col justify-stretch items-stretch gap-2 mt-6'>
                    <button className='bg-blue-500 w-[100%]  py-1  rounded-md '>Confirm</button>
                    <button className='bg-slate-600 w-[100%]  py-1  rounded-md '>Delete</button>
                </div>
            </div>
      </div>
    </>
  )
}
