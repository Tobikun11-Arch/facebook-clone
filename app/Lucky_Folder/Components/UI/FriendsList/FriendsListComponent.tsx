import React from 'react'
import FriendComponent from './FriendComponent'

export default function FriendsListComponent() {
  return (
    <div className='mx-5'>
        <div>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
        </div>
    </div>
  )
}
