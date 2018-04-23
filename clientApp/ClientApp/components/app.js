import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SigninTwitter from './signintwitter'
import Header from './header'
import SignOut from './auth/signout'
import SignIn from './auth/signinform'
import SignUp from './auth/signup'
import Welcome from './auth/welcome'

class Hello extends Component{
		
		render(){
			return (
			<div>hello</div>
			)
		}
	}
class Goodbye extends Component{
		render(){return <div>Goodbye</div>}
	}

class VotingApp extends Component{

	
	

	render(){
		return(
			
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
 							
							{this.props.children}
							<Route path="/welcome" component={Welcome}/>
							<Route path="/signup" component={SignUp}/>
							<Route path="/signout" component={SignOut}/>
							<Route path="/signin" component={SignIn}/>
							<Route path="/signintwitter" component={SigninTwitter}/>
							<Route path="/Hello" component={Hello}/>
							<Route path="/Goodbye" component={Goodbye}/> 
							<Route path="/" component={Hello}/>
						</Switch>
					</div>
				</BrowserRouter>
			



			)
	}
}

export default VotingApp;