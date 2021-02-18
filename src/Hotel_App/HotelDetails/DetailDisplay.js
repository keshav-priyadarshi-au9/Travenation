import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './detail_display.css'

const tripID = sessionStorage.getItem('tripid')

const DetailDisplay = (props) => {
    const bookingHandler=()=>{
        if(sessionStorage.getItem('login_token')){
            props.history.push(`/booking/${tripID}`)
        }
        else{
            alert("for booking user must have to login first....")
            props.history.push('/login')
        }
    }
    const renderDetails=({details_data})=>{
        // const tripID = sessionStorage.getItem('tripid')
        if(details_data){
            // console.log("In details display page", {details_data})
            // console.log(details_data.name)
            const item = (details_data)
                return(
                    <div className="hotel_details">
                        <img src={item.thumb} alt="images"/>
                        <h3>{item.name}, {item.city_name}</h3>
                        <p>{item.locality}</p>
                        <p>{item.address}</p>             
                        <h5>Price {item.cost}/night</h5>
                        <Link to={`/list/${tripID}`}><button className="btn btn-outline-secondary" type="submit">Back</button></Link>
                        <button className="btn btn-outline-success" type="submit" onClick={bookingHandler}>Place Booking</button>
                     </div>
                 )
            }
            else{
                return(
                    <center><h1>LOADING....</h1></center>
                )
            }
    }
    return (
        <div className="hotel_details_main">
            <h1>Hotel Details</h1><hr/>
            {renderDetails(props)}
        </div>
    )
}

export default withRouter(DetailDisplay);
