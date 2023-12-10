import React from "react";
import Hero from "../sections/Hero";

const Home = (props) => {
  return (
    <main>
      <section>
        <Hero popularData={props.popularData} />
      </section>
      <section className="bg-navy h-screen">
        <h1>Test</h1>
      </section>
    </main>
  );
};

export default Home;
