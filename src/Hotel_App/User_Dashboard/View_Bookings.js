import React, { Component } from "react";
import axios from 'axios'
import './view_booking.css'

const bURL = "http://localhost:8900/booking_details";
const tdate = new Date()

class View_Booking extends Component {
  state = {
    bookingData: "",
  };

  renderData=(data)=>{
      if(data){
      return data.map((items)=>{
          return(
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.hotel_name}</td>
              <td>{items.name}</td>
              <td>{items.phone}</td>
              <td>{items.checkIn}</td>
              <td>{items.checkOut}</td>
              <td>{items.status}</td>
            </tr>
          )
      })

    }
    else{
      return(
        <h1 style={{color:'black'}}>Loading....</h1>
      )
    }
  }

  render() {
    return (
      <div className="view_Booking">
        <h1>Booking Details</h1>
        <hr/>
        <table id="table" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Booking ID</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Name</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Check-In</th>
              <th scope="col">Check-Out</th>
              <th scope="col">Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {this.renderData(this.state.bookingData)}
          </tbody>
        </table>
        <center><h4>Thanks for your Booking</h4></center>
      </div>
    );
  }
  async componentDidMount(){
    const today = `${tdate.getFullYear()}-${tdate.getMonth()+1}-${tdate.getDate()}`
    const response = await axios.get(bURL);
    this.setState({bookingData : response.data.filter((item)=>{
        return(
             item.checkIn >= today
        )
     })
})
}
}

export default View_Booking;