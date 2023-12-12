import React from "react";

const Cast = (props) => {
  return (
    <>
      <h3 className="text-lg text-slate-500 uppercase">Notable Cast</h3>
      <div className="flex flex-wrap gap-y-4 gap-x-1 mt-4">
        {props.movieDetail &&
          props.movieDetail.credits.cast.slice(0, 9).map((actor, index) => {
            const backgroundImageUrl = `url(
                "https://image.tmdb.org/t/p/original/${actor.profile_path}"
              )`;
            return (
              <div className="w-[18%] text-center max-sm:w-[32%]" key={index}>
                <div
                  style={{ backgroundImage: backgroundImageUrl }}
                  className="bg-center bg-cover w-[40%] aspect-square rounded-full mx-auto"></div>
                <p className="text-white text-xs mt-2 max-sm:text-[10px]">{actor.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cast;
