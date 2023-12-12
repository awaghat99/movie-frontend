import React from "react";
import WhereToWatch from "../components/WhereToWatch";

const MovieInfo = (props) => {
  return (
    <section className="font-inter">
      <div className="flex">
        <div className="w-2/3 pr-12">
          <h3 className="text-lg text-slate-500 uppercase">Description</h3>
          <p className="text-white text-sm mt-4">{props.movieDetail && props.movieDetail.overview}</p>
        </div>
        <div className="w-1/3">
          <WhereToWatch movieDetail={props.movieDetail} />
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
