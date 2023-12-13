import React, { useRef } from "react";
import MovieRowCard from "./MovieRowCard";
import rightArrow from "../assets/icons/rightArrow.svg";
import leftArrow from "../assets/icons/leftArrow.svg";

const MovieRow = (props) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      if (direction === "right") {
        container.scrollLeft += container.offsetWidth;
      } else if (direction === "left") {
        container.scrollLeft -= container.offsetWidth;
      } // Scroll by one screen width
    }
  };

  return (
    <div className="mb-24 relative">
      <div className="flex uppercase text-lg mb-12">
        {props.icon && <img src={props.icon} alt="fire icon" className="w-6 mr-6 max-sm:mr-2" />}
        <h2 className={`font-inter ${props.movieDetailPage && "text-slate-500"}`}>{props.category}</h2>
      </div>

      <div className="flex flex-nowrap overflow-hidden scroll-smooth py-2" ref={scrollContainerRef}>
        {props.categoryData &&
          props.categoryData.results.map((movie, index) => (
            <div
              key={index}
              className="min-w-[16.66666%] px-3 box-border aspect-[0.5] max-lg:min-w-[20%] max-md:min-w-[25%] max-sm:min-w-[33.3334%] max-sm:aspect-[0.4]">
              <MovieRowCard movieData={movie} />
            </div>
          ))}
      </div>
      <div className="left-[-5%] top-1/2 absolute max-lg:left-[-2%]">
        <button
          onClick={() => {
            scroll("left");
          }}>
          <img src={leftArrow} alt="left arrow" className="w-6 bg-green rounded-full py-1 px-1 sm:w-10" />
        </button>
      </div>
      <div className="right-[-5%] top-1/2 absolute max-lg:right-[-2%]">
        <button
          onClick={() => {
            scroll("right");
          }}>
          <img src={rightArrow} alt="right arrow" className="w-6 bg-green rounded-full py-1 px-1 sm:w-10" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
