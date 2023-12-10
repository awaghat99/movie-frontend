import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Hero = (props) => {
  const [dataToDisplay, setDataToDisplay] = useState();

  useEffect(() => {
    // Update dataToDisplay when props.popularData.results changes
    if (props.popularData && props.popularData.results.length > 0) {
      setDataToDisplay(props.popularData.results[0]);
    }
  }, [props.popularData]);

  const backgroundImageUrl =
    dataToDisplay && `url(https://image.tmdb.org/t/p/original/${dataToDisplay.backdrop_path})`;

  return (
    <section className="relative">
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className=" w-full aspect-[2.5] bg-cover bg-center max-sm:aspect-[1.25] relative">
        <div className="padding-x flex h-full items-center text-white font-bold text-4xl font-inter max-sm:text-xl">
          <h1 className="uppercase tracking-tighter ">{dataToDisplay && dataToDisplay.title}</h1>
        </div>
        <div className="flex absolute z-10 -bottom-6 w-full padding-x justify-between flex-wrap max-sm:gap-y-3 max-sm:-bottom-[35vw]">
          {props.popularData &&
            props.popularData.results
              .slice(0, 4)
              .map((card, index) => (
                <MovieCard key={index} cardData={card} setDataToDisplay={setDataToDisplay} />
              ))}
        </div>
      </div>
      <div className="h-[25vh] w-full absolute bg-gradient-to-t from-navy -bottom-0 z-[5] max-sm:h-[10vh]"></div>
    </section>
  );
};

export default Hero;
