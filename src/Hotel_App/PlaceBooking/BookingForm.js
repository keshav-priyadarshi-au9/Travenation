import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// const bURL = "  http://localhost:2400/bookings/generate_booking"
const bURL = "https://travenation-controller.herokuapp.com/bookings/generate_booking"


class BookingForm extends Component{
    constructor(props){
        super(props)

        this.state={
            hotel_name : sessionStorage.getItem('hotel_name'),
            name : "",
            email : "",
            phone : "",
            checkIn : "",
            checkOut : "",
            status : "Pending"
        }
    }

    componentDidMount(){
        this.setState({email : sessionStorage.getItem('email')})
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
        if(this.state.phone.length===10){
            fetch(bURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'x-access-token': sessionStorage.getItem('login_token')
                },
                body:JSON.stringify(this.state)
            })
            .then(data=>data.json())
            .then(alert('Thanks for Choosing Us. Your booking has been placed'))
            this.props.history.push('/viewbookings')
        }
        else{
            alert("Please provide correct phone no.")
        }
    }
    
    render(){
        const tripID = sessionStorage.getItem('tripid')
        return(
            <div className="justify-content-md-center" style={{padding:"34px"}}>
            <div className="col-md-8" style={{marginBottom:"50px"}}>

                <div class="form-group">

                    <h1>Place Booking</h1><hr/>

                    <div class="form-group">
                        
                        <h5>Hotel Name</h5>
                        <input className="form-control" name="hotel_name" type="text" readOnly value={this.state.hotel_name}/>

                        <h5>Name</h5>
                        <input className="form-control" name="name" type="text" onChange={this.handleChangeName}/>

                        <h5>Phone no.</h5>
                        <input className="form-control" name="phone" type="number" onChange={this.handleChangePhone}/>

                        <h5>Check-In Date</h5>
                        <input className="form-control" name="checkIn" type ="date" onChange={this.handleChangeCheckIn}/>

                        <h5>Check-Out Date</h5>
                        <input className="form-control" name="checkOut" type ="date" onChange={this.handleChangeCheckOut}/>
                        
                    </div>
                    
                    <button style={{width:"150px", marginTop:"20px", marginBottom:"20px"}} class="btn btn-outline-success" type="submit" onClick={this.submitData} value="Submit">Submit</button>
                   
                    <br/>

                    <div>

                        <Link to={`/details/${tripID}`}><button style={{width:"150px"}} className="btn btn-outline-secondary" type="submit">Back</button></Link>

                        <Link to={`/list/${tripID}`}><button style={{width:"150px", marginLeft:"20px"}} className="btn btn-outline-warning" type="submit">Book Another</button></Link>

                    </div>

                </div>
    
            </div>
            </div>
        )
    }
}

export default BookingForm;