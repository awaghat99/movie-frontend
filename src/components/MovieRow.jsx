import React, { useRef } from "react";
import fire from "../assets/icons/fire.svg";
import MovieRowCard from "./MovieRowCard";

const MovieRow = (props) => {
  const movies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
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
    <div className="mb-24">
      <div className="flex uppercase text-lg mb-20">
        <img src={fire} alt="fire icon" className="w-6 mr-6 max-sm:mr-2" />
        <h2>{props.category}</h2>
      </div>

      <div className="flex flex-nowrap overflow-hidden scroll-smooth py-2" ref={scrollContainerRef}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className="min-w-[16.66%] pr-6 box-border aspect-[0.5] max-lg:min-w-[20%] max-md:min-w-[33.33%]">
            <MovieRowCard />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          scroll("right");
        }}>
        Go Right
      </button>

      <button
        onClick={() => {
          scroll("left");
        }}>
        Go Left
      </button>
    </div>
  );
};

export default MovieRow;
