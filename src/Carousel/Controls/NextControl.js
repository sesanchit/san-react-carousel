import React, { Component } from "react";
import "./Controls.css";

class NextControl extends Component {
  render() {
    return (
      <button title="Next"
        className="rightArrow"
        onClick={this.props.gotoNextSlide}
      ></button>
    );
  }
}

export default NextControl;
