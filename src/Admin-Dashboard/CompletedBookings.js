import React from 'react' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom'
import './completedBooking.css'

const bURL = "http://localhost:8900/booking_details"
const tdate = new Date()

class CompletedBookings extends React.Component{
    state = {
            bookingData : '',
            filterData : ''
    }

    filtering=(data)=>{
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
                <td>Completed</td>
              </tr>
            )
        })
  
      }
    }

    render(){
        return(
            <div className="completed_booking">
                <h1>Completed Bookings</h1>
                <hr/>
                {sessionStorage.getItem('role')==='Admin'?
               
                <Link to="/admindashboard"><button style={{marginBottom:"10px",color:'black'}} className="btn btn-outline-secondary" type="submit">Back</button></Link>
                :
                null
                }
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Booking ID</th>
                        <th scope="col">Hotel Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Check-In</th>
                        <th scope="col">Check-Out</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filtering(this.state.bookingData)}
                    </tbody>
                </table>
            </div>
        )
    }
    async componentDidMount(){
        const today = `${tdate.getFullYear()}-${tdate.getMonth()+1}-${tdate.getDate()}`
        const response = await axios.get(bURL);
        this.setState({bookingData : response.data.filter((item)=>{
            return(
                 item.checkIn < today
            )
         })
    })
    }
}

export default CompletedBookings;