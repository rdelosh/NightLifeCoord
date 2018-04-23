import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from '../actions'

class Header extends Component{

	componentDidMount(){
		if(document.cookie){
			
			this.props.signinGoogle(document.cookie.substring(6,document.cookie.length))
			document.cookie = "token=;Max-Age=0"
			
		}
		// console.log(document.cookie)
		
	}
	renderList(){

		if(this.props.authenticated){
			return(
				<li className="nav-item pull-right">
					<Link to="/signout" className="nav-link pull-right">Sign Out</Link>
				</li>
				)
		}else{
			return(
				[
					<li className="nav-item pull-right">
						<Link to="/signin" className="nav-link pull-right">Sign in</Link>
					</li>,
					<li className="nav-item pull-right">
						<Link to="/signup" className="nav-link pull-right">Sign up</Link>
					</li>

				]
				)

		}

	}
	render(){
		return(
		


			<nav className="navbar navbar-fixed-top navbar-default navbar-static-top">
				<div className="container">
					
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" ></span>
							<span className="icon-bar" ></span>
							
						</button>
						<Link to="/" className="navbar-brand navbartitle">Night Life Coordination</Link>
						
					</div>
					<div className="navbar-collapse collapse">

						<ul className="nav navbar-nav pull-right">
						
						{this.renderList()}
							
						</ul>
					</div>

				</div>

			</nav>


			)
	}
}
function mapStateToProps(state){
	return{
		authenticated:state.auth.authenticated
	}
}

export default connect(mapStateToProps,actions)(Header)