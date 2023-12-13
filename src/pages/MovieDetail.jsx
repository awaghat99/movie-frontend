import React, { useEffect, useState } from "react";
import { fetchMovieDetailData } from "../utils/fetchData";
import { useParams } from "react-router-dom";
import MovieHero from "../sections/MovieHero";
import MovieInfo from "../sections/MovieInfo";
import MovieRow from "../components/MovieRow";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetailDataAsync = async () => {
      try {
        const data = await fetchMovieDetailData(id);
        setMovieDetail(data);
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
      <section className="padding-x bg-navy pt-28 max-sm:pt-64">
        <MovieInfo movieDetail={movieDetail} />
      </section>
      <section className="padding-x bg-navy pb-8  text-white pt-20">
        <MovieRow
          category="Similar Movies You May Like"
          categoryData={movieDetail && movieDetail.similar}
          movieDetailPage={true}
        />
      </section>
    </main>
  );
};

export default MovieDetail;
