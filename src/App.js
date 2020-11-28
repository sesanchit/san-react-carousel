import React from "react";
import "./styles.css";
import Carousel from "./Carousel/Carousel";

export default function App() {
  return (
    <div className="App">
      <Carousel slideData={data} />
    </div>
  );
}

const data = [
  {
    id: 1,
    bgColor: "#790c5a"
  },
  {
    id: 2,
    bgColor: "#cc0e74"
  },
  {
    id: 3,
    bgColor: "#6a097d"
  },
  {
    id: 4,
    bgColor: "#2d6187"
  },
  {
    id: 5,
    bgColor: "#14274e"
  },
  {
    id: 6,
    bgColor: "#c56183"
  },
  {
    id: 7,
    bgColor: "#006a71"
  },
  {
    id: 8,
    bgColor: "#40a8c4"
  }
];
