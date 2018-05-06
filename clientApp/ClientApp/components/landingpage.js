import React,{Component} from 'react'
import axios from 'axios'

class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state={
            searchtext: "",
            responsedata: null
        }
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(this.state.searchtext)
        axios.post('/api/searchCity',{searchterm:this.state.searchtext})
        .then((res)=>{
            console.log(res.data)
            this.setState({
                responsedata:res.data.businesses
            })
        })
        
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
                <ul className="list-group">
                {
                    this.state.responsedata!=null &&
                    this.state.responsedata.map((business)=>{
                        return (<li className="list-group-item row">
                            <div className="col-md-3 col-sm-3">
                                <img className="img-responsive img-rounded" src={business.image_url} alt="no preview"/>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            <button className="btn btn-primary">Assist Event</button>
                            <h3>{business.name}</h3>
                            </div>
                            
                            
                        </li>)
                    })
                }
                </ul>
            </div>
        )
    }
}
export default LandingPage