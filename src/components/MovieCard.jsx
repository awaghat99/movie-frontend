import React from "react";

const MovieCard = (props) => {
  const backgroundImageUrl = `url(https://image.tmdb.org/t/p/original/${props.cardData.backdrop_path})`;

  const setDataToDisplay = () => {
    props.setDataToDisplay(props.cardData);
  };

  return (
    <div
      onClick={setDataToDisplay}
      style={{ backgroundImage: backgroundImageUrl }}
      className="bg-cover bg-center relative px-2 py-2 w-[22%] aspect-[2] rounded-md flex items-end cursor-pointer max-sm:w-[48%] max-sm:items-center max-sm:text-center">
      <p className="font-inter text-slate-200 uppercase tracking-tighter relative z-10">
        {props.cardData.title}
      </p>
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md z-0"></div>
    </div>
  );
};

export default MovieCard;
