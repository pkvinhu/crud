import React, {Component} from 'react'
import UserForm from './UserForm'
import axios from 'axios'


export default class Create extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  name:''
  	}
  	this.onSubmit = this.onSubmit.bind(this)
  	this.onChange = this.onChange.bind(this)
  }

    onChange(e){
  	  this.setState({[e.target.name]:e.target.value})
    }

    async onSubmit(e){
      e.preventDefault()
      await axios.post('/api/users/create', this.state)
	  .then((res)=>this.props.add(res.data))
	  this.setState({name:''})
    }

  render(props){
  	const {name} = this.state;
  	const {onChange, onSubmit} = this;
  	return (
  	  <div>
  	    <h1>Create this SHIZ</h1>
  	    <hr />
  	    <div style={{margin:'30px 30px 30px 30px', alignItems:'center'}}>
  	    <img src='https://uproxx.files.wordpress.com/2015/09/gandalf-lotr_paramount.jpg?quality=95&w=650'/>
  	    <UserForm name={name} change={onChange} submit={onSubmit}/>
  	    </div>
  	  </div>
  	)
  }
}