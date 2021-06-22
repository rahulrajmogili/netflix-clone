const API_KEY = "520d54fa7f8f33501226fc513b376724";

requests = {
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrendingAllDay: `/trending/all/day?api_key=${API_KEY}`,
  fetchPopular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTV: `/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
