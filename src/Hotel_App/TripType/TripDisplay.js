import React from 'react'
import {Link} from 'react-router-dom'
import './tripDisplay.css'

const TripDisplay = (props) => {
    const renderTrip = ({hotel_data}) => {
        if(hotel_data){
            return hotel_data.map((item)=>{
                return(
                    <div className="hotel" id={item._id}>
                        <img src={item.thumb} alt="images"/>
                        <div className="hotelInfo">
                            <h3>{item.name}, {item.city_name}</h3>
                            <h4>Price : {item.cost}/ Day</h4>
                            <label>
                                <Link to={`/details/${item._id}`}>
                                    <button className="btn btn-outline-primary" type="submit">More Details</button>
                                </Link>
                            </label>
                        </div>
                    </div>
                )
            })
        }
        else{
            return(
                <center style={{marginLeft:"100%"}}><h1>LOADING....</h1></center>
            )
        }
    }

    return(
        <div className="trip_type_main">
            <h1>Hotels</h1><hr/><br/>
            {renderTrip(props)}
        </div>
    )
}

export default TripDisplay
