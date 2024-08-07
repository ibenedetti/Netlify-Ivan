import React from "react";
import "./style.css";

const Carousel = ({ images }) => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": images.length }}>
        {images.map((src, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
