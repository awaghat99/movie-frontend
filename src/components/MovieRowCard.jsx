import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MovieRowCard = (props) => {
  // Function to format the release date
  const formatReleaseDate = (dateString) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const { id } = useParams();

  useEffect(() => {
    // Scroll to the top when the component mounts
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, [id]);

  const backgroundImageUrl =
    props.movieData &&
    (props.movieData.poster_path
      ? `url(https://image.tmdb.org/t/p/original/${props.movieData.poster_path})`
      : "url('https://via.placeholder.com/600/808080/000000?text=No+Poster+Available')");

  return (
    <Link to={`/movie/${props.movieData && props.movieData.id}`} className="w-full h-full font-inter">
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className="w-full h-[75%] bg-cover bg-center rounded-xl max-sm:h-[65%]"></div>
      <div className="w-full h-[25%] mt-2 max-sm:h-[35%]">
        <h3 className="text-md overflow-hidden overflow-ellipsis whitespace-nowrap max-sm:text-sm">
          {props.movieData && props.movieData.title}
        </h3>
        <div className="text-xs flex gap-x-2 mt-2 items-center max-sm:text-[8px]">
          <p>{props.movieData && formatReleaseDate(props.movieData.release_date)}</p>
          <p className="rounded-md border-yellow-300 border-[1px] px-1 py-1">Theater</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieRowCard;
