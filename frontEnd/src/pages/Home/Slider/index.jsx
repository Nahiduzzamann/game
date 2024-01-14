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
      url: "https://i.ibb.co/YjMKb2K/Untitled-design.png",
      caption: "Slide 1",
    },
    {
      url: "https://dl.memuplay.com/new_market/img/com.achievedreams.beach.sc0.2023-10-09-09-33-35_2x.jpg",
      caption: "Slide 2",
    },
    {
      url: "https://www.abestfashion.com/wp-content/uploads/2021/02/pexels-aidan-howe-4677402-scaled.jpg",
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
