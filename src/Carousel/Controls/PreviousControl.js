import React, { Component } from "react";
import "./Controls.css";

class PreviousControl extends Component {
  render() {
    return (
      <button
        title="Previous"
        className="leftArrow"
        onClick={this.props.gotoPreviousSlide}
      ></button>
    );
  }
}

export default PreviousControl;
