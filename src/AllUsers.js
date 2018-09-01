import React from 'react'
import SingleUser from './SingleUser'


export default function AllUsers({users, remove}){
  const listUsers = users.map(user=><SingleUser key={user.id} user={user} remove={remove}/>)
  return (
    <div>
      <h1>All the Scrubs</h1>
      <hr />
      <ul>{listUsers}</ul>
    </div>
  )
}