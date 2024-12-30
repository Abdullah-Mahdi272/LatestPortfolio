import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImages/CarouselChild";
import "./Carousel.css";

function IndividualIntervalsExample() {
  const [isSliding, setIsSliding] = useState(false);

  return (
    <div>
      <Carousel
        onSlide={() => setIsSliding(true)}
        onSlid={() => setIsSliding(false)}
      >
        <Carousel.Item interval={5000}>
          <ExampleCarouselImage
            size={500}
            image="https://i.imgur.com/PoVVPvD.jpeg"
            text="First slide"
          />
          <Carousel.Caption
            className={`carousel-caption ${isSliding ? "fade-out" : "fade-in"}`}
          >
            <h3 className="carousel-title">First slide label</h3>
            <p className="carousel-description">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <ExampleCarouselImage
            size={500}
            image="https://i.imgur.com/i5i4MK2.jpeg"
            text="Second slide"
          />
          <Carousel.Caption
            className={`carousel-caption ${isSliding ? "fade-out" : "fade-in"}`}
          >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <ExampleCarouselImage
            size={500}
            image="https://i.imgur.com/sfPRCZ2.jpeg"
            text="Third slide"
          />
          <Carousel.Caption
            className={`carousel-caption ${isSliding ? "fade-out" : "fade-in"}`}
          >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
