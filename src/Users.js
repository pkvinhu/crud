import React, {Component} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import AllUsers from './AllUsers'
import Create from './Create'
import Update from './Update'
import axios from 'axios'

export default class Users extends Component {
	constructor () {
	  super()
	  this.state = {
	  	users: []
	  }
	  this.addUser = this.addUser.bind(this)
	  this.removeUser = this.removeUser.bind(this)
	  this.rerender = this.rerender.bind(this)
	}
  
  rerender(data){
  	this.setState({users:data})
  	this.componentDidMount()
  }

  addUser(newUser){
    this.setState({users: [...this.state.users, newUser]})
  }

  removeUser(removed){
  	const newUsers = this.state.users.filter(user=>{!removed})
  	axios.delete(`/api/users/${removed.id}`)
  	.then(()=>this.setState({users:newUsers}))
  }

  componentDidMount(){
  	axios.get('/api/users')
  	.then((response)=>this.setState({users:response.data}))
  }

  render(){
  	const {users} = this.state;
  	const {addUser, removeUser, rerender} = this;
  	return (
  	<Router>	
  	  <div>
  	    <h1>Acme Crud Users</h1>
	  	  <div id='navbar'>
	  	    <Link to='/'>Home</Link>
	  	    <Link to='/users'>Users</Link>
	  	    <Link to='/users/create'>Create</Link>
	  	  </div>
	  	  <div>
	  	    <Route exact path='/' component={Home}/>
	  	    <Route path='/users' render={()=><AllUsers users={users} remove={removeUser}/>}/>
	  	    <Route exact path='/users/create' render={()=><Create users={users} add={addUser}/>}/>
	  	    <Route exact path='/users/update/:id' render={(props)=><Update users={users} rerender={rerender} props={props}/>}/>
	  	  </div>
  	  </div>
	</Router>  	  
  	)
  }
}