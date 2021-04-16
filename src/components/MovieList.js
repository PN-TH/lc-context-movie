import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const URL = "https://api.themoviedb.org/3/discover/movie/";
  const API_KEY = "?api_key=f22eb05a70b166bd4e2c1312e15d8e8b";
  const language = "&language=fr-FR";

  useEffect(() => {
    axios
      .get(`${URL}${API_KEY}${language}`)
      .then((response) => {
          setMovies(response.data.results);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {movies.map((item) => (
        <Movie data={item} key={item.id} />
      ))}
    </div>
  );
};

export default MovieList;
