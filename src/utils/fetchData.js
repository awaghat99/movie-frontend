const api_key = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGU5MTc2NGJkODA1NDk1ZjRlYmFmYmIzNjUyMTA2YSIsInN1YiI6IjYzNDE3YTM3ZThkMDI4MDA3YTAwMWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bpLCiTGq1dS2wDXsZAXB-yN6Dy-Km5H4vQ_QErBdcE4",
  },
};

export const fetchPopularData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${api_key}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchTrendingData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${api_key}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
