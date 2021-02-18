import React, { Component } from 'react';
import QuickDisplay from './QuickDisplay';

const tripType = "https://developerfunnel.herokuapp.com/booking";

class QuickSearch extends Component{
    constructor(props){
        super(props)

        this.state = {
            tripType : ""
        }
    }

    componentDidMount(){
        fetch(tripType, {method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                tripType : data
            })
        })
    }
    render(){
        console.log(this.state.tripType)
        return(
            <div className='quickSearch'>
                <QuickDisplay tripType_data={this.state.tripType}/>
            </div>
        )
    }
}
export default QuickSearch;