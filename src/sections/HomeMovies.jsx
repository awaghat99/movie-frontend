import React from "react";
import MovieRow from "../components/MovieRow";

const HomeMovies = (props) => {
  const categories = ["Trending", "Upcoming", "Popular"];
  return (
    <section>
      {categories.map((category, index) => (
        <MovieRow category={category} key={index} trendingData={props.trendingData} />
      ))}
    </section>
  );
};

export default HomeMovies;
