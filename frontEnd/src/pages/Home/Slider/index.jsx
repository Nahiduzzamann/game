import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import url from "../../../module";
export default function Slider({data}) {

  // const rotateAnimationHandler = (props, state) => {
  //   const transitionTime = props.transitionTime + "ms";
  //   const transitionTimingFunction = "ease-in-out";
  //   let slideStyle = {
  //     display: "block",
  //     minHeight: "100%",
  //     transitionTimingFunction: transitionTimingFunction,
  //     msTransitionTimingFunction: transitionTimingFunction,
  //     MozTransitionTimingFunction: transitionTimingFunction,
  //     WebkitTransitionTimingFunction: transitionTimingFunction,
  //     OTransitionTimingFunction: transitionTimingFunction,
  //     transform: `rotate(0)`,
  //     position:
  //       state.previousItem === state.selectedItem ? "relative" : "absolute",
  //     inset: "0 0 0 0",
  //     zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
  //     opacity: state.previousItem === state.selectedItem ? "1" : "0",
  //     WebkitTransitionDuration: transitionTime,
  //     MozTransitionDuration: transitionTime,
  //     OTransitionDuration: transitionTime,
  //     transitionDuration: transitionTime,
  //     msTransitionDuration: transitionTime,
  //   };
  //   return {
  //     slideStyle,
  //     selectedStyle: {
  //       ...slideStyle,
  //       opacity: 1,
  //       position: "relative",
  //       zIndex: 2,
  //       filter: `blur(0)`,
  //     },
  //     prevStyle: {
  //       ...slideStyle,
  //       transformOrigin: " 0 100%",
  //       transform: `rotate(${
  //         state.previousItem > state.selectedItem ? "-45deg" : "45deg"
  //       })`,
  //       opacity: "0",
  //       filter: `blur( ${
  //         state.previousItem === state.selectedItem ? "0px" : "5px"
  //       })`,
  //     },
      
  //   };
  // };
  return (
    <div className="box">
      <Carousel
      infiniteLoop={true}
      autoPlay={true}
        showIndicators
        showStatus ={false}
        showThumbs={false}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                <AiFillRightCircle></AiFillRightCircle>
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="nav_btn nav_btn_left">
                <AiFillLeftCircle></AiFillLeftCircle>
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
           
              onClick={clickHandler}
              className={`ind ${isSelected ? "active" : ""} `}
              key={index}
              role="button"
            />
          );
        }}
        transitionTime={310}
        // animationHandler={rotateAnimationHandler}
        swipeable={false}        
      >
        {data?.map((d, index) => (
          <div key={index} className="slide">
            <img alt="sample_file" src={`${url}${d.path}`} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
