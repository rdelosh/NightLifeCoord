import React, {Component} from 'react'


class Welcome extends Component{
    componentWillMount(){
        
        setTimeout(() => {
            this.props.history.push('/')
        }, 2000);
    }
    render(){
        return <div className="container">
        <h1>Hello!</h1>
        <h1>Welcome Back!</h1>
        </div>
    }
}

export default Welcome
