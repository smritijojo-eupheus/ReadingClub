import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import Slider1 from "../assets/img/Slider/Slider1.jpg";
import Slider2 from "../assets/img/Slider/Slider2.jpg";
import Slider3 from "../assets/img/Slider/Slider3.jpg";
import Slider4 from "../assets/img/Slider/Slider4.png";
import Slider5 from "../assets/img/Slider/Slider5.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = () => {
  return (
    <AutoplaySlider
      cancelOnInteraction={false}
      interval={1000}
      play={true}
      animation="cubeAnimation"
      className=" !h-[650px]"

      // sx={{ height: "50px" }}
    >
      <div data-src={Slider2} />
      <div data-src={Slider4} />
      <div data-src={Slider1} />
      {/* <div data-src={Slider5} />
      <div data-src={Slider3} /> */}
    </AutoplaySlider>
  );
};
