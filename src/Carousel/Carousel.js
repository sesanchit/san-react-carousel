import React, { Component } from "react";
import "./Carousel.css";
import Card from "../Card/Card";
import PreviousControl from "./Controls/PreviousControl";
import NextControl from "./Controls/NextControl";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startSlidePosition: 0,
      endSlidePosition: this.props.slidesToShow,
      visibleSlides: []
    };
  }

  componentDidMount() {
    this.setState({
      visibleSlides: this.props.slideData.slice(
        this.state.startSlidePosition,
        this.state.endSlidePosition
      )
    });
  }

  gotoPreviousSlide = () => {
    let startSlidePosition =
      this.state.startSlidePosition - this.props.slidesToShow;
    let endSlidePosition =
      this.state.endSlidePosition - this.props.slidesToShow;

    if (startSlidePosition < 0) {
      startSlidePosition =
        this.props.slideData.length - this.props.slidesToShow;
      endSlidePosition = this.props.slideData.length;
    }

    this.setState({
      startSlidePosition: startSlidePosition,
      endSlidePosition: endSlidePosition,
      visibleSlides: this.props.slideData.slice(
        startSlidePosition,
        endSlidePosition
      )
    });
  };

  gotoNextSlide = () => {
    let startSlidePosition =
      this.state.startSlidePosition + this.props.slidesToShow;
    let endSlidePosition =
      this.state.endSlidePosition + this.props.slidesToShow;

    if (startSlidePosition >= this.props.slideData.length) {
      startSlidePosition = 0;
      endSlidePosition = this.props.slidesToShow;
    }

    this.setState({
      startSlidePosition: startSlidePosition,
      endSlidePosition: endSlidePosition,
      visibleSlides: this.props.slideData.slice(
        startSlidePosition,
        endSlidePosition
      )
    });
  };

  render() {
    return (
      <div>
        <div className="carousel-container">
          <PreviousControl gotoPreviousSlide={() => this.gotoPreviousSlide()} />
          {this.state.visibleSlides.map((slide) => {
            return <Card key={slide.id} slide={slide} />;
          })}
          <NextControl gotoNextSlide={() => this.gotoNextSlide()} />
        </div>
        <div>Carousel</div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  slideData: [],
  slidesToShow: 2
};

export default Carousel;
