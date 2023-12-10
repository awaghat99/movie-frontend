import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { fetchPopularData } from "./utils/fetchData";

const App = () => {
  const [popularData, setpopularData] = useState();

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

    fetchPopularDataAsync();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AppRoutes popularData={popularData} />
      </BrowserRouter>
    </div>
  );
};

export default App;
