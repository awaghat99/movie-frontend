import React from "react";
import MovieCard from "../components/MovieCard";

const Hero = (props) => {
  const array = [0, 1, 2, 3];
  return (
    <section className="relative">
      <div className="bg-hero w-screen aspect-[3] bg-cover bg-center max-sm:aspect-[1.25] relative">
        <div className="padding-x flex h-full items-center text-white font-bold text-4xl font-inter max-sm:text-xl">
          <h1 className="uppercase tracking-tighter ">Super mario Bros . movie</h1>
        </div>
        <div className="flex absolute z-10 -bottom-6 w-screen padding-x justify-between flex-wrap max-sm:gap-y-3 max-sm:-bottom-[35vw]">
          {props.popularData &&
            props.popularData.results
              .slice(0, 4)
              .map((card, index) => (
                <MovieCard key={index} cardData={card} backgroundImage={card.backdrop_path} />
              ))}
        </div>
      </div>
      <div className="h-[25vh] w-screen absolute bg-gradient-to-t from-navy -bottom-0 z-[5] max-sm:h-[10vh]"></div>
    </section>
  );
};

export default Hero;
