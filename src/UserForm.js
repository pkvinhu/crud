import React, {Component} from 'react'

export default function UserForm ({users, add, name, submit, change}){

  	return(
  	  <div>
  	    <form onSubmit={submit}>
	  	    <label htmlFor={name}></label>
	  	    <input type='text' name='name' value={name} onChange={change}></input>
	  	    <button type='submit'>Save</button>
  	    </form>
  	  </div>
  	)
}