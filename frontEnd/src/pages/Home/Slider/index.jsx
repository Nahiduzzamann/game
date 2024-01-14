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
      url: "https://store-images.s-microsoft.com/image/apps.18743.14062288212527999.210ebe00-23b0-413f-a095-f62d9a87156f.c2be24ab-1765-4938-b58a-03d9cedc732b?mode=scale&q=90&h=1080&w=1920",
      caption: "Slide 1",
    },
    {
      url: "https://dl.memuplay.com/new_market/img/com.achievedreams.beach.sc0.2023-10-09-09-33-35_2x.jpg",
      caption: "Slide 2",
    },
    {
      url: "https://www.analyticsinsight.net/wp-content/uploads/2023/06/online-casino4.png",
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
