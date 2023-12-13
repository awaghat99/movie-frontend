import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";
import SearchResults from "../pages/SearchResults.jsx";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            popularData={props.popularData}
            trendingData={props.trendingData}
            nowPlayingData={props.nowPlayingData}
            upcomingData={props.upcomingData}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/movie/search/:term" element={<SearchResults />} />
    </Routes>
  );
};

export default AppRoutes;
