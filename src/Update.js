import React, {Component} from 'react'
import UserForm from './UserForm'
import axios from 'axios'

export default class Update extends Component {
  constructor(props){
  	super(props)
  	this.state={
  	  name:''
  	}
  	this.onSubmit = this.onSubmit.bind(this)
  	this.onChange = this.onChange.bind(this)
  }

  async onSubmit(e){
  	e.preventDefault()
  	const id = this.props.id
  	const res = await axios.put(`/api/users/update/${id}`, this.state)
  	this.props.update()
 	this.setState({name:''})
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
  	const {name} = this.state;
  	const {onChange, onSubmit} = this;
  	return (
  	  <div>
  	    <h1>Update this!</h1>
  	    <hr />
  	    <UserForm name={name} change={onChange} submit={onSubmit}/>
  	  </div>
  	)
  }
}