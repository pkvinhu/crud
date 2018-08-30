import React, {Component} from 'react'
import axios from 'axios'
import SingleUser from './SingleUser'

export default class AllUsers extends Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }

  render() {
  	const {users, remove} = this.props
  	return (
  	  <div>
  	    <h1>Users</h1>
  	    <hr />
  	    {users.map((user)=>{
  	      return(

  	      	<SingleUser user={user} remove={remove}/>
  	      )
  	    })}
  	  </div>
  	)
  }
}