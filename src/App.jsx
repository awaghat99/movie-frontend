import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Header from "./components/Header";
import {
  fetchPopularData,
  fetchTrendingData,
  fetchNowPlayingData,
  fetchUpcomingData,
} from "./utils/fetchData";

const App = () => {
  const [popularData, setPopularData] = useState();
  const [trendingData, setTrendingData] = useState();
  const [nowPlayingData, setNowPlayingData] = useState();
  const [upcomingData, setUpcomingData] = useState();

  useEffect(() => {
    // Fetch popular Movies for the Hero Section
    const fetchPopularDataAsync = async () => {
      try {
        const data = await fetchPopularData();
        setPopularData(data);
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

    const fetchNowPlayingDataAsync = async () => {
      try {
        const data = await fetchNowPlayingData();
        setNowPlayingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchUpcomingDataAsync = async () => {
      try {
        const data = await fetchUpcomingData();
        setUpcomingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularDataAsync();
    fetchTrendingDataAsync();
    fetchUpcomingDataAsync();
    fetchNowPlayingDataAsync();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes
          popularData={popularData}
          trendingData={trendingData}
          nowPlayingData={nowPlayingData}
          upcomingData={upcomingData}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
