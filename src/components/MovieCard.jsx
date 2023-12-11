import React from "react";

const MovieCard = (props) => {
  const backgroundImageUrl = `url(https://image.tmdb.org/t/p/original/${props.cardData.backdrop_path})`;

  const setDataToDisplay = () => {
    props.setDataToDisplay(props.cardData);

    props.onCardClick(props.cardData.id);
  };

  const isActive = props.activeCardId === props.cardData.id;

  return (
    <div
      onClick={setDataToDisplay}
      style={{ backgroundImage: backgroundImageUrl }}
      className={`bg-cover bg-center relative px-2 py-2 w-[22%] aspect-[1.8] rounded-md flex items-end cursor-pointer max-sm:w-[48%] max-sm:items-center max-sm:text-center max-sm:justify-center ${
        isActive ? "border-4 border-green" : ""
      }`}>
      <p className="font-inter text-slate-200 uppercase tracking-tighter relative z-10 text-sm overflow-hidden overflow-ellipsis  whitespace-nowrap">
        {props.cardData.title}
      </p>
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md z-0"></div>
    </div>
  );
};

export default MovieCard;
