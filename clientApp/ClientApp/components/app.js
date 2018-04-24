import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Header from './header'
import SignOut from './auth/signout'
import SignIn from './auth/signinform'
import SignUp from './auth/signup'
import Welcome from './auth/welcome'
import LandingPage from './landingpage'
import PageWrapper from './PageWrapper'

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
							<Route path="/welcome" component={PageWrapper(Welcome)}/>
							<Route path="/signup" component={PageWrapper(SignUp)}/>
							<Route path="/signout" component={PageWrapper(SignOut)}/>
							<Route path="/signin" component={PageWrapper(SignIn)}/>
							
							<Route path="/Hello" component={PageWrapper(Hello)}/>
							<Route path="/Goodbye" component={PageWrapper(Goodbye)}/> 
							<Route path="/" component={PageWrapper(LandingPage)}/>
						</Switch>
					</div>
				</BrowserRouter>
			



			)
	}
}

export default VotingApp;