import React from 'react'
import FriendComponent from './FriendComponent'

export default function FriendsListComponent() {
  return (
    <div className='mx-5 my-2 pt-5'>
        <div className='flex justify-between'>
            <p className='font-bold'>Friend requests (16)</p>
            <p className='text-blue-500'>See all</p>
        </div>

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
