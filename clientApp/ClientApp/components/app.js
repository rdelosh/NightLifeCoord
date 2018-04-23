import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SigninTwitter from './signintwitter'


class Hello extends Component{
		componentDidMount(){
			console.log(document.cookie)
		}
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
						
						<Switch>
 							
							{this.props.children}
							
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