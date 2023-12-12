import React from "react";
import WhereToWatch from "../components/WhereToWatch";
import Cast from "../components/Cast";

const MovieInfo = (props) => {
  return (
    <section className="font-inter">
      <div className="flex flex-wrap gap-y-6">
        <div className="w-2/3 pr-12 max-md:w-full max-md:pr-0">
          <div>
            <h3 className="text-lg text-slate-500 uppercase">Description</h3>
            <p className="text-white text-sm mt-4">{props.movieDetail && props.movieDetail.overview}</p>
          </div>
          <div className="mt-10">
            <Cast movieDetail={props.movieDetail} />
          </div>
        </div>
        <div className="w-1/3 max-md:w-full max-md:mt-10">
          <WhereToWatch movieDetail={props.movieDetail} />
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
