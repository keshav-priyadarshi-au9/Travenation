import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

const bURL = "http://localhost:2400/bookings";

class View_Booking extends Component {
  state = {
    bookingData: "",
  };


  componentDidMount(){

    let email = sessionStorage.getItem('email')

    fetch(bURL, {method:'GET',
      headers:{ 'x-access-token': sessionStorage.getItem('login_token')},
    })
    
    .then(data=>data.json())

    .then(data=>{
      this.setState({bookingData: data.filter((item)=>{
        return(
          item.email === email
        )
      })})
    })
}


  renderData=(data)=>{
      if(data){
       
          return data.map((items)=>{
            return(
              <tr key={items._id}>
                <td>{items._id}</td>
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
        <Spinner animation="border" role="status"></Spinner>
      )
    }
  }

  render() {
    return (
      <div style={{padding:"34px", height:"80vh"}}>
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
      </div>
    );
  }
 
}

export default View_Booking;