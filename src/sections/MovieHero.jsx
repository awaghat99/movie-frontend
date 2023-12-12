import React from "react";
import MovieDetailCard from "../components/MovieDetailCard";

const MovieHero = (props) => {
  const backgroundImageUrl =
    props.movieDetail && `url(https://image.tmdb.org/t/p/original/${props.movieDetail.backdrop_path})`;

  const formatBudget = (budget) => {
    if (budget >= 1000000) {
      const roundedBudget = Math.round(budget / 1000000); // Round to the nearest million
      return `$${roundedBudget}M`;
    } else {
      // Add commas for better readability
      const formattedBudget = budget.toLocaleString();
      return `$${formattedBudget}`;
    }
  };

  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <section>
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className="w-full aspect-[2.5] bg-cover bg-center max-sm:aspect-[1.25] relative">
        <div className="h-[25vh] w-full absolute bg-gradient-to-t from-navy -bottom-0 z-[5] max-sm:h-[10vh]"></div>
        <div className="padding-x flex flex-col h-full justify-center gap-y-2 text-white font-bold  font-inter ">
          <h1 className="uppercase tracking-tighter text-4xl max-sm:text-xl">
            {props.movieDetail && props.movieDetail.title}
          </h1>
          <div className="flex gap-x-2">
            {props.movieDetail &&
              props.movieDetail.genres.map((genre, index) => (
                <p
                  key={index}
                  className="bg-gray-300 bg-opacity-50 backdrop-blur-sm text-xs font-inter border-[1px] rounded-md p-1">
                  {genre.name}
                </p>
              ))}
          </div>
        </div>
        <div className="flex absolute z-10 -bottom-6 w-full padding-x justify-between flex-wrap max-sm:gap-y-3 max-sm:-bottom-[35vw] ">
          <MovieDetailCard
            title="rating"
            text={props.movieDetail && props.movieDetail.vote_average.toFixed(1)}
          />
          <MovieDetailCard
            title="release"
            text={props.movieDetail && formatDate(props.movieDetail.release_date)}
          />
          <MovieDetailCard
            title="budget"
            text={props.movieDetail && formatBudget(props.movieDetail.budget)}
          />
          <MovieDetailCard title="length" text={props.movieDetail && `${props.movieDetail.runtime} mins`} />
        </div>
      </div>
    </section>
  );
};

export default MovieHero;
