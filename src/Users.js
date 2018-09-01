import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import AllUsers from './AllUsers'
import Create from './Create'
import Update from './Update'


export default class Users extends Component {
  constructor(){
  	super()
  	this.state={
  		users:[],
  	}
  	this.removeUser = this.removeUser.bind(this)
  	this.addUser = this.addUser.bind(this)
  	this.updateUser=this.updateUser.bind(this)
  }

  updateUser(){
  	this.componentDidMount()
  }

  addUser(user){
    this.setState({users:[...this.state.users,user]})
  }

  removeUser(user){
  	const newUsers = this.state.users.filter(item=>item!==user)
  	axios.delete(`/api/users/${user.id}`)
  	.then(()=>this.setState({users:newUsers}))
  }

  componentDidMount(){
  	axios.get('/api/users')
  	.then(res=>this.setState({users:res.data}))
  }

  render(){
  	const {users} = this.state
  	return(
  	  <div>
  	    <h1>Acme Crud Users</h1>
  	    <hr />
  	    <div className='links' style={{display:'flex', justifyContent:'space-around'}}>
	  	  <Link to='/'>Home</Link>
	  	  <Link to='/users'>All Users</Link>
	  	  <Link to='/users/create'>Create a User</Link>
	  	</div>
	  	<div className='routes'>
	  	  <Route exact path='/' render={()=><Home users={users}/>}/>
	  	  <Route path='/users' render={()=><AllUsers users={users} remove={this.removeUser}/>}/>
	  	  <Route path='/users/create' render={()=><Create users={users} add={this.addUser}/>}/>
	  	  <Route exact path='/users/update/:id' render={(props)=><Update users={users} update={this.updateUser} id={props.match.params.id}/>}/>
	  	</div>
  	  </div>
  	)
  }
}