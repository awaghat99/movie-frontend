import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/movie/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex text-xs py-2 px-3 rounded-md  bg-semi-gray backdrop-blur-sm ">
      <input
        type="search"
        placeholder="Search for a movie"
        className="bg-transparent border-0 focus:outline-none text-slate-200 max-sm:w-24"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="w-[16px] bg-search bg-contain bg-no-repeat"></button>
    </form>
  );
};

export default Search;
