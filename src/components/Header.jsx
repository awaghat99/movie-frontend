import React from "react";
import search from "../assets/icons/search.svg";

const Header = () => {
  return (
    <header className=" w-screen font-inter absolute z-10 padding-x pt-4 flex justify-between items-center">
      <p className="text-xl text-white">
        The <br />
        <span className="uppercase font-bold text-2xl">Trailers</span>
      </p>
      <form className="flex text-xs py-2 px-3 rounded-md  bg-semi-gray backdrop-blur-sm ">
        <input type="search" placeholder="Search for a movie" className="bg-transparent border-0" />
        <button type="submit" className="w-[16px] bg-search bg-contain bg-no-repeat"></button>
      </form>
    </header>
  );
};

export default Header;
