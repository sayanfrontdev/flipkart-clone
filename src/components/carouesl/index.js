import React from "react";
import Slider from "react-slick";
import { carouselImages } from "./carouselData";
import "./carousel.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Carousel = () => {
  return (
    <div className="carousel_wrapper">
      <Slider
        autoplay={true}
        speed={500}
        nextArrow={<NextButton />}
        prevArrow={<PrevButton />}
      >
        {carouselImages.map((item, indx) => (
          <div className="carousel_item" key={indx}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " carousel_btn carousel_nxt_btn"}
      style={style}
      onClick={onClick}
    >
      <div className="carousel_btn_icon">
        <ChevronRightIcon sx={{ color: "black" }} />
      </div>
    </div>
  );
};

const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " carousel_btn carousel_prev_btn"}
      style={style}
      onClick={onClick}
    >
      <div className="carousel_btn_icon">
        <ChevronLeftIcon sx={{ color: "black" }} />
      </div>
    </div>
  );
};

export default Carousel;
