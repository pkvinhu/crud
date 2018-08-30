import React, {Component} from 'react'
import UserForm from './UserForm'
import axios from 'axios'

export default class Update extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  name: ''
  	}
  	this.handleChange = this.handleChange.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
  	this.setState({name: e.target.value})
  }

  async handleSubmit(e){
  	e.preventDefault()
  	const id = this.props.props.match.params.id
  	await axios.put(`/api/users/update/${id}`, this.state)
  	.then((res)=>console.log(res.data))
  	const users = await axios.get('/api/users')
  	console.log(users.data)
  	this.props.rerender(users.data)
  }

  // componentDidMount(){
  // 	const id = this.props.props.match.params.id
  // 	axios.get(`/api/users/${id}`)
  // 	.then(res=>this.setState({name:res.data.name}))
  // }

  render() {
  	const {handleSubmit, handleChange} = this;
  	const {name} = this.state;
  	return (
  	  <div>
  	    <h1>Update User</h1>
  	    <hr />
  	    <UserForm name={name} submit={handleSubmit} change={handleChange}/>
  	  </div>
  	)
  }
}