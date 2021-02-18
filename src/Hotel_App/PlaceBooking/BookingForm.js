import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './booking_form.css'

const bURL = "  http://localhost:8900/booking_details"

class BookingForm extends Component{
    constructor(props){
        super(props)

        this.state={
            id : Math.floor(Math.random()*10000),
            hotel_name : sessionStorage.getItem('hotel_name'),
            name : "",
            phone : "",
            checkIn : "",
            checkOut : "",
            status : "Pending"
        }
    }
    handleChangeName=(event)=>{
        this.setState({
            name : event.target.value
        })
    }
    handleChangePhone=(event)=>{
        this.setState({
            phone : event.target.value
        })
    }
    handleChangeCheckIn=(event)=>{
        this.setState({
            checkIn : event.target.value
        })
    }
    handleChangeCheckOut=(event)=>{
        this.setState({
            checkOut : event.target.value
        })
    }
    submitData=()=>{
        console.log(this.state)
        fetch(bURL,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(alert('Thanks for Choosing Us. Your booking has been placed'))
        this.props.history.push('/viewbookings')
    }
    
    render(){
        const tripID = sessionStorage.getItem('tripid')
        return(
            <div>
                <div class="form-group" style={{padding:"20px"}}>
                    <h1>Place Booking</h1><hr/>
                    <div class="form-group" style={{marginTop:"30px"}}>
                        <h5>Booking ID</h5>
                        <input className="form-control" name="id" type='text' readOnly value={this.state.id}/>
                        <h5>Hotel Name</h5>
                        <input className="form-control" name="hotel_name" type="text" readOnly value={this.state.hotel_name}/>
                        <h5>Name</h5>
                        <input className="form-control" name="name" type="text" onChange={this.handleChangeName}/>
                        <h5>Phone no.</h5>
                        <input className="form-control" name="phone" type="text" onChange={this.handleChangePhone}/>
                        <h5>Check-In Date</h5>
                        <input className="form-control" name="checkIn" type ="date" onChange={this.handleChangeCheckIn}/>
                        <h5>Check-Out Date</h5>
                        <input className="form-control" name="checkOut" type ="date" onChange={this.handleChangeCheckOut}/>
                    </div>
                    <button class="btn btn-outline-success" type="submit" onClick={this.submitData} value="Submit" style={{marginTop:"10px",color:'black'}}>Submit</button>
                </div>
                <div className="router_link">
                    <Link to={`/details/${tripID}`}><button className="btn btn-outline-secondary" type="submit">Back</button></Link>
                    <Link to={`/list/${tripID}`}><button className="btn btn-outline-warning" type="submit">Book Another Hotel</button></Link>
                </div>
            </div>
        )
    }
}

export default BookingForm;