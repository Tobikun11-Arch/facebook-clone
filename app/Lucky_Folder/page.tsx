import React from 'react'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import HeaderComponent from './Components/Header/HeaderComponent'
import FriendsListComponent from './Components/FriendsList/FriendsListComponent'


export default function page() {
  return (
    <div className='bg-[#242526] h-screen'>
        <NavbarComponent/>
        <HeaderComponent/>
        <FriendsListComponent/>
    </div>
  )
}
