import React from 'react'
import {Link} from 'react-router-dom'


export default function SingleUser({user, remove}){
  return (
  	<div>
  	  <Link to={`/users/update/${user.id}`}>{user.name}</Link>
  	  <button onClick={()=>remove(user)}>obliterate forever</button>
  	</div>
  )
}