import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import axios from "axios";
import Pages from "./Pages";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const BASE_SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    selectedFilter: "popularity.desc",
    selectedGenre: "",
    selectedLanguage: "",
  });

  useEffect(() => {
    axios.get(GENRE_API).then((res) => setGenres(res.data.genres));
    getMovies(FEATURED_API, filterOptions.selectedFilter, filterOptions.selectedGenre, filterOptions.selectedLanguage, currentPage);
  }, [filterOptions, currentPage]);

  const getMovies = (API, filter, genre, language, page) => {
    axios
      .get(API, {
        params: {
          sort_by: filter,
          with_genres: genre,
          with_original_language: language,
          page,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const handleMovieRecommenderClick = () => {
    setShowFilters(true);
    setFilterOptions({
      selectedFilter: "popularity.desc",
      selectedGenre: "",
      selectedLanguage: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      const SEARCH_API = BASE_SEARCH_API + searchTerm;
      getMovies(SEARCH_API, filterOptions.selectedFilter, filterOptions.selectedGenre, filterOptions.selectedLanguage, currentPage);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search for a movie");
    } else {
      toastWarnNotify("Please enter a search term");
    }
  };

  return (
    <>
      {/* Navbar with Movie Recommender Button, Search Bar, and Pagination */}
      <div className="navbar-container">
        <button className="movie-recommender-btn" onClick={handleMovieRecommenderClick}>
          Movie Recommender
        </button>

        <form className="search" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="pagination-buttons">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
          <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
        </div>
      </div>

      {/* Filter Options (Visible only after clicking Movie Recommender) */}
      {showFilters && (
        <div className="filter-options">
          <label>
            Sort by:
            <select
              value={filterOptions.selectedFilter}
              onChange={(e) => setFilterOptions({ ...filterOptions, selectedFilter: e.target.value })}
            >
              <option value="popularity.desc">Popularity</option>
              <option value="release_date.desc">Release Date</option>
            </select>
          </label>

          <label>
            Genre:
            <select
              value={filterOptions.selectedGenre}
              onChange={(e) => setFilterOptions({ ...filterOptions, selectedGenre: e.target.value })}
            >
              <option value="">All</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Language:
            <select
              value={filterOptions.selectedLanguage}
              onChange={(e) => setFilterOptions({ ...filterOptions, selectedLanguage: e.target.value })}
            >
               <option value="">All</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
    <option value="fr">French</option>
    <option value="de">German</option>
    <option value="it">Italian</option>
    <option value="ja">Japanese</option>
    <option value="hi">Hindi</option>
    <option value="bn">Bengali</option>
    <option value="te">Telugu</option>
    <option value="ta">Tamil</option>
    <option value="ur">Urdu</option>
    <option value="kn">Kannada</option>
    <option value="mr">Marathi</option>
    <option value="ml">Malayalam</option>
    <option value="pa">Punjabi</option>
    <option value="gu">Gujarati</option>
    <option value="mr">Marathi</option>
    <option value="or">Oriya</option>
    <option value="as">Assamese</option>
    <option value="mr">Marathi</option>
    <option value="ne">Nepali</option>
    <option value="kok">Konkani</option>
    <option value="sd">Sindhi</option>
    <option value="si">Sinhala</option>
            </select>
          </label>
        </div>
      )}

      {/* Movie List */}
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
