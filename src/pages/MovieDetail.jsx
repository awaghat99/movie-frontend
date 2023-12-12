import React, { useEffect, useState } from "react";
import { fetchMovieDetailData } from "../utils/fetchData";
import { useParams } from "react-router-dom";
import MovieHero from "../sections/MovieHero";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetailDataAsync = async () => {
      try {
        const data = await fetchMovieDetailData(id);
        setMovieDetail(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieDetailDataAsync();
  }, [id]);

  return (
    <main>
      <section>
        <MovieHero movieDetail={movieDetail} />
      </section>
    </main>
  );
};

export default MovieDetail;
