import React from "react";
import QuickSearch from "./QuickSearch";
import Search from "./Search";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

function Home() {
  return (
    <div style={{marginBottom:"50px"}}>
      <Carousel className="carousel offset-2" style={{width:"70%"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Swimming Pool</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Executive Banquet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Hotel Room</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="col-md-8 offset-2" style={{marginTop:"50px"}}>

        <div>
          <h3>Select Destination</h3>
          <hr/>
          <Search />
        </div>

        <div className="row" style={{marginTop:"50px"}}>
          <h3>Select Type</h3>
          <hr/>
          <QuickSearch />
        </div>

      </div>

    </div>
  );
}
export default Home;
