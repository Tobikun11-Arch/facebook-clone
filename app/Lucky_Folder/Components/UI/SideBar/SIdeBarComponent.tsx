import React from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaBirthdayCake } from "react-icons/fa";

export default function SIdeBarComponent() {
  return (
        <aside className='w-[27rem] bg-[#242526] h-[100%] hidden md:block fixed mt-[4.2rem]'>
            <div className='flex items-center justify-between p-4'>
                <h1 className='font-bold text-2xl'>Friends</h1>
                <div className=' p-2 bg-[#3A3B3C] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div>
            </div>

            <div className='flex items-center p-4 font-bold'>
            <div className='p-3 bg-[#3A3B3C] rounded-full mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg></div>
            <p>Home</p>
            </div>

            <div className='flex items-center p-4 font-bold'>
            <div className=' p-3 bg-[#3A3B3C] rounded-full mr-3'><IoPersonAddSharp/></div>
                <p>Friend Requests</p>
            </div>

            <div className='flex items-center p-4 font-bold'>
                <div className=' p-3 bg-[#3A3B3C] rounded-full mr-3'><BsPeopleFill/></div>
                <p>Suggestions</p>
            </div>

            <div className='flex items-center p-4 font-bold'>
                <div className=' p-3 bg-[#3A3B3C] rounded-full mr-3'><LiaUserFriendsSolid/></div>
                <p>All Friends</p>
            </div>

            <div className='flex items-center p-4 font-bold'>
                <div className=' p-3 bg-[#3A3B3C] rounded-full mr-3'><FaBirthdayCake/></div>
                <p>Birthdays</p>
            </div>

            <div className='flex items-center p-4 font-bold'>
                <div className=' p-3 bg-[#3A3B3C] rounded-full mr-3'><LiaUserFriendsSolid/></div>
                <p>Custom List</p>
            </div>
        </aside>
  )
}
