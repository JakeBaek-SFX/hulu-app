const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=28`
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=35`
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=27`
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=10749`
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=9648`
  },
  fetchScifiMovies: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=35`
  },
  fetchWesternMovies: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=27`
  },
  fetchAnimationMovies: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=10749`
  },
  fetchTvmovieMovies: {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_gentres=9648`
  },
}