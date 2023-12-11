import React from "react";
import MovieRow from "../components/MovieRow";
import fire from "../assets/icons/fire.svg";
import reel from "../assets/icons/reel.svg";
import popcorn from "../assets/icons/popcorn.svg";

const HomeMovies = (props) => {
  const categories = [
    {
      category: "Trending This Week",
      categoryData: props.trendingData,
      icon: fire,
    },
    {
      category: "Now In Theaters",
      categoryData: props.nowPlayingData,
      icon: popcorn,
    },
    {
      category: "Upcoming Movies",
      categoryData: props.upcomingData,
      icon: reel,
    },
  ];
  return (
    <section>
      {categories.map((category, index) => (
        <MovieRow
          category={category.category}
          key={index}
          categoryData={category.categoryData}
          icon={category.icon}
        />
      ))}
    </section>
  );
};

export default HomeMovies;
