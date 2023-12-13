import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header className=" w-full font-inter absolute z-10 padding-x pt-4 flex justify-between items-center">
      <Link to="/" className="text-xl text-white max-sm:text-md">
        The <br />
        <span className="uppercase font-bold text-2xl max-sm:text-lg">Trailers</span>
      </Link>
      <Search />
    </header>
  );
};

export default Header;
