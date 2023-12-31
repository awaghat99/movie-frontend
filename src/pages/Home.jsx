import React from "react";
import Hero from "../sections/Hero";
import HomeMovies from "../sections/HomeMovies";

const Home = (props) => {
  return (
    <main>
      <section>
        <Hero popularData={props.popularData} />
      </section>
      <section className="bg-navy pt-28 pb-8 max-sm:pt-64 text-white padding-x">
        <HomeMovies
          trendingData={props.trendingData}
          nowPlayingData={props.nowPlayingData}
          upcomingData={props.upcomingData}
        />
      </section>
    </main>
  );
};

export default Home;
