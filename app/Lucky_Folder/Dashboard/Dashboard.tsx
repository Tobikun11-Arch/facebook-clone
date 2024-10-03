import React from 'react'
import NavbarComponent from '../Components/UI/Navbar/NavbarComponent'
import HeaderComponent from '../Components/UI/Header/HeaderComponent'
import FriendsListComponent from '../Components/UI/FriendsList/FriendsListComponent'


export default function page() {
  return (
    <div className='bg-[#242526] min-h-screen'>
        <NavbarComponent/>
        <HeaderComponent/>
        <FriendsListComponent/>
    </div>
  )
}
