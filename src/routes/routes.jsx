import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<MovieDetail />} />
    </Routes>
  );
};

export default AppRoutes;
