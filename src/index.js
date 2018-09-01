import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import Users from './Users'
import {HashRouter} from 'react-router-dom'

function Main (){
  return(
  	<div>
  	  <HashRouter>
  	    <Users />
  	  </HashRouter>
  	</div>
  )
}

render(<Main />, document.getElementById('main'))