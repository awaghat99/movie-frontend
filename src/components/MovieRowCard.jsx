import React from "react";
import { Link } from "react-router-dom";

const MovieRowCard = (props) => {
  // Function to format the release date
  const formatReleaseDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const backgroundImageUrl = `url(https://image.tmdb.org/t/p/original/${props.movieData.poster_path})`;

  return (
    <Link to={`movie/${props.movieData && props.movieData.id}`} className="w-full h-full font-inter">
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className="w-full h-[75%] bg-cover bg-center rounded-xl"></div>
      <div className="w-full h-[25%] mt-2">
        <h3 className="text-md overflow-hidden overflow-ellipsis whitespace-nowrap">
          {props.movieData && props.movieData.title}
        </h3>
        <div className="text-xs flex gap-x-2 mt-2 items-center">
          <p>{props.movieData && formatReleaseDate(props.movieData.release_date)}</p>
          <p className="rounded-md border-yellow-300 border-[1px] px-1 py-1">Theater</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieRowCard;
