import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div
        className={"card fade"}
        style={{ backgroundColor: this.props.slide.bgColor }}
      >
        <p>{this.props.slide.id}</p>
      </div>
    );
  }
}

export default Card;
