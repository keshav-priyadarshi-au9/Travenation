import React, {Component} from 'react';
import axios from 'axios'
import './filterBooking.css'

const bURL = "http://localhost:8900/booking_details"
const tdate = new Date()
class FilterBookings extends Component{
    state={
        booking_data:"",
        hotel_name:"",
        booking_date : ""
    }
   
    renderHotel=(data)=>{
        if(data){
            console.log(data)
            return data.map((items)=>{
                return(
                    <option>
                        {items.hotel_name} 
                    </option>
                )
            })
        }
    }
    hotelHandler=(event)=>{
        console.log("hotelHandler",event.target.value)
        this.setState({
            hotel_name: event.target.value
        })
    }
    dateHandler=(event)=>{
        console.log("datehandler", event.target.value)
        this.setState({
            booking_date:event.target.value
        })
    }
    hotelSearchHandler=()=>{
        if(this.state.hotel_name){
            const url = `http://localhost:8900/booking_details?hotel_name=${this.state.hotel_name}`
            axios.get(url)
            .then((response)=>{this.props.atHotelName(response.data)})
            this.setState({hotel_name:"",booking_date:""})
        } 
        else{
            alert("oops! Seems like no booking placed on selected hotel")
        }
    }
    dateSearchHandler=()=>{
        if(this.state.booking_date){
            const url = `http://localhost:8900/booking_details?checkIn=${this.state.booking_date}`
            axios.get(url)
            .then((response)=>{this.props.atHotelName(response.data)})
            this.setState({hotel_name:"",booking_date:""})
        }
        else{
            alert("oops! Seems like no booking placed on selected date")
        }
    }
    render(){
        return(
            <div className="mainbox">
                <div>
                    <h5>Search Bookings</h5>
                    <hr/>
                </div>
                <div className="filter_search">
                    <div className="select_hotel">
                        <select className="form-control" onChange={this.hotelHandler} type="text">
                            <option>--Select Hotel--</option>
                            {this.renderHotel(this.state.booking_data)}
                        </select>
                        <button className="btn btn-outline-success" onClick={this.hotelSearchHandler}>Hotel Search</button>
                    </div>
                    <div className="select_date">
                        <input onChange={this.dateHandler} type="date"/>
                        <button className="btn btn-outline-success" onClick={this.dateSearchHandler}>Search</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
    async componentDidMount(){
        const today = `${tdate.getFullYear()}-${tdate.getMonth()+1}-${tdate.getDate()}`
        const response = await axios.get(bURL);
        this.setState({booking_data : response.data.filter((item)=>{
            return(
                 item.checkIn > today
            )
         })
    })
    }
}

export default FilterBookings;