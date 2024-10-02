import React from 'react'
import NavbarComponent from '../Components/UI/Navbar/NavbarComponent'
import HeaderComponent from '../Components/UI/Header/HeaderComponent'
import FriendsListComponent from '../Components/UI/FriendsList/FriendsListComponent'
import SIdeBarComponent from '../Components/UI/SideBar/SIdeBarComponent'


export default function page() {
  return (
    <div className='bg-[#18191A] h-screen'>
        <NavbarComponent/>

        <div className='flex'>
          <div className='fixed'><SIdeBarComponent/></div>
          
          <div className='w-[100%] h-full pb-10 md:bg-[#18191A] md:ml-[24rem] mt-[5rem]'>
            <HeaderComponent/>
            <FriendsListComponent/>
          </div>
          
        </div>
    </div>
  )
}
