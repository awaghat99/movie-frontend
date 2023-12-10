import React from "react";

const Header = () => {
  return (
    <header className=" w-full font-inter absolute z-10 padding-x pt-4 flex justify-between items-center">
      <p className="text-xl text-white max-sm:text-md">
        The <br />
        <span className="uppercase font-bold text-2xl max-sm:text-lg">Trailers</span>
      </p>
      <form className="flex text-xs py-2 px-3 rounded-md  bg-semi-gray backdrop-blur-sm ">
        <input
          type="search"
          placeholder="Search for a movie"
          className="bg-transparent border-0 focus:outline-none text-slate-200 max-sm:w-24"
        />
        <button type="submit" className="w-[16px] bg-search bg-contain bg-no-repeat"></button>
      </form>
    </header>
  );
};

export default Header;
