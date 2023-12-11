import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { fetchPopularData, fetchTrendingData } from "./utils/fetchData";

const App = () => {
  const [popularData, setpopularData] = useState();
  const [trendingData, setTrendingData] = useState();

  useEffect(() => {
    // Fetch popular Movies for the Hero Section
    const fetchPopularDataAsync = async () => {
      try {
        const data = await fetchPopularData();
        setpopularData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchTrendingDataAsync = async () => {
      try {
        const data = await fetchTrendingData();
        setTrendingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularDataAsync();
    fetchTrendingDataAsync();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AppRoutes popularData={popularData} trendingData={trendingData} />
      </BrowserRouter>
    </div>
  );
};

export default App;
