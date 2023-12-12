import React from "react";

const MovieDetailCard = (props) => {
  return (
    <div className="bg-semi-gray backdrop-blur-sm relative  py-2 w-[22%] aspect-[1.8] rounded-md flex items-center justify-center max-sm:w-[48%]">
      <p className="-rotate-90 text-slate-500 font-inter uppercase tracking-tight text-[12px] absolute left-0 max-lg:text-[10px]">
        {props.title}
      </p>
      <p className="font-inter text-slate-200 uppercase tracking-tighter relative z-10 text-2xl font-bold max-lg:text-[16px]">
        {props.text}
      </p>
    </div>
  );
};

export default MovieDetailCard;
