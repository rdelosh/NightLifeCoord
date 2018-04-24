import React,{Component} from 'react'
import axios from 'axios'

class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state={
            searchtext: ""
        }
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(this.state.searchtext)
        
    }
    render(){
        return(
            <div className="container">
                <h1>Night Life Coordination</h1>
                <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                    <input onChange={(event)=>{
                        this.setState({
                            searchtext:event.target.value
                        })
                    }} type="text" value={this.state.searchtext}/>
                    
                </form>
            </div>
        )
    }
}
export default LandingPage