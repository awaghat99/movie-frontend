import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchResultsData } from "../utils/fetchData";
import MovieRowCard from "../components/MovieRowCard";

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState();

  const { term } = useParams();

  useEffect(() => {
    const fetchSearchResultsAsync = async () => {
      try {
        const data = await fetchSearchResultsData(term);
        setSearchResultsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSearchResultsAsync();
  }, [term]);

  return (
    <main className="bg-navy min-h-screen padding-x">
      <div>
        <p className="text-slate-500 text-6xl uppercase text-inter font-bold text-center pt-36 mb-24">
          You Searched For:
          <br /> {term}{" "}
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center text-white">
        {searchResultsData &&
          searchResultsData.results.map((movie, index) => (
            <div
              key={index}
              className=" w-[16.66666%] px-3 box-border aspect-[0.5] max-lg:min-w-[20%] max-md:min-w-[25%] max-sm:min-w-[33.3334%] max-sm:aspect-[0.45]">
              <MovieRowCard movieData={movie} />
            </div>
          ))}
      </div>
    </main>
  );
};

export default SearchResults;
