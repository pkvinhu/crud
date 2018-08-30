import React, {Component} from 'react'
import UserForm from './UserForm'
import axios from 'axios'

export default class Create extends Component{
  constructor(props){
  	super(props)
  	this.state={
  	  name: ''
  	}
  	this.handleSubmit = this.handleSubmit.bind(this)
  	this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
  	this.setState({
  	  [e.target.name]: e.target.value
  	})
  }

  handleSubmit(e){
  	e.preventDefault()
  	console.log('okay')
  	axios.post('/api/users/create', this.state)
  	.then(res=>this.props.add(res.data))
  	this.setState({name: ''})
  }

  render(){
  	const {name} = this.state
  	const {handleSubmit, handleChange} = this;
  return (
  	<div>
  	  <h1>Create a User</h1>
  	  <hr />
  	  <UserForm users={this.props.users} add={this.props.add} name={name} submit={handleSubmit} change={handleChange}/>
  	</div>
  )
}
}