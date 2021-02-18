import React, { Component } from "react";
import {Link} from 'react-router-dom'
import FilterUsingHotel from './FilterBookings'
import axios from 'axios'
import './admin_view_booking.css'

const bURL = "http://localhost:8900/booking_details";
const tdate = new Date()

class Admin_View_Booking extends Component {
  state = {
    bookingData: "",
  };

 
 handleAccept=(id,hotel_name,name,phone,checkIn,checkOut)=>{
    // console.log(id,hotel_name,name,phone,checkIn,checkOut)
    const data = {
      id:id,
      hotel_name:hotel_name,
      name:name,
      phone:phone,
      checkIn:checkIn,
      checkOut:checkOut,
      status:"Confirm"
    }
    fetch(`${bURL}/${id}`,{
      method:'PUT',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
  })
  window.location.reload()
  alert(`Requested Booking ID ${id} is confirmed`)
}
handleReject=(id,hotel_name,name,phone,checkIn,checkOut)=>{
  // console.log(id,hotel_name,name,phone,checkIn,checkOut)
  const data = {
    id:id,
    hotel_name:hotel_name,
    name:name,
    phone:phone,
    checkIn:checkIn,
    checkOut:checkOut,
    status:"Rejected"
  }
  fetch(`${bURL}/${id}`,{
    method:'PUT',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
window.location.reload()
alert(`Requested Booking ID ${id} is Rejected`)
}


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
              {items.status==="Pending"?
              <td>
                <button 
                className="btn btn-outline-success" 
                type="submit" 
                onClick={()=>this.handleAccept(items.id,items.hotel_name,items.name,items.phone,items.checkIn,items.checkOut)}>
                  Accept
                  </button>
                <button 
                className="btn btn-outline-danger" 
                type="submit" 
                onClick={()=>this.handleReject(items.id,items.hotel_name,items.name,items.phone,items.checkIn,items.checkOut)}>
                  Reject
                  </button>
              </td>
              :
              null
          }
            </tr>
          )
      })

    }
    else{
      return(
        <h1>Loading....</h1>
      )
    }
  }
 filterData(sortedData){
   if(sortedData){
    this.setState({
      bookingData:sortedData
     })
   }
   else{
     alert("There is no booking as such")
   }
  
 }
  render() {
    return (
      <div className="view_Booking">
        <h1>Booking Details</h1>
        <hr/>
        {sessionStorage.getItem('role')==='Admin'?
          <>
          <Link to="/admindashboard"><button className="btn btn-outline-secondary" type="submit">Back</button></Link>
          <FilterUsingHotel atHotelName = {(data)=>{this.filterData(data)}}/>
          </>
          :
          null
        }
        
       
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
              {sessionStorage.getItem('role')==='Admin'?
              <th scope="col">Approval</th>
              :
              null
              }
            </tr>
          </thead>
          <tbody>
            {this.renderData(this.state.bookingData)}
          </tbody>
        </table>
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

export default Admin_View_Booking;