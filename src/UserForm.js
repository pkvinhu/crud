import React from 'react'


export default function UserForm({name, change, submit}){

  return (
  	<div>
  	  <form onSubmit={submit}>
  	    <label></label>
  	    <input type='text' name='name' value={name} onChange={change}></input>
  	    <button>Submit</button>
  	  </form>
  	</div>
  )
}