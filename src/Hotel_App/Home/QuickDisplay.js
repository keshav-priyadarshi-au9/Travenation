import React from "react";
import { Link } from "react-router-dom";
import "./quickdisplay.css";

const QuickDisplay = (props) => {

  const renderTripType = ({ tripType_data }) => {
    if (tripType_data) {
      return tripType_data.map((item) => {
        return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={item.image}
                className="card-img-top"
                alt="triptypeimage"
              />
              <div className="card-body">
                <p className="card-text">
                  Start your trip in {item.name} style{" "}
                </p>
                <Link to={`/list/${item.trip}`} className="btn btn-primary">
                  {item.name}
                </Link>
              </div>
            </div>
        );
      });
    }
    else{
      return(
          <center style={{marginLeft:"40%"}}><h1>LOADING....</h1></center>
      )
  }
  };
  
  return <center className="quicksearch">{renderTripType(props)}</center>;
};

export default QuickDisplay;
