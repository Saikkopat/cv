import { React, Component } from "react";
import { Carousel } from "react-bootstrap";
import { LoremPicsum } from "react-lorem-picsum";

class Proyects extends Component {
  render() {
    return (
      <div id="proyects">
        <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <LoremPicsum className="d-md-block w-100" width={400} height={200} grayscale />
            <Carousel.Caption>
              <h3 className="carouselText carouselTitle">First slide label</h3>
              <p className="carouselText">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <LoremPicsum className="d-md-block w-100" width={400} height={200} />
            <Carousel.Caption>
              <h3 className="carouselText carouselTitle">Second slide label</h3>
              <p className="carouselText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <LoremPicsum className="d-md-block w-100" width={400} height={200} />
            <Carousel.Caption>
              <h3 className="carouselText carouselTitle">Third slide label</h3>
              <p className="carouselText">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Proyects;
