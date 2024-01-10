import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slider() {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    {
      url: "https://i.ibb.co/cTLPNhs/THREE-01.jpg",
      caption: "Slide 1",
    },
    {
      url: "https://i.ibb.co/bHzHdS7/TWO-01.jpg",
      caption: "Slide 2",
    },
    {
      url: "https://i.ibb.co/njS0gCT/ONE-01.jpg",
      caption: "Slide 3",
    },
  ];
  return (
    <div className="slide-container  mt-4">
      <Slide indicators arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
