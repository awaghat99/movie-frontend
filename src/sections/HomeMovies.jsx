import React from "react";
import MovieRow from "../components/MovieRow";

const HomeMovies = () => {
  const categories = ["Trending", "Upcoming", "Popular"];
  return (
    <section>
      {categories.map((category, index) => (
        <MovieRow category={category} key={index} />
      ))}
    </section>
  );
};

export default HomeMovies;
