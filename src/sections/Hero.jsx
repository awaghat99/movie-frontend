import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Hero = (props) => {
  const [dataToDisplay, setDataToDisplay] = useState();
  const [activeCardId, setActiveCardId] = useState();

  useEffect(() => {
    // Set Data to display to first popular movie on initial render
    if (props.popularData && props.popularData.results.length > 0) {
      setDataToDisplay(props.popularData.results[0]);
    }

    if (props.popularData && props.popularData.results.length > 0) {
      setActiveCardId(props.popularData.results[0].id);
    }
  }, [props.popularData]);

  const handleCardClick = (cardId) => {
    setActiveCardId(cardId);
  };

  const backgroundImageUrl =
    dataToDisplay && `url(https://image.tmdb.org/t/p/original/${dataToDisplay.backdrop_path})`;

  return (
    <section className="relative">
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className=" w-full aspect-[2.5] bg-cover bg-center max-sm:aspect-[1.25] relative">
        <div className="padding-x flex flex-col h-full justify-center gap-y-6 text-white font-bold  font-inter ">
          <h1 className="uppercase tracking-tighter text-4xl max-sm:text-xl">
            {dataToDisplay && dataToDisplay.title}
          </h1>
          <Link
            to={`movie/${dataToDisplay && dataToDisplay.id}`}
            className="bg-green w-fit rounded-md px-4 py-2 text-sm uppercase">
            Movie Details
          </Link>
        </div>
        <div className="flex absolute z-10 -bottom-6 w-full padding-x justify-between flex-wrap max-sm:gap-y-3 max-sm:-bottom-[35vw]">
          {props.popularData &&
            props.popularData.results
              .slice(0, 4)
              .map((card, index) => (
                <MovieCard
                  key={index}
                  cardData={card}
                  setDataToDisplay={setDataToDisplay}
                  activeCardId={activeCardId}
                  onCardClick={handleCardClick}
                />
              ))}
        </div>
      </div>
      <div className="h-[25vh] w-full absolute bg-gradient-to-t from-navy -bottom-0 z-[5] max-sm:h-[10vh]"></div>
    </section>
  );
};

export default Hero;
